const auth = require("../../middleware/auth")
const config = require("config")
const express = require("express")
const Profile = require("../../models/Profile")
const request = require("request")
const router = express.Router()
const User = require("../../models/User")
const Post = require("../../models/Post")

const { check, validationResult } = require("express-validator")

// @route   GET api/profile/me
// @desc    Get current user profile
// @access  Private
router.get("/me", auth, async (req, res) => {
  try {
    const profile = await Profile.findOne({
      user: req.user.id,
    }).populate("user", ["name", "avatar"])

    if (!profile) {
      return res.status(400).json({
        msg: "There is no profile for this user",
      })
    }

    res.json(profile)
  } catch (err) {
    console.error(err.message)
    res.status(500).send("Server Error")
  }
})

// @route   POST api/profile
// @desc    Create or update a user profile
// @access  Private
router.post(
  "/",
  [auth, [check("status", "Status is required").not().isEmpty(), check("skills", "Skills is required").not().isEmpty()]],
  async (req, res) => {
    const errors = validationResult(req)

    // Check for any errors
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() })
    }

    // Pull everything from the request body
    const { company, website, location, bio, status, githubUsername, skills, youtube, facebook, twitter, instagram, linkedin } = req.body

    // Build profile fields object for DB insertion
    const profileFields = {}
    profileFields.user = req.user.id

    // Check if the fields are coming in before we set them
    if (company) profileFields.company = company
    if (website) profileFields.website = website
    if (location) profileFields.location = location
    if (bio) profileFields.bio = bio
    if (status) profileFields.status = status
    if (githubUsername) profileFields.githubUsername = githubUsername

    if (skills) {
      profileFields.skills = skills.split(",").map((skill) => skill.trim())
    }

    // Init the social object
    profileFields.social = {}

    // Check if the fields are coming in before we set them
    if (youtube) profileFields.social.youtube = youtube
    if (facebook) profileFields.social.facebook = facebook
    if (twitter) profileFields.social.twitter = twitter
    if (instagram) profileFields.social.instagram = instagram
    if (linkedin) profileFields.social.linkedin = linkedin

    try {
      // Look for the profile by the user
      let profile = await Profile.findOne({ user: req.user.id })

      // If the profile is found then update it
      if (profile) {
        profile = await Profile.findOneAndUpdate({ user: req.user.id }, { $set: profileFields }, { new: true })
        return res.json(profile)
      }

      // If not found, create a new profile and save it
      profile = new Profile(profileFields)
      await profile.save()

      // Return the new profile
      res.json(profile)
    } catch (err) {
      console.error(err.message)
      res.status(500).send("Server Error")
    }
  }
)

// @route   GET api/profile
// @desc    Get all profiles
// @access  Public
router.get("/", async (req, res) => {
  try {
    const profiles = await Profile.find().populate("user", ["name", "avatar"])
    res.json(profiles)
  } catch (err) {
    console.error(err.message)
    res.status(500).send("Server Error")
  }
})

// @route   GET api/profile/user/:user_id
// @desc    Get profile by id
// @access  Public
router.get("/user/:user_id", async (req, res) => {
  try {
    const profile = await Profile.findOne({ user: req.params.user_id }).populate("user", ["name", "avatar"])

    if (!profile) return res.status(400).json({ msg: "Profile not found" })

    res.json(profile)
  } catch (err) {
    console.error(err.message)

    // If we have object id error, the error should not be a server error
    if (err.kind == "ObjectId") {
      return res.status(400).json({ msg: "Profile not found" })
    }

    res.status(500).send("Server Error")
  }
})

// @route   DELETE api/profile
// @desc    DELETE profile, user and posts
// @access  Private
router.delete("/", auth, async (req, res) => {
  try {
    // Remove user posts
    // Remove profile
    // Remove user
    await Promise.all([
      Post.deleteMany({ user: req.user.id }),
      Profile.findOneAndRemove({ user: req.user.id }),
      User.findOneAndRemove({ _id: req.user.id })
    ])

    // Response message
    res.json({ msg: "User deleted" })
  } catch (err) {
    console.error(err.message)
    res.status(500).send("Server Error")
  }
})

