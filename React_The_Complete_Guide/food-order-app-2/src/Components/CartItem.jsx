import { currencyFormatter } from "../utils/currencyFormatter"

export default function CartItem({ name, quantity, price, onIncrease, onDecrease }) {
  return (
    <li className="cart-item">
      <p>
        {name} - {quantity} X {currencyFormatter.format(price)}
      </p>
      <p className="cart-item-actions">
        <button onClick={onDecrease} type="button">-</button>
        <span>{quantity}</span>
        <button onClick={onIncrease} type="button">+</button>
      </p>
    </li>
  )
}
