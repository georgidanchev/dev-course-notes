import ExpenseItem from "./ExpenseItem"
import "./expenses.css"

const Expenses = (props) => {
  const { expenses } = props

  return (
    <div className="expenses">
      {expenses.map((expense, index) => {
        return <ExpenseItem key={index} expense={expense} />
      })}
    </div>
  )
}

export default Expenses
