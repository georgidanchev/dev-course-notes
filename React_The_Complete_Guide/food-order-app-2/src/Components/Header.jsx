import logo from "../assets/logo.jpg"
import Button from "./UI/Button"

export default function Header() {
  return (
    <header id="main-header">
      <div>
        <h1 id="title">
          <img src={logo} alt="A restaurant" width="64" height="64" />
          ReactFood
        </h1>
      </div>
      <nav>
        <Button type="button" textOnly>Cart (0)</Button>
      </nav>
    </header>
  )
}
