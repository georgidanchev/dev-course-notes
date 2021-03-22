// rcf - snippet shortcut for function based component

import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header style={headerStyle}>
      <h1>TodoList</h1>
      <nav style={navStyle}>
        <Link style={linkStyle} to="/">Home</Link>
        <Link style={linkStyle} to="/about">About</Link>
      </nav>
    </header>
  )
}

const headerStyle = {
  background: '#333',
  textAlign: 'center',
  padding: '10px',
  color: '#fff',
}

const linkStyle = {
  border: '1px solid white',
  textDecoration: 'none',
  margin: '0px 10px',
  fontSize: '10px',
  padding: '5px',
  color: '#fff',
}

const navStyle = {
  marginTop: '5px',
}

export default Header;