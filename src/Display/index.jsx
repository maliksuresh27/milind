import "./display.css";
import React, { useState, useEffect } from "react";
const Display = () => {
  const images = [
    "../images/image9.jpg",
    "../images/image1.jpg",
    "../images/image2.jpg",
    "../images/image3.jpg",
  ]; // List of image sources

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  useEffect(() => {
    // Function to change image source every 2 seconds
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval); // Clean up interval on component unmount
  }, []);
  const handleImageLoad = () => {
    setIsImageLoaded(true);
  };

  return (
    <div className="display-image">
      <img
        src={images[currentImageIndex]}
        alt={`Image ${currentImageIndex}`}
        className={isImageLoaded ? "image-visible" : "image-hidden"}
        onLoad={handleImageLoad}
      />
    </div>
  );

  // return (
  //   <div className="display-image">
  //     <img src={images[currentImageIndex]} alt={`Image ${currentImageIndex}`} />
  //   </div>
  // );
  // return (
  //   <div className="display-image">
  //     <img src="../images/image9.jpg" alt="Image9" className="image9" />
  //     <img src="../images/image1.jpg" alt="Image1" className="image1" />
  //     <img src="../images/image2.jpg" alt="Image2" className="image2" />
  //     <img src="../images/image3.jpg" alt="Image3" className="image3" />
  //   </div>
  // );
};
export default Display;
