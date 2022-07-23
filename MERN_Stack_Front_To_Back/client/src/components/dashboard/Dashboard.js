import { connect } from "react-redux"
import { getCurrentProfile } from "../../actions/profile"
import { Link } from "react-router-dom"
import PropTypes from "prop-types"
import React, { Fragment, useEffect } from "react"
import Spinner from "../layout/Spinner"

const Dashboard = ({ getCurrentProfile, auth: { user }, profile: { profile, loading } }) => {
  useEffect(() => {
    getCurrentProfile()
  }, [])

  return loading && profile === null ? (
    <Spinner />
  ) : (
    <Fragment>
      <section className="container">
        <h1 class="large text-primary">Dashboard</h1>
        <p class="lead">
          <i className="fas fa-user"></i> Welcome {user && user.name}
        </p>
        {profile !== null ? (
          <Fragment>has</Fragment>
        ) : (
          <Fragment>
            <p>You have not setup a profile, please add some info</p>
            <Link to="/create-profile" className="btn btn-primary my-1">
              Create Profile
            </Link>
          </Fragment>
        )}
      </section>
    </Fragment>
  )
}

Dashboard.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired,
}

const mapStateToProps = (state) => ({
  auth: state.auth,
  profile: state.profile,
})

export default connect(mapStateToProps, { getCurrentProfile })(Dashboard)
