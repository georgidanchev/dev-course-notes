import ExpenseItem from "./ExpenseItem"
import "./ExpensesList.css"

const ExpensesList = (props) => {
  let expensesContent = "No entries found"

  console.log(props)

  if (props.expenses.length === 0) {
    return (
      <ul className="expenses-list ">
        <li>
          <h2 className="expenses-list__fallback">{expensesContent}</h2>
        </li>
      </ul>
    )
  }

  return (
    <ul className="expenses-list">
      {props.expenses.map((expense, index) => {
        return <ExpenseItem key={index} expense={expense} />
      })}
    </ul>
  )
}

export default ExpensesList
