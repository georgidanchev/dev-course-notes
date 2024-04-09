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

    // If we got the item add 1 as quantity,
    // else add the item as new
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
    const existingCartItemIndex = state.items.findIndex((item) => item.id === action.id)

    const existingCartItem = state.items[existingCartItemIndex]
    const updatedItems = [...state.items]

    // If we got 1, remove item
    // else remove 1 quantity
    if (existingCartItem.quantity === 1) {
      updatedItems.splice(existingCartItemIndex, 1)
    } else {
      const updatedItem = { ...existingCartItem, quantity: existingCartItem.quantity - 1 }
      updatedItems[existingCartItemIndex] = updatedItem
    }

    return { ...state, item: updatedItems }
  }

  return state
}

export function CartContextProviders({ children }) {
  const [cart, dispatchCartAction] = useReducer(cartReducer, { items: [] })

  function addItem(item) {
    dispatchCartAction({
      type: "ADD_ITEM",
      item,
    })
  }

  function removeItem(id) {
    dispatchCartAction({
      type: "REMOVE_ITEM",
      id,
    })
  }

  const cartContext = {
    items: cart.items,
    addItem,
    removeItem,
  }

  return <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>
}

export default CartContext
