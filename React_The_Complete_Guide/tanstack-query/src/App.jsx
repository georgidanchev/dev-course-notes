import { Navigate, RouterProvider, createBrowserRouter } from "react-router-dom"
import { queryClient } from "./utils/http"
import { QueryClientProvider } from "@tanstack/react-query"
import EditEvent, {
  loader as editEventLoader,
  action as editEventAction,
} from "./components/Events/EditEvent.jsx"
import EventDetails from "./components/Events/EventDetails.jsx"
import Events from "./components/Events/Events.jsx"
import NewEvent from "./components/Events/NewEvent.jsx"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/events" />,
  },
  {
    path: "/events",
    element: <Events />,

    children: [
      {
        path: "/events/new",
        element: <NewEvent />,
      },
    ],
  },
  {
    path: "/events/:id",
    element: <EventDetails />,
    children: [
      {
        path: "/events/:id/edit",
        element: <EditEvent />,
        loader: editEventLoader,
        action: editEventAction,
      },
    ],
  },
])

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  )
}

export default App
