import { useContext } from "react"
import CartContext from "../store/CartContext"
import UserProgressContext from "../store/UserProgressContext"
import Modal from "./UI/Modal"
import { currencyFormatter } from "../utils/currencyFormatter"
import Input from "./UI/Input"
import Button from "./UI/Button"
import useHttp from "../hooks/useHttp"
import Error from "./Error"

const requestConfig = {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
}

export default function Checkout() {
  const cartCtx = useContext(CartContext)
  const userProgressCtx = useContext(UserProgressContext)

  const {
    data,
    isLoading: isSending,
    error,
    sendRequest,
    clearData,
  } = useHttp("http://localhost:3000/orders", requestConfig, [])

  const cartTotal = cartCtx.items.reduce((totalPrice, item) => totalPrice + item.quantity * item.price, 0)

  function handleClose() {
    userProgressCtx.hideCheckout()
  }

  function handleFinish() {
    userProgressCtx.hideCheckout()
    cartCtx.clearCart()
    clearData()
  }

  function handleSubmit(event) {
    event.preventDefault()
    const fd = new FormData(event.target)
    const customerData = Object.fromEntries(fd.entries())

    sendRequest(
      JSON.stringify({
        order: {
          items: cartCtx.items,
          customer: customerData,
        },
      }),
    )
  }

  let actions = (
    <>
      <Button type="button" textOnly onClick={handleClose}>
        Close
      </Button>
      <Button type="submit">Submit Order</Button>
    </>
  )

  if (isSending) {
    actions = <span>Sending order data...</span>
  }

  if (data.message && !error) {
    return (
      <Modal open={userProgressCtx.progress === "checkout"} onClose={handleFinish}>
        <h2>Success!</h2>
        <p>Your order was submitted successfully.</p>
        <p>Well will get back to you with more details via email within next few minutes.</p>
        <div className="modal-actions">
          <Button onClick={handleFinish} type="button">
            Okay
          </Button>
        </div>
      </Modal>
    )
  }

  return (
    <Modal
      open={userProgressCtx.progress === "checkout"}
      onClose={userProgressCtx.progress === "cart" ? handleClose : null}
    >
      <form onSubmit={handleSubmit}>
        <h2>Checkout</h2>
        <p>Total Amount: {currencyFormatter.format(cartTotal)}</p>
        <Input label="Full name" type="text" id="name" />
        <Input label="Email Address" type="email" id="email" />
        <Input label="Street" type="text" id="street" />

        <div className="control-row">
          <Input label="Postal code" type="text" id="postal-code" />
          <Input label="City" type="text" id="city" />
        </div>

        {error && <Error title="Failed to submit order" message={error} />}

        <p className="modal-actions">{actions}</p>
      </form>
    </Modal>
  )
}
