import { Link } from "react-router-dom"

function ProductsPage() {
  return (
    <>
      <h1>The Products Page</h1>
      <p>
        Go to the <Link to="/">home page</Link>
      </p>
    </>
  )
}

export default ProductsPage
