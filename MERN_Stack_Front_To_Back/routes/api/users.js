const { check, validationResult } = require("express-validator")
const bcrypt = require("bcryptjs")
const config = require("config")
const express = require("express")
const gravatar = require("gravatar")
const jwt = require("jsonwebtoken")
const router = express.Router()
const User = require("../../models/User")

// @route   POST api/users
// @desc    Register user
// @access  Public
router.post(
  "/",
  [
    check("name", "Name is required").not().isEmpty(),
    check("email", "Please include a valid email").isEmail(),
    check("password", "Please enter a password with 6 or more characters").isLength({ min: 6 }),
  ],
  async (req, res) => {
    const errors = validationResult(req)

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() })
    }

    const { name, email, password } = req.body

    try {
      // See if user exists
      let user = await User.findOne({ email })

      if (user) {
        return res.status(400).json({ errors: [{ msg: "User already exists" }] })
      }

      // Get the gravatar image
      const avatar = gravatar.url(email, {
        s: "200",
        r: "pg",
        d: "mm",
      })

      // Create the user
      user = new User({
        name,
        email,
        avatar,
        password,
      })

      // Encrypt password
      const salt = await bcrypt.genSalt(10)
      user.password = await bcrypt.hash(password, salt)

      // Save user to the database
      await user.save()

      // Get the id from the db response
      const payload = {
        user: {
          id: user.id,
        },
      }

      // Sign the token with payload, the secret and expiration
      jwt.sign(payload, config.get("jwtSecret"), { expiresIn: 360000 }, (error, token) => {
        if (error) throw error
        res.json({ token })
      })
    } catch (error) {
      console.error(error)
      res.status(500).send("server error")
    }
  }
)

module.exports = router
