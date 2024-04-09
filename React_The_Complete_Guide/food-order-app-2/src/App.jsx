import Header from "./Components/Header"
import Meals from "./Components/Meals"
import { CartContextProviders } from "./store/CartContext"

function App() {
  return (
    <CartContextProviders>
      <Header />
      <Meals />
    </CartContextProviders>
  )
}

export default App
