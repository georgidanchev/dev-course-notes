import { useContext } from "react"
import logo from "../assets/logo.jpg"
import Button from "./UI/Button"
import CartContext from "../store/CartContext"

export default function Header() {
  const cartCtx = useContext(CartContext)
  const totalCartItems = cartCtx.items.reduce((totalNumberOfItems, item) => totalNumberOfItems + item.quantity, 0)

  return (
    <header id="main-header">
      <div>
        <h1 id="title">
          <img src={logo} alt="A restaurant" width="64" height="64" />
          ReactFood
        </h1>
      </div>
      <nav>
        <Button type="button" textOnly>
          Cart ({totalCartItems})
        </Button>
      </nav>
    </header>
  )
}
