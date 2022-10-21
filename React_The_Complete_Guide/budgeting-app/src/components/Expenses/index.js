import Card from "../UI/Card"
import ExpenseFilter from "./ExpenseFilter"
import "./Index.css"
import { useState } from "react"
import ExpensesChart from "./ExpensesChart"
import ExpensesList from "./ExpensesList"

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020")

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear)
  }

  const filteredExpenses = props.expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear
  })

  return (
    <Card className="expenses">
      <ExpenseFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
      <ExpensesChart expenses={filteredExpenses} />
      <ExpensesList expenses={filteredExpenses} />
    </Card>
  )
}

export default Expenses
