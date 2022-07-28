import React, { Fragment, useEffect } from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"
import Spinner from "../layout/Spinner"
import ProfileItem from "./ProfileItem"
import { getProfiles } from "../../actions/profile"

const Profile = ({ getProfiles, profile: { profiles, loading } }) => {
  useEffect(() => {
    getProfiles()
  }, [])

  return (
    <div className="container">
      {loading ? (
        <Spinner />
      ) : (
        <Fragment>
          <h1 className="large text-primary">Developers</h1>
          <p class="lead">
            <i class="fab fa-connectdevelop"></i> Browse and connect with developers
          </p>
          <div class="profiles">
            {profiles.length > 0 ? (
              profiles.map((profile) => <ProfileItem key={profile._id} profile={profile} />)
            ) : (
              <h4>No profiles found...</h4>
            )}
          </div>
        </Fragment>
      )}
    </div>
  )
}

Profile.propTypes = {
  getProfiles: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
}

const mapStateToProps = (state) => ({
  profile: state.profile,
})

export default connect(mapStateToProps, { getProfiles })(Profile)
