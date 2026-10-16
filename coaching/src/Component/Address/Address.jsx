import './Address.css';
import Coaching from "../Img/Ai1.jpeg"; 
import location from "../Img/mahuwari.jpg"
function Address() {
  return (
    <>
     <div className="container my-5">
      <div className="row align-items-center">

        {/* Left Box */}
        <div className="col-md-6 mb-4">
          <div className="box">
            <img
              src={Coaching}
              alt="Excel Coaching"
              className="img-fluid rounded shadow"
            />
          </div>
        </div>

        {/* Right Box */}
        <div className="col-md-6 mb-4">
          <div className="box">
            <a href="https://www.bing.com/maps/search?FORM=QBMV&style=r&q=Excel+Coaching+Classes%2C+Karchana+211010%2C+UP%2C+India&ss=id.local_ypid%3A%22YNDF32F4CFB7122225%22&st=Excel+Coaching+Classes&sfa=Karchana+211010%2C+UP%2C+India&cp=25.351431%7E81.890915&lvl=16">
                <img src={location} alt="" />
            </a>
          </div>
        </div>

      </div>
    </div>
    </>
  )
}

export default Address