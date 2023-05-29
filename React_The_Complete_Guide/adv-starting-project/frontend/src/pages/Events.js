import { json, useLoaderData } from "react-router"

import EventsList from "../components/EventsList"

function EventsPage() {
  const data = useLoaderData()

  if (data.isError) {
    return <p>{data.message}</p>
  }

  const events = data.events
  return (
    <>
      <EventsList events={events} />
    </>
  )
}

export default EventsPage

export async function loader() {
  const response = await fetch(
    "http://localhost:8080/events",
  )

  if (!response.ok) {
    return json(
      { message: "Could not fetch events." },
      {
        status: 500,
      },
    )
  } else {
    const resData = await response.json()
    return resData
  }
}
