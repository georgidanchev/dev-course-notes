import ExpenseItem from "./ExpenseItem"
import Card from "../UI/Card"
import ExpenseFilter from "./ExpenseFilter"
import "./Index.css"
import { useState } from "react"

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2020');

  const filterChangeHandler = selectedYear => {
    console.log("expenses.js")
    console.log(selectedYear)
    setFilteredYear(selectedYear)
  }

  return (
    <Card className="expenses">
      <ExpenseFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />

      {props.expenses.map((expense, index) => {
        return <ExpenseItem key={index} expense={expense} />
      })}
    </Card>
  )
}

export default Expenses
