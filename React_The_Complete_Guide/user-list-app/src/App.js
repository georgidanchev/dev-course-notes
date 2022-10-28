import React, { Fragment, useState } from "react"

import AddUser from "./comps/Users/AddUsers"
import UsersList from "./comps/Users/UsersList"

function App() {
  const [usersList, setUsersList] = useState([])

  const addUserHandler = (uName, uAge) => {
    setUsersList((prevUsersList) => {
      return [...prevUsersList, { name: uName, age: uAge}]
    })
  }

  return (
    <Fragment>
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={usersList} />
    </Fragment>
  )
}

export default App
