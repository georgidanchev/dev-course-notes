import React, { useState } from "react"
import { Link, useNavigate, withRouter } from "react-router-dom"
import PropTypes from "prop-types"
import { connect } from "react-redux"
import { addEducation } from "../../actions/profile"

const AddEducation = ({ addEducation, history }) => {
  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    school: "",
    degree: "",
    fieldOfStudy: "",
    from: "",
    to: "",
    current: false,
    description: "",
  })

  const [toDateDisabled, toggleDisabled] = useState(false)

  const { school, degree, fieldOfStudy, from, to, current, description } = formData

  const onChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value })

  return (
    <div className="container">
      <h1 className="large text-primary">Add your Education</h1>
      <p className="lead">
        <i className="fas fa-code-branch"></i> Add any school or bootcamp that you have attended
      </p>
      <small>* = required field</small>
      <form
        className="form"
        onSubmit={(e) => {
          e.preventDefault()
          addEducation(formData, navigate)
        }}
      >
        <div className="form-group">
          <input
            type="text"
            placeholder="* School or Bootcamp"
            name="school"
            value={school}
            onChange={onChange}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="* degree or certificate"
            name="degree"
            value={degree}
            onChange={onChange}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="Field of study"
            name="fieldOfStudy"
            value={fieldOfStudy}
            onChange={onChange}
          />
        </div>
        <div className="form-group">
          <h4>From Date</h4>
          <input type="date" name="from" value={from} onChange={onChange} />
        </div>
        <div className="form-group">
          <p>
            <input
              type="checkbox"
              name="current"
              checked={current}
              value={current}
              onChange={(e) => {
                setFormData({ ...formData, current: !current })
                toggleDisabled(!toDateDisabled)
              }}
            />{" "}
            Current school
          </p>
        </div>
        <div className="form-group">
          <h4>To Date</h4>
          <input
            type="date"
            name="to"
            value={to}
            onChange={onChange}
            disabled={toDateDisabled ? "disabled" : ""}
          />
        </div>
        <div className="form-group">
          <textarea
            name="description"
            cols="30"
            rows="5"
            placeholder="Program Description"
            value={description}
            onChange={onChange}
          ></textarea>
        </div>
        <input type="submit" className="btn btn-primary my-1" />
        <a className="btn btn-light my-1" href="dashboard.html">
          Go Back
        </a>
      </form>
    </div>
  )
}

AddEducation.propTypes = {
  addEducation: PropTypes.func.isRequired,
}

export default connect(null, { addEducation })(AddEducation)
