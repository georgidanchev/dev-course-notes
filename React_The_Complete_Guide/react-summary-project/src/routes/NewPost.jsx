import Modal from "../components/Modal"
import { Link, Form, redirect } from "react-router-dom"
import classes from "./NewPost.module.css"

export default function NewPost() {
  return (
    <Modal>
      <Form method="post" className={classes.form}>
        <div>
          <label htmlFor="body">Text</label>
          <textarea id="body" name="body" required rows={3} />
        </div>
        <div>
          <label htmlFor="name">Your name</label>
          <input type="text" id="name" name="author" required />
        </div>

        <p className={classes.actions}>
          <Link to="/">Cancel</Link>
          <button>Submit</button>
        </p>
      </Form>
    </Modal>
  )
}

export async function action({ request }) {
  const formData = await request.formData()
  const postData = Object.fromEntries(formData)

  const response = await fetch("http://localhost:8080/posts", {
    method: "POST",
    body: JSON.stringify(postData),
    headers: {
      "content-type": "application/json",
    },
  })

  return redirect("/")
}
