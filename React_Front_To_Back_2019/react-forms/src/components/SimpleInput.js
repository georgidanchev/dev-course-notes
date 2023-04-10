import useInput from "../hooks/use-input"

const SimpleInput = () => {
  const {
    value: enteredName,
    isValid: enteredNameIsValid,
    hasError: nameInputHasError,
    valueChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
    reset: nameInputReset,
  } = useInput((value) => value.trim() !== "")

  const {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: emailInputHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmailInput,
  } = useInput(value => value.includes("@"))

  let formIsValid = false

  if (enteredNameIsValid && enteredEmailIsValid) {
    formIsValid = true
  }

  const formSubmissionHandler = (event) => {
    event.preventDefault()

    if (!formIsValid) {
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
    nameInputReset()
    resetEmailInput()

    formIsValid = false
  }

  const nameInputClasses = nameInputHasError ? "form-control invalid" : "form-control"

  const emailInputClasses = emailInputHasError ? "form-control invalid" : "form-control"

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          onChange={nameChangeHandler}
          onBlur={nameBlurHandler}
          value={enteredName}
        />
        {nameInputHasError && <p className="error-text">Name must not be empty.</p>}
      </div>

      <div className={emailInputClasses}>
        <label htmlFor="email">Your E-mail</label>
        <input
          type="email"
          id="email"
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
          value={enteredEmail}
        />
        {emailInputHasError && <p className="error-text">Please enter a valid email.</p>}
      </div>

      <div className="form-actions">
        <button disabled={!formIsValid} type="submit">
          Submit
        </button>
      </div>
    </form>
  )
}

export default SimpleInput
