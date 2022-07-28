import "./App.css"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import { Fragment, useEffect } from "react"
import Alert from "./components/layout/Alert"
import Dashboard from "./components/dashboard/Dashboard"
import Landing from "./components/layout/Landing"
import Login from "./components/auth/Login"
import Navbar from "./components/layout/Navbar"
import PrivateRoute from "./components/routing/PrivateRoute"
import ProfileForm from "./components/profile-forms/ProfileForm"
import Register from "./components/auth/Register"
import AddExperience from "./components/profile-forms/AddExperience"
import Profiles from "./components/profiles/Profiles"
import AddEducation from "./components/profile-forms/AddEducation"

// Redux
import { Provider } from "react-redux"
import store from "./store"
import { loadUser } from "./actions/auth"
import setAuthToken from "./utils/setAuthToken"

//
const App = () => {
  // adding [] at the end makes it run only once on mount and unmount
  useEffect(() => {
    if (localStorage.token) {
      setAuthToken(localStorage.token)
    }

    store.dispatch(loadUser())
  }, [])

  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <Navbar />
          <Alert />
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/profiles" element={<Profiles />} />
            <Route path="/dashboard" element={<PrivateRoute component={Dashboard} />} />
            <Route path="/create-profile" element={<PrivateRoute component={ProfileForm} />} />
            <Route path="/edit-profile" element={<PrivateRoute component={ProfileForm} />} />
            <Route path="/add-experience" element={<PrivateRoute component={AddExperience} />} />
            <Route path="/add-education" element={<PrivateRoute component={AddEducation} />} />
          </Routes>
        </Fragment>
      </Router>
    </Provider>
  )
}

export default App
