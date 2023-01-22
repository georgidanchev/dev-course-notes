import CartContext from "./cart-context"

const CartProvider = (props) => {
  const addItemToCartHandler = (item) => {}
  const removeItemFromCarHandler = (id) => {}

  const cartContext = {
    items: [],
    totalAmount: 0,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCarHandler,
  }

  return <CartContext.Provider value={cartContext}>{props.children}</CartContext.Provider>
}

export default CartProvider
