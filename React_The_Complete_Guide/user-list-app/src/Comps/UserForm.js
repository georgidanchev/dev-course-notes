import UserInputs from "../UI/UserInputs"
import "./userForm.css"

const UserManager = (props) => {
  let userName
  let userAge

  const onSubmit = (e) => {
    e.preventDefault()
    props.onSubmit(userName, userAge)
  }

  const userChange = (e) => {
    userName = e
  }

  const ageChange = (e) => {
    userAge = e
  }

  return (
    <form className="inputs-form" onSubmit={onSubmit}>
      <UserInputs onUserChange={userChange} onAgeChange={ageChange} />
    </form>
  )
}

export default UserManager
