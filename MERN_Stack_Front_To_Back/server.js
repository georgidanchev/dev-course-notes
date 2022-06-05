const express = require("express")

const app = express()

app.get("/", (req, res) => res.send("API Running"))

const PORT = process.env.PORT || 7777

app.listen(PORT, () => console.log(`Server start on port ${PORT}`))
