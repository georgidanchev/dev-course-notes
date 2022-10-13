import ExpenseDate from "./ExpenseDate"
import "./expenseItem.css"

const ExpenseItem = (props) => {
  const { title, amount, date } = props.expense

  return (
    <div className="expense-item">
      <ExpenseDate date={date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <span className="expense-item__price">£{amount}</span>
      </div>
    </div>
  )
}

export default ExpenseItem
