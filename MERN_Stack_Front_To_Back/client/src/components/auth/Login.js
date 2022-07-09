import React, { useState } from "react"
import { Link } from "react-router-dom"
// import axios from "axios"

export const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  })

  // destructure form data and pull selected values
  const { email, password } = formData

  // handle input change
  const onChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value })

  // handle form submit
  const onSubmit = async (e) => {
    e.preventDefault()

    console.log("user registrations successful")

    // const newUser = {
    //   name,
    //   email,
    //   password,
    // }

    // try {
    //   const config = {
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //   }

    //   const body = JSON.stringify(newUser)

    //   const res = await axios.post("/api/users", body, config)

    //   console.log(res.data)
    // } catch (error) {
    //   console.error(error)
    // }
  }

  return (
    <section className="container">
      <h1 className="large text-primary">Sign In</h1>
      <p className="lead">
        <i className="fas fa-user"></i> Sign Into Your Account
      </p>
      <form className="form" action="create-profile.html" onSubmit={(e) => onSubmit(e)}>
        <div className="form-group">
          <input
            type="email"
            placeholder="Email Address"
            name="email"
            value={email}
            onChange={(e) => onChange(e)}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            placeholder="Password"
            name="password"
            minLength="6"
            onChange={(e) => onChange(e)}
            value={password}
          />
        </div>
        <input type="submit" className="btn btn-primary" value="Login" />
      </form>
      <p className="my-1">
        Don't have an account? <Link to="/register">Register</Link>
      </p>
    </section>
  )
}
