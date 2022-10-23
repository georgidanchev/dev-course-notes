import { useState } from "react"
import classes from "./AddUser.module.css"
import Button from "../UI/Button"
import Card from "../UI/Card"

const AddUser = (props) => {
  const [enteredUsername, setEnteredUsername] = useState("")
  const [enteredAge, setEnteredAge] = useState("")

  const addUserHandler = (event) => {
    event.preventDefault()

    if (enteredUsername.trim() === 0 || enteredAge.trimEnd().length === 0) {
      return
    }

    if(+enteredAge < 1) {
      return
    }

    console.log(enteredUsername, enteredAge)
    props.onAddUser(enteredUsername, enteredAge)

    setEnteredUsername("")
    setEnteredAge("")
  }

  const userNameChangeHandler = (event) => {
    setEnteredUsername(event.target.value)
  }

  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value)
  }

  return (
    <Card className={classes.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">Username</label>
        <input type="text" id="username" value={enteredUsername} onChange={userNameChangeHandler} />
        <label htmlFor="age">Age (years)</label>
        <input type="number" id="age" value={enteredAge} onChange={ageChangeHandler} />
        <Button type="submit">Add User</Button>
      </form>
    </Card>
  )
}

export default AddUser
