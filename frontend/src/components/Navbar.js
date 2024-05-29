import React from "react"
import { Link } from "react-router-dom"
const Navbar = () => {
  return (
    <div>
      <div className="navbar">
        <h3>
          <Link to="/home">Home</Link>
        </h3>
        <h3>
          <Link to="/features">Features</Link>
        </h3>
        <h3>
          <Link to="/pricing">Pricing</Link>
        </h3>
        <h3>
          <Link to="/disabled">Disabled</Link>
        </h3>
      </div>
    </div>
  )
}

export default Navbar
