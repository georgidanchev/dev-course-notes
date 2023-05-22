import { Link } from "react-router-dom"
import classes from "./Root.module.css"

function HomePage() {
  return (
    <>
      <h1 className={classes.h1}>My home page</h1>
      <p>
        Go to <Link to="/products">the list of products</Link>.
      </p>
    </>
  )
}

export default HomePage
