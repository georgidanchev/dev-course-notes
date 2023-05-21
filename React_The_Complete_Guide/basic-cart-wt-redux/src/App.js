import { useSelector, useDispatch } from "react-redux"
import { Fragment, useEffect } from "react"
import { uiActions } from "./store/ui-slice"

import Cart from "./components/Cart/Cart"
import Layout from "./components/Layout/Layout"
import Products from "./components/Shop/Products"
import Notification from "./components/UI/Notification"

let isInitial = true

function App() {
  const notification = useSelector((state) => state.ui.notification)
  const showCart = useSelector((state) => state.ui.cartIsVisible)
  const cart = useSelector((state) => state.cart)
  const dispatch = useDispatch()

  useEffect(() => {
    const sendCartData = async () => {
      dispatch(
        uiActions.showNotification({
          status: "Pending",
          title: "Sending...",
          message: "Sending cart data!",
        }),
      )

      const request = fetch("https://react-http-5023d-default-rtdb.europe-west1.firebasedatabase.app/cart.json", {
        method: "PUT",
        body: JSON.stringify(cart),
      })

      const response = await request

      if (!response.ok) {
        throw new Error("Sending cart data failed.")
      }

      dispatch(
        uiActions.showNotification({
          status: "success",
          title: "Success...",
          message: "Sending cart data successfully!",
        }),
      )
    }

    if (isInitial) {
      isInitial = false
      return
    }

    sendCartData().catch((error) => {
      console.log(error)

      dispatch(
        uiActions.showNotification({
          status: "error",
          title: "Error...",
          message: "Sending cart data failed!",
        }),
      )
    })
  }, [cart, dispatch])

  return (
    <Fragment>
      {notification && <Notification status={notification.status} title={notification.title} message={notification.message} />}
      <Layout>
        {showCart && <Cart />}
        <Products />
      </Layout>
    </Fragment>
  )
}

export default App
