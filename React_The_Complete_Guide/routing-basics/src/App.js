import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"

import HomePage from "./pages/Home"
import ProductsPage from "./pages/Product"
import RootLayout from "./pages/Root"
import ErrorPage from "./pages/Error"
import ProductDetails from "./pages/ProductDetails"

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/products", element: <ProductsPage /> },
      {
        path: "/products/:productId",
        element: <ProductDetails />,
      },
    ],
  },
])

function App() {
  return <RouterProvider router={router} />
}

export default App
