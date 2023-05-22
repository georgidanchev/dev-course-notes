import { Link } from "react-router-dom"

const DummyProductData = [
  { id: "p1", title: "product1" },
  { id: "p2", title: "product2" },
  { id: "p3", title: "product3" },
]

function ProductsPage() {
  return (
    <>
      <h1>The Products Page</h1>
      <p>
        Go to the <Link to="/">home page</Link>
      </p>
      <ul>
        {DummyProductData.map((prodLink) => (
          <li key={prodLink.id}>
            <Link to={prodLink.id}>{prodLink.title}</Link>
          </li>
        ))}
      </ul>
    </>
  )
}

export default ProductsPage
