import "./userInputs.css"

import { Fragment } from "react"

const UserInputs = (props) => {
  return (
    <Fragment>
      <div className="inputGroup inputGroup--first">
        <label className="inputGroup__label" for="userName">Username</label>
        <input className="inputGroup__input" id="userName" type="text" value="" />
      </div>
      <div className="inputGroup">
        <label className="inputGroup__label" for="userAge">Age</label>
        <input className="inputGroup__input" id="userAge" type="number" min="16" max="150" />
      </div>
      <button className="btn btn--dark" type="submit">Submit</button>
    </Fragment>
  )
}

export default UserInputs
