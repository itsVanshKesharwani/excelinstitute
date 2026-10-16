import "./Hero.css";
import  {useNavigate } from "react-router-dom";

function Hero() {
  const navigate = useNavigate();

  return (
    <section className="hero">
      <div className="container">

        <div className="row align-items-center">

          {/* Left Side */}
          <div className="col-lg-6">

            <h1 className="hero-title">
              Empowering Minds,
              <br />
              <span>Shaping Futures</span>
            </h1>

            <p className="hero-text">
              Premium education from Nursery to Class 12.
              Join Bright Future Academy to unlock your true
              potential with expert faculty and modern facilities.
            </p>

            <div className="hero-buttons">

             <button className="btn btn-warning btn-lg me-3"   onClick={() => navigate("/admission")}>
              Enroll Now
            </button>

              <button className="btn btn-outline-light btn-lg">
                Book Free Demo
              </button>

            </div>

          </div>

          {/* Right Side */}
          <div className="col-lg-6 text-center">

            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=700"
              alt="Students"
              className="hero-img"
            />

          </div>

        </div>

      </div>
    </section>
  );
}

export default Hero;