import React from "react"
import { Link } from "react-router-dom"
const Navbar = () => {
  return (
    <div>
      <div>
        <div className="navbar">
          <h2 style={{ marginLeft: "100px", marginRight: "100px" }}>
            <Link style={{ color: "rgb(11, 92, 255)" }} to="/homescreen">
              My Shop
            </Link>
          </h2>

          <h3>
            <Link style={{ color: "rgb(11, 92, 255)" }} to="/features">
              Features
            </Link>
          </h3>
          <h3>
            <Link style={{ color: "rgb(11, 92, 255)" }} to="/pricing">
              Pricing
            </Link>
          </h3>
          <h3>
            <Link style={{ color: "rgb(11, 92, 255)" }} to="/disabled">
              Disabled
            </Link>
          </h3>
          <div className="login-cart">
            <h3>
              <Link style={{ color: "rgb(11, 92, 255)" }} to="/login">
                Login
              </Link>
            </h3>
            <h3>
              <Link style={{ color: "rgb(11, 92, 255)" }} to="/cart">
                Cart
              </Link>
            </h3>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
