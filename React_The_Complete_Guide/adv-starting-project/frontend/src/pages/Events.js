import { Suspense } from "react"

import { json, useLoaderData, defer, Await } from "react-router"

import EventsList from "../components/EventsList"

function EventsPage() {
  const { events } = useLoaderData()

  return (
    <Suspense fallback={<p style={{ textAlign: "center" }}>Loading...</p>}>
      <Await resolve={events}>{(loadedEvents) => <EventsList events={loadedEvents} />}</Await>
    </Suspense>
  )
}

export default EventsPage

export async function loader() {
  const response = await fetch("http://localhost:8080/events")

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
