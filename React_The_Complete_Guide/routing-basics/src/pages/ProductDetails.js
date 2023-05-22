import { useParams } from "react-router-dom"

function ProductDetails() {
  const params = useParams()

  return (
    <>
      <h1>Product details</h1>
      <p>{params.productId}</p>
    </>
  )
}

export default ProductDetails
