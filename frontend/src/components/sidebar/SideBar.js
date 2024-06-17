import React from "react"
import { Link } from "react-router-dom"
import { AiOutlineBold } from "react-icons/ai"
import "./SideBar.css"
const SideBar = () => {
  return (
    <div>
      <div>
        <div className="navbar">
          <ul className="navList">
            <img src="b.png" className="bImage" />
            <h3>
              <Link className="link" to="/home">
                <i class="icon-home"></i>
              </Link>
            </h3>
            <h4 className="links">
              <Link className="link" to="/projects">
                <i class="icon-graduation"></i>
              </Link>
            </h4>
            <h4 className="links">
              <Link className="link" to="/blog">
                <i class="icon-bubble"></i>
              </Link>
            </h4>
            <h4 className="links">
              <Link className="link" to="/resume">
                <i class="icon-doc"></i>
              </Link>
            </h4>
            <h4 className="links">
              <Link className="link" to="/portfolio">
                <i class="icon-note"></i>
              </Link>
            </h4>
            <div className="portfolioRightSide">
              <h4 className="links">
                <Link className="link" to="/about">
                  <i class="icon-layers"> </i>
                </Link>
              </h4>
              <h4 className="links">
                <Link className="link" to="/testimonials">
                  <i class="icon-briefcase"> </i>
                </Link>
              </h4>
              <h4 className="links">
                <Link className="link" to="/contact">
                  <i class="icon-user"> </i>
                </Link>
              </h4>
              <h4 className="links">
                <Link className="link" to="/services">
                  <i class="icon-settings"> </i>
                </Link>
              </h4>
            </div>
            <span className="copyright">&copy; 2023 - 2024</span>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default SideBar
