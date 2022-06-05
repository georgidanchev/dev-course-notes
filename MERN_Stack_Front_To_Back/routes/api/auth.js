const { check, validationResult } = require("express-validator")
const auth = require("../../middleware/auth")
const bcrypt = require("bcryptjs")
const config = require("config")
const express = require("express")
const jwt = require("jsonwebtoken")
const router = express.Router()
const User = require("../../models/User")

// @route   GET api/auth
// @desc    Test route
// @access  Public
router.get("/", auth, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select("-password")
    res.json(user)
  } catch (error) {
    console.error(error.message)
    res.status(500).send("Server error")
  }
})

// @route   POST api/auth
// @desc    Authenticate user & get token
// @access  Public
router.post(
  "/",
  [check("email", "Please include a valid email").isEmail(), check("password", "Please is required").exists()],
  async (req, res) => {
    const errors = validationResult(req)

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() })
    }

    const { email, password } = req.body

    try {
      // See if user exists
      let user = await User.findOne({ email })

      if (!user) {
        return res.status(400).json({ errors: [{ msg: "Invalid credentials" }] })
      }

      const isMatch = await bcrypt.compare(password, user.password)

      if (!isMatch) {
        return res.status(400).json({ errors: [{ msg: "Invalid credentials" }] })
      }

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
