import { useState } from "react"

import "./ExpenseForm.css"

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("")
  const [enteredAmount, setEnteredAmount] = useState("")
  const [enteredDate, setEnteredDate] = useState("")

  // const [userInput, setUserInput] = useState({
  //   enteredTitle: "",
  //   enteredAmount: "",
  //   enteredDate: "",
  // })

  const titleChangeHandler = (e) => {
    setEnteredTitle(e.target.value)

    // setUserInput({
    //   ...userInput,
    //   enteredTitle: e.target.value,
    // })

    // setUserInput((prevState) => {
    //   return { ...prevState, eTitle: e.target.value }
    // })
  }

  const amountChangeHandler = (e) => {
    setEnteredAmount(e.target.value)
  }

  const dateChangeHandler = (e) => {
    setEnteredDate(e.target.value)
  }

  const OnSubmitHandler = (e) => {
    e.preventDefault()

    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate)
    };

    props.onSaveExpenseData(expenseData)

    setEnteredTitle("")
    setEnteredAmount("")
    setEnteredDate("")
  }

  return (
    <form onSubmit={OnSubmitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label htmlFor="form-title">Title</label>
          <input id="form-title" type="text" value={enteredTitle} onChange={titleChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label htmlFor="form-amount">Amount</label>
          <input
            id="form-amount"
            type="text"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label htmlFor="form-date">Date</label>
          <input
            id="form-date"
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  )
}

export default ExpenseForm
