import img1 from "../Component/Img/Savi.png";
import img2 from "../Component/Img/Savi.png";
import img3 from "../Component/Img/Savi.png";
import img4 from "../Component/Img/Savi.png";
import img5 from "../Component/Img/Savi.png";
import img6 from "../Component/Img/Savi.png";
import img7 from "../Component/Img/Savi.png";
import img8 from "../Component/Img/Savi.png";


function Gallerypage() {

  const images = [
    img1, img2, img3, img4, img5,
    img6, img7, img8
  ];
 
  return (
  
   <div className="container py-5">
  <div className="row">
 <h1 className="text-center">Gallery</h1>
    {images.map((img, index) => (
      <div className="col-lg-4 col-md-6 col-sm-12 mb-4" key={index}>
        <div className="card shadow">
          <img src={img} className="card-img-top gallery-img" alt="" />
        </div>
      </div>
    ))}

  </div>
</div>
  );
}

export default Gallerypage;