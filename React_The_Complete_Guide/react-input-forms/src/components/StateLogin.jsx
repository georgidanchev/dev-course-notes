import { useState } from "react"
import Input from "./Input"
import {isEmail, isNotEmpty, hasMinLength } from "../util/validation"

export default function Login() {
  const [enteredValues, setEnteredValues] = useState({
    email: "",
    password: "",
  })

  const [didEdit, setDidEdit] = useState({
    email: false,
    password: false,
  })

  const emailIsInvalid = didEdit.email && !isEmail(enteredValues.email) && !isNotEmpty(enteredValues.email)
  const passwordIsInvalid = didEdit.password && hasMinLength(didEdit.password, 6)

  function handleInputChange(identifier, value) {
    setEnteredValues((prevValues) => ({
      ...prevValues,
      [identifier]: value,
    }))

    setDidEdit((prevEdit) => ({
      ...prevEdit,
      [identifier]: false,
    }))
  }

  function handleEmailBlur(identifier) {
    setDidEdit((prevEdit) => ({
      ...prevEdit,
      [identifier]: true,
    }))
  }

  function handleSubmit(e) {
    e.preventDefault()
    console.log(enteredValues)

    // reset
    setEnteredValues({
      email: "",
      password: "",
    })
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <Input
          label="Email"
          id="email"
          type="email"
          name="email"
          onBlur={() => handleEmailBlur("email")}
          onChange={(e) => handleInputChange("email", e.target.value)}
          value={enteredValues.email}
          error={emailIsInvalid && "Please enter a valid email"}
        />

        <Input
          label="Password"
          id="password"
          type="password"
          name="password"
          onBlur={() => handleEmailBlur("password")}
          onChange={(e) => handleInputChange("password", e.target.value)}
          value={enteredValues.password}
          error={passwordIsInvalid && "Please enter a valid password"}
        />
      </div>

      <p className="form-actions">
        <button className="button button-flat" type="button">
          Reset
        </button>
        <button className="button" type="submit">
          Login
        </button>
      </p>
    </form>
  )
}
