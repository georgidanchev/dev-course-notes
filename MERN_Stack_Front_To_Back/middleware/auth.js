const jwt = require("jsonwebtoken")
const config = require("config")

module.exports = function (req, res, next) {
  // Get token from the header
  const token = req.header("x-auth-token")

  // Check if no token
  if (!token) {
    return res.status(401).json({ message: "No token, authorization failed" })
  }

  // Verify token
  try {
    const decoded = jwt.verify(token, config.get("jwtSecret"))

    req.user = decoded.user

    next()
  } catch (error) {
    res.status(401).json({ message: "Token is not valid" })
  }
}
