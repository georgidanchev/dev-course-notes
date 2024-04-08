import logo from "../assets/logo.jpg"

export default function Header() {
  return (
    <header id="main-header">
      <div>
        <img src="{logo}" alt="A restaurant" />
        <h1 id="title">ReactFood</h1>
      </div>
      <nav>
        <button type="button">Cart (0)</button>
      </nav>
    </header>
  )
}
