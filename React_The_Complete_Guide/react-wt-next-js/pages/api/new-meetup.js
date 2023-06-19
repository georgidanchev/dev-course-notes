// api/new-meetup
// POST /api/new-meetup

import { MongoClient } from "mongodb"

async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body

    const client = await MongoClient.connect(`mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@cluster0.9gtzyiz.mongodb.net/meetups?retryWrites=true`)

    const db = client.db()

    const meetupsCollection = db.collection("meetups")

    const result = await meetupsCollection.insertOne(data)

    console.log(result)

    client.close()

    res.status(201).json({ message: "Meetup inserted!" })
  }
}

export default handler
