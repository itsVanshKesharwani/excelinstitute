import "./Footer.css";
import { NavLink } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaWhatsapp,
  FaMapMarkerAlt,
  FaPhoneAlt,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">

      <div className="container">
        <div className="row">

          {/* Left */}
          <div className="col-lg-4 col-md-6 mb-4">
            <h3>Excel Coaching Classes</h3>
            <p>
              Leading coaching institute in Prayagraj offering quality
              education from Nursery to Class 12 with experienced faculty.
            </p>
          </div>

          {/* Middle */}
          <div className="col-lg-4 col-md-6 mb-4">
            <h3>Quick Links</h3>

           <ul className="footer-links">

  <li>
    <NavLink to="/">Home</NavLink>
  </li>

  <li>
    <NavLink to="/about">About</NavLink>
  </li>

  <li>
    <NavLink to="/courses">Courses</NavLink>
  </li>

  <li>
    <NavLink to="/facilities">Facilities</NavLink>
  </li>

  <li>
    <NavLink to="/gallerypage">Gallery</NavLink>
  </li>

  <li>
    <NavLink to="/admission">Admission(Enroll Now)</NavLink>
  </li>

  <li>
    <NavLink to="/contact">Contact</NavLink>
  </li>

</ul>
          </div>

          {/* Right */}
          <div className="col-lg-4 col-md-6 mb-4">
            <h3>Contact</h3>

            <p><FaMapMarkerAlt /> Mahuwari (ITI) Naini Prayagraj, Uttar Pradesh</p>
            <p><FaPhoneAlt /> +91 9839420071</p>
            <p><FaPhoneAlt /> +91 9454378802</p>

            <div className="social-icons">
              <a href="#"><FaFacebookF /></a>
              <a href="#"><FaInstagram /></a>
              <a href="#"><FaLinkedinIn /></a>
              <a href="#"><FaYoutube /></a>
              <a href="#"><FaWhatsapp /></a>
            </div>
          </div>

        </div>

        <hr />

        <p className="copyright">
          © 2026 Excel Coaching Classes. All Rights Reserved.
        </p>

      </div>

    </footer>
  );
}

export default Footer;