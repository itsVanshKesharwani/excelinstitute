import "./About.css";
import faculty from "../Img/Savi.png"; // path apne project ke hisaab se change kar lena


function About() {
  return (
    <section className="faculty-section py-5">
      <div className="container">
        <div className="faculty-card">
          <div className="row align-items-center">

            {/* Left */}
            <div className="col-lg-4 text-center">

              <img
                src={faculty}
                alt="Faculty"
                className="faculty-img"
              />

              <h3 className="faculty-name mt-4">
                Savindra Singh
              </h3>

              <p className="faculty-post">
                Faculty
              </p>

              <p className="qualification">
                B.Tech (Mechanical Engineering)
                <br />
                IIT Jodhpur, Rajasthan
              </p>

            </div>

            {/* Right */}
            <div className="col-lg-8">

              <h2 className="faculty-title">
                Faculty Profile
              </h2>

              <div className="faculty-message">

                <p>
                  "With a strong academic background from IIT Jodhpur and a
                  passion for teaching, my goal is to help every student build
                  conceptual clarity, confidence, and problem-solving skills.
                  Success comes through consistent learning, discipline, and
                  practical understanding."
                </p>

              </div>

            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

export default About;