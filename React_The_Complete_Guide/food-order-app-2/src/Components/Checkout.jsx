import { useContext } from "react"
import CartContext from "../store/CartContext"
import UserProgressContext from "../store/UserProgressContext"
import Modal from "./UI/Modal"
import { currencyFormatter } from "../utils/currencyFormatter"
import Input from "./UI/Input"
import Button from "./UI/Button"

export default function Checkout() {
  const cartCtx = useContext(CartContext)
  const userProgressCtx = useContext(UserProgressContext)

  const cartTotal = cartCtx.items.reduce((totalPrice, item) => totalPrice + item.quantity * item.price, 0)

  function handleClose() {
    userProgressCtx.hideCheckout()
  }

  return (
    <Modal open={userProgressCtx.progress === "checkout"} onClose={userProgressCtx.progress === "cart" ? handleClose : null}>
      <form>
        <h2>Checkout</h2>
        <p>Total Amount: {currencyFormatter.format(cartTotal)}</p>
        <Input label="Full name" type="text" id="full-name" />
        <Input label="Email Address" type="email" id="email" />
        <Input label="Street" type="text" id="street" />
        <div className="control-row">
          <Input label="Postal code" type="text" id="postal-code" />
          <Input label="City" type="text" id="city" />
        </div>
      </form>
      <p className="modal-actions">
        <Button type="button" textOnly onClick={handleClose}>
          Close
        </Button>
        <Button type="submit">
          Submit Order
        </Button>
      </p>
    </Modal>
  )
}
