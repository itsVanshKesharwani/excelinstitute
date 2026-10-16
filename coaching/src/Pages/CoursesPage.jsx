    import Navbar from "../Component/Navbar/Navbar";

    function CoursesPage() {
    return (
        <>
        <Navbar />
        <div className="container py-5">

  <div className="text-center mb-5">
    <h1 className="fw-bold">Academic Programs</h1>
    <p className="text-muted">
      Explore our courses from Nursery to Class 12 with experienced faculty and modern teaching methods.
    </p>
  </div>

            {/* Card 1 */}
            <div className="row g-4">

            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12">

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

            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12">

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

            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12">

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

            {/* card 4 */}


            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12">

                <div className="card shadow course-card">

                <img
                    src="https://images.unsplash.com/photo-1503676382389-4809596d5290?w=700"
                    className="card-img-top"
                />

                <div className="card-body">

                    <span className="badge bg-primary-subtle text-primary">
                    High School
                    </span>

                    <h3 className="mt-3">Classes 9-10</h3>

                    <p>
                    Developing analytical and critical thinking skills.
                    </p>

                    <a href="#" className="details">
                    View Details →
                    </a>

                </div>

                </div>

            </div>


            {/* card 5 */}


            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12">

                <div className="card shadow course-card">

                <img
                    src="https://images.unsplash.com/photo-1503676382389-4809596d5290?w=700"
                    className="card-img-top"
                />

                <div className="card-body">

                    <span className="badge bg-primary-subtle text-primary">
                    Intermediate School
                    </span>

                    <h3 className="mt-3">Classes 11(Special Batch for Board And Entrance Exam )</h3>

                    <p>
                    Developing analytical and critical thinking skills.
                    </p>

                    <a href="#" className="details">
                    View Details →
                    </a>

                </div>

                </div>

            </div>

            {/* card 6 */}

            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12">

                <div className="card shadow course-card">

                <img
                    src="https://images.unsplash.com/photo-1503676382389-4809596d5290?w=700"
                    className="card-img-top"
                />

                <div className="card-body">

                    <span className="badge bg-primary-subtle text-primary">
                    Intermediate School
                    </span>

                    <h3 className="mt-3">Classes 12(Special Batch for Board And Entrance Exam )</h3>

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
        </div>
        </>
    );
    }

    export default CoursesPage;