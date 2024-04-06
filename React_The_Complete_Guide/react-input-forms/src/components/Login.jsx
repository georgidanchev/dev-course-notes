import { useState, useRef } from "react"

export default function Login() {
  const [formIsInvalid] = useState()
  const [emailIsInvalid, setEmailIsInvalid] = useState(false)

  const email = useRef()
  const password = useRef()

  function handleSubmit(e) {
    e.preventDefault()

    const enteredEmail = email.current.value
    const enteredPassword = password.current.value
    const emailIsValid = enteredEmail.includes("@")

    if (!emailIsValid) {
      setEmailIsInvalid(true)
      return
    }

    setEmailIsInvalid(false)
    // best way to reset with refs
    // reset entire form
    // e.target.reset()

    console.log(enteredEmail)
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input id="email" type="email" name="email" ref={email} />
          <div className="control-error">
            {emailIsInvalid && <p>Please enter a valid email</p>}
          </div>
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input id="password" type="password" name="password" ref={password} />
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
