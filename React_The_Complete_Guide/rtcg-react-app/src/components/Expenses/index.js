import ExpenseItem from "./ExpenseItem"
import Card from "../UI/Card"
import "./Index.css"

const Expenses = (props) => {
  const { expenses } = props

  return (
    <Card className="expenses">
      {expenses.map((expense, index) => {
        return <ExpenseItem key={index} expense={expense} />
      })}
    </Card>
  )
}

export default Expenses
