import { Fragment, useState, useRef } from "react"
import classes from "./AddUsers.module.css"
import Button from "../UI/Button"
import Card from "../UI/Card"
import ErrorModal from "../UI/ErrorModal"

const AddUser = (props) => {
  // Uncontrolled elements: because
  // their state isn't manged by react
  const nameInputRef = useRef()
  const ageInputRef = useRef()

  const [error, setError] = useState()

  const addUserHandler = (event) => {
    event.preventDefault()

    const enteredUsername = nameInputRef.current.value
    const enteredAge = ageInputRef.current.value

    if (enteredUsername.trim() === 0 || enteredAge.trimEnd().length === 0) {
      setError({
        title: "Invalid input",
        message: "Please enter a valid name and age (non-empty values)",
      })

      return
    }

    if (+enteredAge < 1) {
      setError({
        title: "Invalid input",
        message: "Please enter a valid age (>0)",
      })

      return
    }

    props.onAddUser(enteredUsername, enteredAge)

    nameInputRef.current.value = ""
    ageInputRef.current.value = ""
  }

  const errorHandler = () => {
    setError(null)
  }

  return (
    <Fragment>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        ></ErrorModal>
      )}

      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>

          <input type="text" id="username" ref={nameInputRef} />

          <label htmlFor="age">Age (years)</label>

          <input type="number" id="age" ref={ageInputRef} />

          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </Fragment>
  )
}

export default AddUser
