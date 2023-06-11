import {
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom"

import HomePage from "./pages/Home"
import EditEvent from "./pages/EditEvent"
import RootLayout from "./pages/Root"
import EventsRootLayout from "./pages/EventsRoot"
import ErrorPage from "./pages/Error"

import EventsPage, {
  loader as eventsLoader,
} from "./pages/Events"

import EventDetail, {
  loader as eventDetailLoader,
  action as deleteEventAction,
} from "./pages/EventDetail"

import { action as manipulateEventAction } from "./components/EventForm"

import NewEventPage from "./pages/NewEvent"

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "events",
        element: <EventsRootLayout />,
        children: [
          {
            index: true,
            element: <EventsPage />,
            loader: eventsLoader,
          },
          {
            path: ":eventId",
            loader: eventDetailLoader,
            id: "event-detail",
            children: [
              {
                index: true,
                element: <EventDetail />,
                action: deleteEventAction,
              },
              {
                path: "edit",
                element: <EditEvent />,
                action: manipulateEventAction,
              },
            ],
          },
          {
            path: "new",
            element: <NewEventPage />,
            action: manipulateEventAction,
          },
        ],
      },
    ],
  },
])

function App() {
  return <RouterProvider router={router} />
}

export default App
