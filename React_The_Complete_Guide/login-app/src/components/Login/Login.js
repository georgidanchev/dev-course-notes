import React, { useState, useEffect, useReducer, useContext } from "react"

import Card from "../UI/Card/Card"
import classes from "./Login.module.css"
import Button from "../UI/Button/Button"
import AuthContext from "../store/auth-context"

const emailReduce = (state, action) => {
  if (action.type === "USER_INPUT") {
    return { email: action.val, isValid: action.val.includes("@") }
  }

  if(action.type === 'INPUT_BLUR') {
    return { email: state.email, isValid: state.email.includes("@") }
  }

  return { email: "", isValid: false }
}

const passwordReducer = (state, action) => {
    if(action.type === 'PASSWORD_INPUT') {
    return { password: action.val, isValid: action.val.trim().length > 6 }
  }


  if(action.type === 'INPUT_BLUR') {
    return { password: state.password, isValid: state.password.trim().length > 6 }
  }

  return { password: "", isValid: false }
}

const Login = (props) => {
  const [formIsValid, setFormIsValid] = useState(false)

  const [emailState, dispatchEmail] = useReducer(emailReduce, {
    email: "",
    isValid: null,
  })

  const [passwordState, dispatchPassword] = useReducer(passwordReducer, {
    password: "",
    isValid: null,
  })

  const authCtx = useContext(AuthContext)

  const { isValid: emailIsValid } = emailState
  const { isValid: passwordIsValid } = passwordState

  useEffect(() => {
    let timerIdentifier = setTimeout(() => {
      console.log("Checks validity")
      setFormIsValid(emailIsValid && passwordIsValid)
    }, 500)

    return () => {
      clearTimeout(timerIdentifier)
    }
  }, [emailIsValid, passwordIsValid])

  const emailChangeHandler = (event) => {
    dispatchEmail({ type: "USER_INPUT", val: event.target.value })
  }


  const passwordChangeHandler = (event) => {
    dispatchPassword({ type: 'PASSWORD_INPUT', val: event.target.value })
  }

 const validateEmailHandler = () => {
    dispatchEmail({ type: 'INPUT_BLUR' })
  }

  const validatePasswordHandler = () => {
    dispatchPassword({type: "INPUT_BLUR"})
  }

  const submitHandler = (event) => {
    event.preventDefault()
    authCtx.onLogin(emailState.email, passwordState.password)
  }

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <div
          className={`${classes.control} ${emailState.isValid === false ? classes.invalid : ""}`}
        >
          <label htmlFor="email">E-Mail</label>
          <input
            type="email"
            id="email"
            value={emailState.email}
            onChange={emailChangeHandler}
            onBlur={validateEmailHandler}
          />
        </div>
        <div className={`${classes.control} ${passwordState.isValid === false ? classes.invalid : ""}`}>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={passwordState.password}
            onChange={passwordChangeHandler}
            onBlur={validatePasswordHandler}
          />
        </div>
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn} disabled={!formIsValid}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  )
}

export default Login
