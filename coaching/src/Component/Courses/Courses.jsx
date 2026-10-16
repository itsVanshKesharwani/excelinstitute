import "./Courses.css";
import { Link } from "react-router-dom";

function Courses() {

  return (
    <section className="courses py-5" id="courses">
      <div className="container">

        <p className="text-center orange-text">OUR PROGRAMS</p>

        <h1 className="text-center fw-bold">
          Academic Excellence Across Levels
        </h1>

        <p className="text-center text-secondary mb-5">
          Discover our meticulously designed programs tailored for
          different stages of a student's learning journey.
        </p>

        <div className="row">

          {/* Card 1 */}

          <div className="col-md-4 mb-4">

            <div className="card shadow course-card">

              <img
                src="https://images.unsplash.com/photo-1513258496099-48168024aec0?w=700"
                className="card-img-top"
              />

              <div className="card-body">

                <span className="badge bg-primary-subtle text-primary">
                  Pre-Primary
                </span>

                <h3 className="mt-3">UKG</h3>

                <p>
                  Preparing for primary education with advanced basics.
                </p>

                <a href="#" className="details">
                  View Details →
                </a>

              </div>

            </div>

          </div>

          {/* Card 2 */}

          <div className="col-md-4 mb-4">

            <div className="card shadow course-card">

              <img
                src="https://images.unsplash.com/photo-1509062522246-3755977927d7?w=700"
                className="card-img-top"
              />

              <div className="card-body">

                <span className="badge bg-primary-subtle text-primary">
                  Primary
                </span>

                <h3 className="mt-3">Classes 1-5</h3>

                <p>
                  Comprehensive primary education fostering curiosity.
                </p>

                <a href="#" className="details">
                  View Details →
                </a>

              </div>

            </div>

          </div>

          {/* Card 3 */}

          <div className="col-md-4 mb-4">

            <div className="card shadow course-card">

              <img
                src="https://images.unsplash.com/photo-1503676382389-4809596d5290?w=700"
                className="card-img-top"
              />

              <div className="card-body">

                <span className="badge bg-primary-subtle text-primary">
                  Middle School
                </span>

                <h3 className="mt-3">Classes 6-8</h3>

                <p>
                  Developing analytical and critical thinking skills.
                </p>

                <a href="#" className="details">
                  View Details →
                </a>

              </div>

            </div>

          </div>

        </div>

        <div className="text-center mt-4">
          < Link to="/courses" className="btn btn-warning btn-lg px-5">
              View All Courses
          </Link>
        </div>

      </div>
    </section>
  );
}

export default Courses;