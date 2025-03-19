import { useState, useEffect } from "react";
import poster1 from "../assets/slide1.jpg";
import poster2 from "../assets/slide2.jpg";
import poster3 from "../assets/slide3.jpg";

const images = [poster1, poster2, poster3];

const PosterSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);

    return () => clearInterval(interval); // Cleanup interval
  }, [currentIndex]);

  // Function to go to the next slide
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // Function to go to the previous slide
  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto mt-5">
      {/* Image Display */}
      <img
        src={images[currentIndex]}
        alt="Poster"
        className="w-full h-auto rounded-lg shadow-lg transition-opacity duration-700"
      />

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-black text-white px-4 py-2 rounded"
      >
        ◀
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-black text-white px-4 py-2 rounded"
      >
        ▶
      </button>
    </div>
  );
};

export default PosterSlider;