import { FiLogIn } from "react-icons/fi"
import { BsCartFill } from "react-icons/bs"
import React from "react"
import "./Navbar.css" // Import your custom CSS if needed

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">Guy Shop</div>
      <div className="navbar-links">
        <ul>
          <li className="nav-item">
            <a href="/cart" className="nav-link ">
              login <BsCartFill />
            </a>
          </li>
          <li className="nav-item">
            <a href="/Login" className="nav-link">
              <FiLogIn />
            </a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
