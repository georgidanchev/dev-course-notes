import Cart from "./Components/Cart"
import Header from "./Components/Header"
import Meals from "./Components/Meals"
import { CartContextProviders } from "./store/CartContext"
import { UserProgressContextProvider } from "./store/UserProgressContext"

function App() {
  return (
    <UserProgressContextProvider>
      <CartContextProviders>
        <Header />
        <Meals />
        <Cart />
      </CartContextProviders>
    </UserProgressContextProvider>
  )
}

export default App
