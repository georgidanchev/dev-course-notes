import { useContext } from "react"
import logo from "../assets/logo.jpg"
import Button from "./UI/Button"
import CartContext from "../store/CartContext"
import UserProgressContext from "../store/UserProgressContext"

export default function Header() {
  const cartCtx = useContext(CartContext)
  const userProgressCtx = useContext(UserProgressContext)

  const totalCartItems = cartCtx.items.reduce((totalNumberOfItems, item) => totalNumberOfItems + item.quantity, 0)

  function handleShowCart() {
    userProgressCtx.showCart()
  }

  return (
    <header id="main-header">
      <div>
        <h1 id="title">
          <img src={logo} alt="A restaurant" width="64" height="64" />
          ReactFood
        </h1>
      </div>
      <nav>
        <Button type="button" textOnly onClick={handleShowCart}>
          Cart ({totalCartItems})
        </Button>
      </nav>
    </header>
  )
}
