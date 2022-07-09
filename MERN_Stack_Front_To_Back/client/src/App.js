import { Fragment } from "react"
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom"
import { Landing } from "./components/layout/Landing"
import { Navbar } from "./components/layout/Navbar"
import { Register } from "./components/auth/Register"
import { Login } from "./components/auth/Login"
import "./App.css"

const App = () => (
  <Router>
    <Fragment>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Landing />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/login" element={<Login />} />
      </Routes>
    </Fragment>
  </Router>
)

export default App
