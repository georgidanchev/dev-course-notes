import { createContext, useReducer } from "react"

const CartContext = createContext({
  items: [],
  addItem: (item) => {},
  removeItem: (id) => {},
})

function cartReducer(state, action) {
  if (action.type === "ADD_ITEM") {
    const existingCartItemIndex = state.items.findIndex((item) => item.id === action.item.id)

    const updateItems = [...state.items]

    if (existingCartItemIndex > -1) {
      const existingItem = state.items[existingCartItemIndex]

      const updatedItem = {
        ...existingItem,
        quantity: existingItem.quantity + 1,
      }

      updateItems[existingCartItemIndex] = updatedItem
    } else {
      updateItems.push({ ...action.item, quantity: 1 })
    }

    return { ...state, items: updateItems }
  }

  if (action.type === "REMOVE_ITEM") {
    // remove an item from the state
  }
}

export function CartContextProviders({ children }) {
  useReducer(cartReducer, { items: [] })

  return <CartContext.Provider>{children}</CartContext.Provider>
}

export default CartContext
