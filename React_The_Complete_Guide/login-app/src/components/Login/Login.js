import React, { useState, useEffect, useReducer, useContext, useRef } from "react"

import Card from "../UI/Card/Card"
import classes from "./Login.module.css"
import Button from "../UI/Button/Button"
import AuthContext from "../store/auth-context"
import Input from "../UI/input/Input"

const emailReduce = (state, action) => {
  if (action.type === "USER_INPUT") {
    return { email: action.val, isValid: action.val.includes("@") }
  }

  if (action.type === "INPUT_BLUR") {
    return { email: state.email, isValid: state.email.includes("@") }
  }

  return { email: "", isValid: false }
}

const passwordReducer = (state, action) => {
  if (action.type === "PASSWORD_INPUT") {
    return { password: action.val, isValid: action.val.trim().length > 6 }
  }

  if (action.type === "INPUT_BLUR") {
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
  const emailInputRef = useRef()
  const passwordInputRef = useRef()

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
    dispatchPassword({ type: "PASSWORD_INPUT", val: event.target.value })
  }

  const validateEmailHandler = () => {
    dispatchEmail({ type: "INPUT_BLUR" })
  }

  const validatePasswordHandler = () => {
    dispatchPassword({ type: "INPUT_BLUR" })
  }

  const submitHandler = (event) => {
    event.preventDefault()

    if (formIsValid) {
      authCtx.onLogin(emailState.email, passwordState.password)
    } else if (!emailIsValid) {
      emailInputRef.current.focus()
    } else {
      passwordInputRef.current.focus()
    }
  }

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <Input
          ref={emailInputRef}
          id="email"
          label="E-mail"
          type="email"
          isValid={emailIsValid}
          value={emailState.email}
          onChange={emailChangeHandler}
          onBlur={validateEmailHandler}
        />
        <div
          className={`${classes.control} ${passwordState.isValid === false ? classes.invalid : ""}`}
        >
          <Input
            ref={passwordInputRef}
            id="password"
            label="Password"
            type="password"
            isValid={passwordIsValid}
            value={passwordState.password}
            onChange={passwordChangeHandler}
            onBlur={validatePasswordHandler}
          />
        </div>
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  )
}

export default Login
