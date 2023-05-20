import { useDispatch, useSelector } from "react-redux"
import { uiActions } from "../../store/ui-slice"
import classes from "./CartButton.module.css"

const CartButton = () => {
  const dispatch = useDispatch()
  const cartQuantity = useSelector((state) => state.cart.totalQuantity)

  const toggleCartHandler = (e) => {
    dispatch(uiActions.toggle())
    e.preventDefault()
  }

  return (
    <button className={classes.button} onClick={toggleCartHandler} type="button">
      <span>My Cart</span>
      <span className={classes.badge}>{cartQuantity}</span>
    </button>
  )
}

export default CartButton
