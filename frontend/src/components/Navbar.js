import React from "react"
import { Link } from "react-router-dom"
const Navbar = () => {
  return (
    <div style={{ display: "flex", gap: "10px", marginLeft: "100px" }}>
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
  )
}

export default Navbar
