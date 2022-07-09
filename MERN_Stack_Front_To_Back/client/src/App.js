import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import { Fragment } from "react"
import { Landing } from "./components/layout/Landing"
import { Login } from "./components/auth/Login"
import { Navbar } from "./components/layout/Navbar"
import Alert from "./components/layout/Alert"
import Register from "./components/auth/Register"
import "./App.css"

// Redux
import { Provider } from "react-redux"
import store from "./store"

const App = () => (
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

export default App
