import classes from "./NewPost.module.css"

function NewPost(props) {
  return (
    <form className={classes.form}>
      <div>
        <label htmlFor="body">Text</label>
        <textarea id="body" required rows={3} onChange={props.onBodyChange} />
      </div>

      <div>
        <label htmlFor="name">Your name</label>
        <input type="text" id="name" required onChange={props.onNameChange} />
      </div>
    </form>
  )
}

export default NewPost
