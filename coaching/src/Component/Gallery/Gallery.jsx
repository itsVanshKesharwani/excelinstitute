import "./Gallery.css";
import { Link } from "react-router-dom";

import img1 from "../Img/Savi.png";
import img2 from "../Img/Savi.png";
import img3 from "../Img/Savi.png";

function Gallery() {

  const images = [img1, img2, img3];

  return (
    <div className="container my-5">
  <div className="row">

    {images.map((img, index) => (
      <div className="col-md-4 mb-4" key={index}>
        <div className="card h-100">
          <img src={img} className="card-img-top" alt="" />
        </div>
      </div>
    ))}

          <div className="text-center">
            < Link to="/gallerypage" className="btn btn-warning w-auto px-4">
              View Gallery
          </Link>
          </div>
  </div>
</div>

      
  );
}

export default Gallery;