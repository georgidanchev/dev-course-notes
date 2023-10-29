import { useState } from "react"
import classes from "./PostsList.module.css"
import NewPost from "./NewPost"
import Post from "./Post"
import Modal from "./Modal"

function PostsList() {
  const [modalIsVisible, setModalIsVisible] = useState(true)
  const [enteredBody, setEnteredBody] = useState("")
  const [enteredName, setEnteredName] = useState("")

  function hideModalHandler() {
    setModalIsVisible(false)
  }

  function bodyChangeHandler(event) {
    setEnteredBody(event.target.value)
  }

  function nameChangeHandler(event) {
    setEnteredName(event.target.value)
  }

  return (
    <>
      {modalIsVisible && (
        <Modal onClose={hideModalHandler}>
          <NewPost
            onBodyChange={bodyChangeHandler}
            onNameChange={nameChangeHandler}
          />
        </Modal>
      )}

      <ul className={classes.posts}>
        <Post author="Maximilian" body="React.js is awesome!" />
        <Post author="Manuel" body="Check out the full course!" />
      </ul>
    </>
  )
}

export default PostsList
