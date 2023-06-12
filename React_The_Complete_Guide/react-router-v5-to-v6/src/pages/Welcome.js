import { Link, Outlet } from "react-router-dom"

const Welcome = () => {
  return (
    <section>
      <h1>The Welcome Page</h1>
      <Link to="/welcome/new-user">New Link</Link>
      <Outlet/>
    </section>
  )
}

export default Welcome
