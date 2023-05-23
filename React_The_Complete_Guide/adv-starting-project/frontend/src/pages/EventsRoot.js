import { Outlet } from "react-router"
import EventsNavigation from "../components/EventsNavigation"

function EventsRootLayout() {
  return (
    <>
      <EventsNavigation />
      <Outlet />
    </>
  )
}

export default EventsRootLayout
