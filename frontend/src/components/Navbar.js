import React from "react"
import { Link } from "react-router-dom"
const Navbar = () => {
  return (
    <div>
      <div className="navbar">
        <h2 style={{ marginRight: "350px" }}>
          <Link style={{ color: "blue" }} to="/home">
            My Shop
          </Link>
        </h2>

        <h3>
          <Link style={{ color: "blue" }} to="/home">
            Home
          </Link>
        </h3>
        <h3>
          <Link style={{ color: "blue" }} to="/features">
            Features
          </Link>
        </h3>
        <h3>
          <Link style={{ color: "blue" }} to="/pricing">
            Pricing
          </Link>
        </h3>
        <h3>
          <Link style={{ color: "blue" }} to="/disabled">
            Disabled
          </Link>
        </h3>
      </div>
    </div>
  )
}

export default Navbar
