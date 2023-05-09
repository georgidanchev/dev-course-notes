import { useContext, useState, Fragment } from "react"
import Modal from "../UI/Modal"
import classes from "./Cart.module.css"
import CartContext from "../../store/cart-context"
import CartItem from "./CartItem/CartItem"
import Checkout from "./Checkout"

const Cart = (props) => {
  const cartCtx = useContext(CartContext)
  console.log(cartCtx)
  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`
  const hasItems = cartCtx.items.length > 0
  const [isCheckout, setIsCheckout] = useState()
  const [isSubmitting, setIsSubmitting] = useState()
  const [didSubmit, setDidSubmit] = useState()

  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id)
  }

  const carItemAddHandler = (item) => {
    cartCtx.addItem({ ...item, amount: 1 })
  }

  const submitOrderHandler = async (userData) => {
    setIsSubmitting(true)

    await fetch("https://react-http-5023d-default-rtdb.europe-west1.firebasedatabase.app/orders.json", {
      method: "POST",
      body: JSON.stringify({
        user: userData,
        orderedItems: CartItem.items,
      }),
    })

    setIsSubmitting(false)

    setDidSubmit(true)

    cartCtx.clearCart()
  }

  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cartCtx.items.map((item) => (
        <CartItem key={item.id} name={item.name} amount={item.amount} price={item.price} onRemove={cartItemRemoveHandler.bind(null, item.id)} onAdd={carItemAddHandler.bind(null, item)} />
      ))}
    </ul>
  )

  const orderHandler = () => {
    setIsCheckout(true)
  }

  const modalActions = (
    <div className={classes.actions}>
      <button className={classes["button--alt"]} onClick={props.onClose}>
        Close
      </button>
      {hasItems && (
        <button className={classes.button} onClick={orderHandler}>
          Order
        </button>
      )}
    </div>
  )

  const cartModalContent = (
    <Fragment>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>

      {isCheckout && <Checkout onConfirm={submitOrderHandler} onCancel={props.onClose} />}

      {!isCheckout && modalActions}
    </Fragment>
  )

  const isSubmittingModalContent = <p>Sending order data...</p>

  const didSubmitModalContent = (
    <Fragment>
      <p>Successfully sent the order!</p>
      <div className={classes.actions}>
        <button className={classes.btn} onClick={props.onClose}>
          Close
        </button>
      </div>
    </Fragment>
  )

  return (
    <Modal onClose={props.onClose}>
      {!isSubmitting && !didSubmit && cartModalContent}
      {isSubmitting && isSubmittingModalContent}
      {!isSubmitting && didSubmit && didSubmitModalContent}
    </Modal>
  )
}

export default Cart
