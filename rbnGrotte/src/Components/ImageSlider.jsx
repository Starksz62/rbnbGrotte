import { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../Styles/ImageSlider.css"
function ImageSlider({ images }) {
  const [mainImageIndex, setMainImageIndex] = useState(0);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    beforeChange: (current, next) => {
      setMainImageIndex(next);
    },
  };

  return (
    <div>

      <div className="thumbnail-images">
        <Slider {...settings}>
          {images.map((image, index) => (
            <div key={index}>
              <img className='image-carrousel'src={image} alt={`Image ${index}`} />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default ImageSlider;
