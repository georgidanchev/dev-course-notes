import React, { useState } from 'react'

import ExpenseDate from "./ExpenseDate"
import Card from "../UI/Card"
import "./ExpenseItem.css"

const ExpenseItem = (props) => {
  const { amount, date } = props.expense
  const [title, setTitle] = useState(props.expense.title)

  const clickHandler = () => {
    setTitle('Updated!');
  }

  return (
    <Card className="expense-item">
      <ExpenseDate date={date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <span className="expense-item__price">£{amount}</span>
      </div>
      <button type="button" onClick={clickHandler}>Change Title</button>
    </Card>
  )
}

export default ExpenseItem
