import React, { Fragment, useEffect } from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"
import { getPosts } from "../../actions/post"
import Spinner from "../layout/Spinner"

const Posts = ({ getPosts, post: { posts, loading } }) => {
  useEffect(() => {
    getPosts()
  }, [getPosts])

  return <section className="container">post</section>
}

Posts.propTypes = {}

const mapStateToProps = (state) => ({
  getPosts: PropTypes.func.isRequired,
  post: PropTypes.object.isRequired,
})

export default connect(mapStateToProps, { getPosts })(Posts)