// @route   PUT api/profile/experience
// @desc    Add profile experience
// @access  Private
router.put(
  "/experience",
  [
    auth,
    [
      check("title", "Title is required").not().isEmpty(),
      check("company", "Company is required").not().isEmpty(),
      check("from", "From date is required").not().isEmpty(),
    ],
  ],
  async (req, res) => {
    const errors = validationResult(req)

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() })
    }

    const { title, company, from, to, current, description } = req.body

    const newExp = {
      title,
      company,
      from,
      to,
      current,
      description,
    }

    try {
      const profile = await Profile.findOne({ user: req.user.id })
      profile.experience.unshift(newExp)
      await profile.save()
      res.json(profile)
    } catch (error) {
      console.error(error.message)
      res.status(500).send("Server Error")
    }
  }
)

// @route   DELETE api/profile/experience/:exp_id
// @desc    Delete experience from profile
// @access  Private
router.delete("/experience/:exp_id", auth, async (req, res) => {
  try {
    const profile = await Profile.findOne({ user: req.user.id })

    // Getting the profile of the user
    // and then getting the index
    const removeIndex = profile.experience.filter((item) => item.id !== req.params.exp_id)

    // Removing the index
    profile.experience.splice(removeIndex, 1)

    // Saving the chances
    await profile.save()

    // Return the profile as response
    res.json(profile)
  } catch (error) {
    console.error(error.message)
    res.status(500).send("Server Error")
  }
})

// @route   PUT api/profile/education
// @desc    Add profile education
// @access  Private
router.put(
  "/education",
  [
    auth,
    [
      check("school", "School is required").not().isEmpty(),
      check("degree", "Degree is required").not().isEmpty(),
      check("fieldOfStudy", "Field of study is required").not().isEmpty(),
      check("from", "From date is required").not().isEmpty(),
    ],
  ],
  async (req, res) => {
    const errors = validationResult(req)

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() })
    }

    const { school, degree, fieldOfStudy, from, to, current, description } = req.body

    const newEdu = {
      school,
      degree,
      fieldOfStudy,
      from,
      to,
      current,
      description,
    }

    try {
      const profile = await Profile.findOne({ user: req.user.id })
      profile.education.unshift(newEdu)
      await profile.save()
      res.json(profile)
    } catch (error) {
      console.error(error.message)
      res.status(500).send("Server Error")
    }
  }
)

// @route   DELETE api/profile/education/:edu_id
// @desc    Delete education from profile
// @access  Private
router.delete("/education/:edu_id", auth, async (req, res) => {
  try {
    const profile = await Profile.findOne({ user: req.user.id })

    // Getting the profile of the user
    // and then getting the index
    const removeIndex = profile.education.filter((item) => item.id !== req.params.edu_id)

    // Removing the index
    profile.education.splice(removeIndex, 1)

    // Saving the chances
    await profile.save()

    // Return the profile as response
    res.json(profile)
  } catch (error) {
    console.error(error.message)
    res.status(500).send("Server Error")
  }
})

// @route   GET api/profile/github/:username
// @desc    Get user repos from Github
// @access  Public
router.get("/github/:username", (req, res) => {
  try {
    const options = {
      uri: `https://api.github.com/users/${req.params.username}/repos?per_page=5&sort=created:asc&client_id=${config.get(
        "githubClientID"
      )}&client_secret=${config.get("githubSecret")}`,
      method: "GET",
      headers: { "user-agent": "node.js" },
    }

    request(options, (error, response, body) => {
      if (error) console.error(error)

      if (response.statusCode !== 200) {
        return res.status(404).json({ msg: "No Github profile found" })
      }

      res.json(JSON.parse(body))
    })
  } catch (error) {
    console.log(error.message)
    res.status(404).json({ msg: "No Github profile found" })
  }
})

module.exports = router
