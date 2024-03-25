import Header from "./components/Header.jsx"
import Product from "./components/Product.jsx"
import Shop from "./components/Shop.jsx"
import CartContextProvider from "./store/cart-context.jsx"
import { DUMMY_PRODUCTS } from './dummy-products';

function App() {
  return (
    <CartContextProvider>
      <Header />
      <Shop>
        {DUMMY_PRODUCTS.map((product) => (
          <li key={product.id}>
            <Product {...product} />
          </li>
        ))}
      </Shop>
    </CartContextProvider>
  )
}

export default App
