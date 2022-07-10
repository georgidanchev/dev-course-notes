import "./App.css"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import { Fragment, useEffect } from "react"
import { Landing } from "./components/layout/Landing"
import { loadUser } from "./actions/auth"
import Login from "./components/auth/Login"
import { Navbar } from "./components/layout/Navbar"
import Alert from "./components/layout/Alert"
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
            <Route exact path="/" element={<Landing />} />
            <Route exact path="/register" element={<Register />} />
            <Route exact path="/login" element={<Login />} />
          </Routes>
        </Fragment>
      </Router>
    </Provider>
  )
}

export default App
