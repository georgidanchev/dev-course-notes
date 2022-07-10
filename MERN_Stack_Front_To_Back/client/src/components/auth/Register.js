import React, { useState } from "react"
import { Link } from "react-router-dom"
import { connect } from "react-redux"
import { setAlert } from "../../actions/alert"
import { register } from "../../actions/auth"
import PropTypes from "prop-types"
// import axios from "axios"

const Register = ({ setAlert, register }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  })

  // destructure form data and pull selected values
  const { name, email, password, password2 } = formData

  // handle input change
  const onChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value })

  // handle form submit
  const onSubmit = async (e) => {
    e.preventDefault()

    if (password !== password2) {
      setAlert("Passwords do not match", "danger")
    } else {
      register({ name, email, password })
    }
  }

  return (
    <section className="container">
      <h1 className="large text-primary">Sign Up</h1>
      <p className="lead">
        <i className="fas fa-user"></i> Create Your Account
      </p>
      <form className="form" action="create-profile.html" onSubmit={(e) => onSubmit(e)}>
        <div className="form-group">
          <input
            type="text"
            placeholder="Name"
            name="name"
            value={name}
            onChange={(e) => onChange(e)}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="email"
            placeholder="Email Address"
            name="email"
            value={email}
            onChange={(e) => onChange(e)}
            required
          />
          <small className="form-text">
            This site uses Gravatar so if you want a profile image, use a Gravatar email
          </small>
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
        <div className="form-group">
          <input
            type="password"
            placeholder="Confirm Password"
            name="password2"
            minLength="6"
            onChange={(e) => onChange(e)}
            value={password2}
          />
        </div>
        <input type="submit" className="btn btn-primary" value="Register" />
      </form>
      <p className="my-1">
        Already have an account? <Link to="/login">Sign In</Link>
      </p>
    </section>
  )
}

Register.prototype = {
  setAlert: PropTypes.func.isRequired,
  register: PropTypes.func.isRequired,
}

export default connect(null, { setAlert, register })(Register)
