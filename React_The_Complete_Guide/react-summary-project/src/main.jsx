import "./index.css"
import React from "react"
import ReactDOM from "react-dom/client"

// Root header with pass-through for children
import RootLayout from "./routes/RootLayout"

// React router and route provider
import { createBrowserRouter, RouterProvider } from "react-router-dom"

// Developer components and router functions
import NewPost, { action as newPostAction } from "./routes/NewPost"
import Posts, { loader as postsLoader } from "./routes/Posts"

import PostDetails, {
  loader as postDetailsLoader,
} from "./routes/PostDetails"

// Configure the react router with root layout which is Component
// that would show on every page like the header/footer
const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <Posts />,
        loader: postsLoader,
        children: [
          {
            path: "/create-post",
            element: <NewPost />,
            action: newPostAction,
          },
          {
            path: "/:id",
            element: <PostDetails />,
            loader: postDetailsLoader,
          },
        ],
      },
    ],
  },
])

// Render the react app at the id root.
// React strict mode is a development feature which helps problems and bugs.
// The react router wraps the whole application.
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
