import { useState, useEffect } from "react";
import poster1 from "../assets/slide1.jpg";
import poster2 from "../assets/slide2.jpg";
import poster3 from "../assets/slide3.jpg";

const images = [poster1, poster2, poster3];

const PosterSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, [currentIndex]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto mt-5">
      <img
        src={images[currentIndex]}
        alt="Poster"
        className="w-full h-auto rounded-lg shadow-lg transition-opacity duration-700"
      />
    </div>
  );
};

export default PosterSlider;