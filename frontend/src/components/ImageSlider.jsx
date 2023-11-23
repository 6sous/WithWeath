import { useEffect, useState } from "react";
import "../styles/ImageSlider.scss";
import PropTypes from "prop-types";

function ImageSlider({ slides }) {
  const [slideIndex, setSlideIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSlideIndex((prevIndex) => (prevIndex + 1) % slides.hits.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [slideIndex]);

  return (
    <div className="slider-container">
      {slides.hits.map((slide, index) => {
        return (
          <div
            key={slide.id}
            className={`${slideIndex === index && "active"} slide`}
          >
            <img
              src={slide.largeImageURL}
              className="slide-image"
              alt="city from pixabay"
            />
          </div>
        );
      })}
    </div>
  );
}

ImageSlider.propTypes = {
  slides: PropTypes.shape({
    hits: PropTypes.arrayOf(
      PropTypes.shape({
        collections: PropTypes.number.isRequired,
        comments: PropTypes.number.isRequired,
        downloads: PropTypes.number.isRequired,
        id: PropTypes.number.isRequired,
        imageHeight: PropTypes.number.isRequired,
        imageSize: PropTypes.number.isRequired,
        imageWidth: PropTypes.number.isRequired,
        largeImageURL: PropTypes.string.isRequired,
        likes: PropTypes.number.isRequired,
        pageURL: PropTypes.string.isRequired,
        previewHeight: PropTypes.number.isRequired,
        previewURL: PropTypes.string.isRequired,
        previewWidth: PropTypes.number.isRequired,
        tags: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        user: PropTypes.string.isRequired,
        userImageURL: PropTypes.string.isRequired,
        user_id: PropTypes.number.isRequired,
        views: PropTypes.number.isRequired,
        webformatHeight: PropTypes.number.isRequired,
        webformatURL: PropTypes.string.isRequired,
        webformatWidth: PropTypes.number.isRequired,
      })
    ).isRequired,
    total: PropTypes.number.isRequired,
    totalHits: PropTypes.number.isRequired,
  }).isRequired,
};

export default ImageSlider;
