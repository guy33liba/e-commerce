import React from "react"
import { Link } from "react-router-dom"
const Navbar = () => {
  return (
    <div>
      <div>
        <div className="navbar">
          <h2 style={{ marginLeft: "100px", marginRight: "100px" }}>
            <Link style={{ color: "blue" }} to="/home">
              My Shop
            </Link>
          </h2>

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
        <div>
          <h3>
            <Link style={{ color: "blue" }} to="/login">
              Login
            </Link>
          </h3>
          <h3>
            <Link style={{ color: "blue" }} to="/cart">
              Cart
            </Link>
          </h3>
        </div>
      </div>
    </div>
  )
}

export default Navbar
