import "./userInputs.css"

import { Fragment, useState } from "react"

const UserInputs = (props) => {
  const [getUserName, setUserName] = useState("")
  const [getUserAge, setUserAge] = useState("")
  const [isUserValid, setUserValid] = useState("true")
  const [isAgeValid, setAgeValid] = useState("true")

  const checkUserName = (e) => {
    if (e.target.value.trim().length > 0) {
      setUserValid(true)
    } else {
      setUserValid(false)
    }

    setUserName(e.target.value)

    props.onUserChange(getUserName)
  }

  const checkUserAge = (e) => {
    if (e.target.value.trim().length >= 18) {
      setAgeValid(true)
    } else {
      setAgeValid(false)
    }

    setUserAge(e.target.value)

    props.onAgeChange(getUserAge)
  }

  return (
    <Fragment>
      <div className={`inputGroup inputGroup--first${!isUserValid ? " invalid" : ""}`}>
        <label className="inputGroup__label" htmlFor="userName">
          Username
        </label>

        <input
          className="inputGroup__input"
          id="userName"
          type="text"
          value={getUserName}
          onChange={checkUserName}
        />
      </div>

      <div className={`inputGroup${!isAgeValid ? " invalid" : ""}`}>
        <label className="inputGroup__label" htmlFor="userAge">
          Age
        </label>

        <input
          className="inputGroup__input"
          id="userAge"
          type="number"
          min="16"
          max="150"
          value={getUserAge}
          onChange={checkUserAge}
        />
      </div>

      <button className="inputGroup__submit btn btn--dark" type="submit">
        Submit
      </button>
    </Fragment>
  )
}

export default UserInputs
