const mongoose = require("mongoose")

const UserSchema = new mongoose.Schema({
  name: { type: string, required: true },
  email: { type: string, required: true, unique: true },
  password: { type: string, required: true, unique: true },
  avatar: { type: String },
  date: { type: date, default: Date.now },
})

module.exports = User = mongoose.model("user", UserSchema)
