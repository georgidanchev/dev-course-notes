import {
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom"

import HomePage from "./pages/Home"
import EventsPage from "./pages/Events"
import EventDetail from "./pages/EventDetail"
import NewEvent from "./pages/NewEvent"
import EditEvent from "./pages/EditEvent"
import RootLayout from "./pages/Root"
import EventsRootLayout from "./pages/EventsRoot"

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
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
            loader: () => {

            }
          },
          {
            path: ":eventId",
            element: <EventDetail />,
          },
          {
            path: "new",
            element: <NewEvent />,
          },
          {
            path: ":eventId/edit",
            element: <EditEvent />,
          },
        ],
      },
    ],
  },
])

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App
