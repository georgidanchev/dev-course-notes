import ExpenseDate from "./ExpenseDate"
import Card from "../UI/Card"
import "./ExpenseItem.css"

const ExpenseItem = (props) => {
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.expense.date} />
      <div className="expense-item__description">
        <h2>{props.expense.title}</h2>
        <span className="expense-item__price">£{props.expense.amount}</span>
      </div>
    </Card>
  )
}

export default ExpenseItem
