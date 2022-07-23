import "./App.css"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import { Fragment, useEffect } from "react"
import { loadUser } from "./actions/auth"
import Alert from "./components/layout/Alert"
import CreateProfile from "./components/profile-forms/CreateProfile"
import Dashboard from "./components/dashboard/Dashboard"
import Landing from "./components/layout/Landing"
import Login from "./components/auth/Login"
import Navbar from "./components/layout/Navbar"
import PrivateRoute from "./components/routing/PrivateRoute"
import Register from "./components/auth/Register"
import setAuthToken from "./utils/setAuthToken"

// Redux
import { Provider } from "react-redux"
import store from "./store"

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
            <Route
              path="/dashboard"
              element={<PrivateRoute component={Dashboard} />}
            />
            <Route
              path="/create-profile"
              element={<PrivateRoute component={CreateProfile} />}
            />
          </Routes>
        </Fragment>
      </Router>
    </Provider>
  )
}

export default App
