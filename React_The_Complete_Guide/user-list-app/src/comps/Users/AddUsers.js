import classes from "./AddUser.module.css"
import Button from "../UI/Button"
import Card from "../UI/Card"

const AddUser = (props) => {
  const addUserHandler = (event) => {
    event.preventDefault()
  }

  return (
    <Card className={classes.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">Username</label>
        <input type="text" id="username" />
        <label htmlFor="age">Age (years)</label>
        <input type="number" id="age" />
        <Button type="button">Add User</Button>
      </form>
    </Card>
  )
}

export default AddUser
