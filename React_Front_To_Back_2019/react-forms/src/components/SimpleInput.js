import { useState } from "react"

const SimpleInput = (props) => {
  // Name input
  const [enteredName, setEnteredName] = useState("")
  const [enteredNameTouched, setEnteredNameTouched] = useState(false)

  // Email input
  const [enteredEmail, setEnteredEmail] = useState('')
  const [enteredEmailTouched, setEnteredEmailTouched] = useState(false)

  // The whole comp will update on keystroke
  const enteredNameIsValid = enteredName.trim() !== ''
  const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched

  const enteredEmailIsValid = enteredEmail.includes("@")
  const enteredEmailIsInvalid = !enteredEmailIsValid && enteredEmailTouched

  let formIsValid = false


  if(enteredNameIsValid && enteredEmailIsValid) {
    formIsValid = true
  }

  const nameInputChangeHandler = (event) => {
    setEnteredName(event.target.value)
  }

  const nameInputBlurHandler = () => {
    setEnteredNameTouched(true)
  }

  const emailInputChangeHandler = (event) => {
    setEnteredEmail(event.target.value)
  }

  const emailInputBlurHandler = event => {
    setEnteredEmailTouched(true)
  }

  const formSubmissionHandler = (event) => {
    event.preventDefault()

    setEnteredNameTouched(true)

    if (!enteredNameIsValid) {
      return
    }

    // Logging out local state
    console.log(enteredName)
    console.log(enteredEmail)

    // Using useRef to get current value
    // const enteredValue = nameInputRef.current.value
    // console.log(enteredValue)

    // DON'T MANIPULATE THE DOM VIA REFS
    // nameInputRef.current.value = ''

    // Resetting local state
    setEnteredName("")
    setEnteredNameTouched(false)

    setEnteredEmail('')
    setEnteredEmailTouched(false)
  }

  const nameInputClasses = nameInputIsInvalid ? "form-control invalid" : "form-control"

  const emailInputClasses = enteredEmailIsInvalid ? "form-control invalid" : "form-control"

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          onChange={nameInputChangeHandler}
          onBlur={nameInputBlurHandler}
          value={enteredName}
        />
        {nameInputIsInvalid && <p className="error-text">Name must not be empty.</p>}
      </div>

      <div className={emailInputClasses}>
        <label htmlFor="email">Your E-mail</label>
        <input
          type="email"
          id="email"
          onChange={emailInputChangeHandler}
          onBlur={emailInputBlurHandler}
          value={enteredEmail}
        />
        {enteredEmailIsInvalid && <p className="error-text">Please enter a valid email.</p>}
      </div>

      <div className="form-actions">
        <button disabled={!formIsValid}type="submit">Submit</button>
      </div>
    </form>
  )
}

export default SimpleInput
