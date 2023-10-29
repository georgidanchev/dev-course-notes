import { useState, useEffect } from "react"
import classes from "./PostsList.module.css"
import Modal from "./Modal"
import NewPost from "./NewPost"
import Post from "./Post"

function PostsList({ isPosting, onStopPosting }) {
  const [posts, setPosts] = useState([])

  // To avoid infinite loop we have add our fetch code in use-effect hook
  useEffect(() => {
    // This hook cannot be async an function
    async function fetchPosts() {
      const response = await fetch("http://localhost:8080/posts")
      const resData = await response.json()
      setPosts(resData.posts)
    }

    // So we wrap our code in another function to make it async
    fetchPosts()
  }, [])

  function addPostHandler(postData) {
    fetch("http://localhost:8080/posts", {
      method: "POST",
      body: JSON.stringify(postData),
      headers: {
        "content-type": "application/json",
      },
    })

    setPosts((existingPosts) => [postData, ...existingPosts])
  }

  return (
    <>
      {isPosting && (
        <Modal onClose={onStopPosting}>
          <NewPost onCancel={onStopPosting} onAddPost={addPostHandler} />
        </Modal>
      )}

      {posts.length > 0 && (
        <ul className={classes.posts}>
          {posts.map((post) => (
            <Post key={post.body} author={post.author} body={post.body} />
          ))}
        </ul>
      )}

      {posts.length === 0 && (
        <div style={{ textAlign: "center", color: "white" }}>
          <h2>There are no posts yet.</h2>
          <p>Start adding some!</p>
        </div>
      )}
    </>
  )
}

export default PostsList
