import React, { useState } from "react"
import UserForm from "./Comps/UserForm"
import UsersList from "./Comps/UsersList"

const dummy_data = [
  { name: "madMax100", age: 99 },
  { name: "Johnny John", age: 88 },
  { name: "John Doe", age: 88 },
  { name: "Jane Doe", age: 88 },
]

function App() {
  const [getUsersList, setUsersList] = useState(dummy_data)

  const onSubmitHandler = (arg1, arg2) => {
    console.log(arg1, arg2)

    const newUser = {
      name: arg1,
      age: arg2,
    }

    setUsersList((prevUserList) => {
      return [newUser, ...prevUserList]
    })
  }

  return (
    <main>
      <UserForm onSubmit={onSubmitHandler} />
      <UsersList usersList={getUsersList} />
    </main>
  )
}

export default App
