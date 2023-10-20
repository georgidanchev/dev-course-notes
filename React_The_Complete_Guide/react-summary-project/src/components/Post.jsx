import classes from "./Post.module.css"

function Post(props) {
  const { author, body } = props

  return (
    <li className={classes.post}>
      <p className={classes.author}>{author}</p>
      <p className={classes.text}>{body}</p>
    </li>
  )
}

export default Post
