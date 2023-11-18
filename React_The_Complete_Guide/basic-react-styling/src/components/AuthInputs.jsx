import { useState } from "react"
import InputGroup from "./StyledInputGroup"
import Button from "./Button"

export default function AuthInputs() {
  const [enteredEmail, setEnteredEmail] = useState("")
  const [enteredPassword, setEnteredPassword] = useState("")
  const [submitted, setSubmitted] = useState(false)

  function handleInputChange(identifier, value) {
    if (identifier === "email") {
      setEnteredEmail(value)
    } else {
      setEnteredPassword(value)
    }
  }

  function handleLogin() {
    setSubmitted(true)
  }

  const emailNotValid = submitted && !enteredEmail.includes("@")
  const passwordNotValid = submitted && enteredPassword.trim().length < 6

  return (
    <div
      id="auth-inputs"
      className="w-full max-w-sm p-8 mx-auto rounded shadow-md bg-gradient-to-b from-stone-700 to-stone-800"
    >
      <div className="flex flex-col gap-2 mb-6">
        <InputGroup
          label="Email"
          type="email"
          invalid={emailNotValid}
          onChange={(event) => handleInputChange("email", event.target.value)}
        />
        <InputGroup
          label="Password"
          type="password"
          invalid={passwordNotValid}
          onChange={(event) => handleInputChange("password", event.target.value)}
        />
        {/* <p>
          <Label $invalid={emailNotValid}>Email</Label>
          <Input
            type="email"
            $invalid={emailNotValid}
            onChange={(event) => handleInputChange("email", event.target.value)}
          />
        </p>
        <p>
          <Label $invalid={passwordNotValid}>Password</Label>
          <Input
            type="password"
            $invalid={passwordNotValid}
            onChange={(event) => handleInputChange("password", event.target.value)}
          />
        </p> */}
      </div>

      <div className="flex justify-end gap-4">
        <button type="button" className="text-amber-400 hover:text-amber-500">
          Create a new account
        </button>
        <Button type="button" onClick={handleLogin}>
          Sign In
        </Button>
      </div>
    </div>
  )
}
