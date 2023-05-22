import { useParams, Link } from "react-router-dom"

function ProductDetails() {
  const params = useParams()

  return (
    <>
      <h1>Product details</h1>
      <p>{params.productId}</p>
      <p>
        {/* Options: 'route' and 'path' */}
        <Link to=".." relative="path">
          Back
        </Link>
      </p>
    </>
  )
}

export default ProductDetails
