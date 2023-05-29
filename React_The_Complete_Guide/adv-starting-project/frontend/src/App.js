import {
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom"

import HomePage from "./pages/Home"
import EventsPage, {
  loader as eventsLoader,
} from "./pages/Events"
import EventDetail, {
  loader as eventDetailLoader,
} from "./pages/EventDetail"
import NewEvent, {
  action as newEventAction,
} from "./pages/NewEvent"
import EditEvent from "./pages/EditEvent"
import RootLayout from "./pages/Root"
import EventsRootLayout from "./pages/EventsRoot"
import ErrorPage from "./pages/Error"

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
              },
              {
                path: "edit",
                element: <EditEvent />,
              },
            ],
          },
          {
            path: "new",
            element: <NewEvent />,
            action: newEventAction,
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
