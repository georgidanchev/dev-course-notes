import { Link } from "react-router-dom"
import classes from "./Root.module.css"

function ProductsPage() {
  return (
    <>
      <h1 className={classes.h1}>The Products Page</h1>
      <p>
        Go to the <Link to="/">home page</Link>
      </p>
    </>
  )
}

export default ProductsPage
