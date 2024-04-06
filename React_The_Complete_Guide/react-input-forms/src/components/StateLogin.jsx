import { useState } from "react"

export default function Login() {
  const [enteredValues, setEnteredValues] = useState({
    email: "",
    password: "",
  })

  const [didEdit, setDidEdit] = useState({
    email: false,
    password: false,
  })

  const emailIsInvalid = didEdit.email && !enteredValues.email.includes("@")

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
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            name="email"
            onBlur={() => handleEmailBlur("email")}
            onChange={(e) => handleInputChange("email", e.target.value)}
            value={enteredValues.email}
          />

          <div className="control-error">
            {emailIsInvalid && <p>Please enter a valid email address</p>}
          </div>
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            name="password"
            onChange={(e) => handleInputChange("password", e.target.value)}
            value={enteredValues.password}
          />
        </div>
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
