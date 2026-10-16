import "./Navbar.css";
import { FaUser, FaBookOpen } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import  {useNavigate } from "react-router-dom";

function Navbar() {

  const navigate = useNavigate();

  return (
    <nav className="navbar navbar-expand-lg fixed-top bg-white shadow-sm py-2">
      <div className="container">

        {/* Logo */}
        <NavLink className="navbar-brand d-flex align-items-center" to="/">
          <div className="logo-box">
            <FaBookOpen className="logo-icon" />
          </div>

          <div className="ms-2">
            <h4 className="logo-title m-0">Excel Coaching</h4>
            <small className="logo-subtitle">Classes</small>
          </div>
        </NavLink>

        {/* Toggle */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarMenu"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarMenu">

          <ul className="navbar-nav mx-auto">

            <li className="nav-item">
              <NavLink className="nav-link" to="/">
                Home
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="/about">
                About
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="/courses">
                Courses
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="/facilities">
                Facilities
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="/results">
                Results
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="/gallerypage">
                Gallery
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="/address">
                Address
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="/contact">
                Contact
              </NavLink>
            </li>

          </ul>

          <div className="d-flex align-items-center">

            <button className="btn btn-warning btn-lg me-3"   onClick={() => navigate("/admission")}>
              Enroll Now
            </button>

            {/* only this line changed: /login -> /admin/login */}
            <NavLink className="login-link" to="/admin/login">
              <FaUser className="me-2"/>
            Admin Login
            </NavLink>

          </div>

        </div>
      </div>
    </nav>
  );
}

export default Navbar;
