import { Fragment } from 'react'
import { MongoClient } from "mongodb"
import Head from 'next/head'
import MeetupList from "../components/meetups/MeetupList"

// const DUMMY_MEETUPS = [
//   {
//     id: "m1",
//     title: "A First meetup",
//     image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fyt3.ggpht.com%2Fa%2FAATXAJzsHPys1EoSnxprcPapwsQsb1gr97KzKfnRBw%3Ds900-c-k-c0xffffffff-no-rj-mo&f=1&nofb=1&ipt=b20732983bc9baba031d85383ec403b22e4c9844766dac32ae267aa8f0eda80b&ipo=images",
//     address: "Some address 5, 12345 some city, some-post-code",
//     description: "This is our first meetup! How exciting!",
//   },
//   {
//     id: "m2",
//     title: "A second meetup",
//     image: "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.dumpaday.com%2Fwp-content%2Fuploads%2F2017%2F01%2Frandom-pictures-74.jpg&f=1&nofb=1&ipt=90fbaf93306d2b0a4555b53d2cdf33501b742f5f20a82568bdc198a02b61bdbb&ipo=images",
//     address: "Some address 5, 12345 some city, some-post-code",
//     description: "This is our second meetup! wooho!",
//   },
// ]

export default function HomePage(props) {
  return (
    <Fragment>
      <Head>
        <title>React Meetups</title>
        <meta name="description" content="Browse a huge list of highly active React meetups" />
      </Head>
      <MeetupList meetups={props.meetups} />
    </Fragment>
  )
}

// // Best for sites that update very very frequently
// export async function getServerSideProps(context) {
//   const req = context.req
//   const res = context.res

//   // Fetch data from an API
//   return {
//     props: {
//       meetups: DUMMY_MEETUPS,
//     },
//   }
// }

// Gets advantage of caching
export async function getStaticProps() {
  const client = await MongoClient.connect(`mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@cluster0.9gtzyiz.mongodb.net/meetups?retryWrites=true`)

  const db = client.db()

  const meetupsCollection = db.collection("meetups")

  const meetups = await meetupsCollection.find().toArray()

  client.close()

  return {
    props: {
      meetups: meetups.map((meetup) => ({
        title: meetup.title,
        address: meetup.address,
        image: meetup.image,
        description: meetup.image,
        id: meetup._id.toString()
      })),
    },
    // Make the server rebuild every 1 seconds,
    // in case there is a new data to be shown
    revalidate: 1,
  }
}
