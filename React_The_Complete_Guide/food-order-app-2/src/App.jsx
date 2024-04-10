import { CartContextProviders } from "./store/CartContext"
import { UserProgressContextProvider } from "./store/UserProgressContext"
import Cart from "./Components/Cart"
import Checkout from "./Components/Checkout"
import Header from "./Components/Header"
import Meals from "./Components/Meals"

function App() {
  return (
    <UserProgressContextProvider>
      <CartContextProviders>
        <Header />
        <Meals />
        <Cart />
        <Checkout />
      </CartContextProviders>
    </UserProgressContextProvider>
  )
}

export default App
