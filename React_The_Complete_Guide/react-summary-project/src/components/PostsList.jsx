import classes from "./PostsList.module.css"
import NewPost from "./NewPost"
import Post from "./Post"
import Modal from "./Modal"
import { useState } from "react"

function PostsList({ isPosting, onStopPosting }) {
  const [posts, setPosts] = useState([])

  function addPostHandler(postData) {
    setPosts((existingPosts) => [postData, ...existingPosts])
  }

  return (
    <>
      {isPosting && (
        <Modal onClose={onStopPosting}>
          <NewPost onCancel={onStopPosting} onAddPost={addPostHandler} />
        </Modal>
      )}

      <ul className={classes.posts}>
        <Post author="Manuel" body="Check out the full course!" />
      </ul>
    </>
  )
}

export default PostsList
