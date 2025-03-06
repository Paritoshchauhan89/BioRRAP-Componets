import React, { useState, useEffect } from "react";

const Carousel1 = () => {
  const images = [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuWCOQ7lQ0OkqzcHY_OPBXVSTmvbnzhzKCdA&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzLe2-_01D1mF5I6dWNyUsUi1tbKuCMJOwzw&s",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Government_of_India_logo.svg/2560px-Government_of_India_logo.svg.png",
    "https://www.india.gov.in/sites/upload_files/npi/files/logo_1.png",
    "https://images.prabhasakshi.com/2021/11/2021_11$2021110612411908414_0_news_large_23.jpeg",
    "https://www.presentations.gov.in/wp-content/uploads/2020/06/Aadhaar_Preview.png",
    "https://cdnbbsr.s3waas.gov.in/s3cd4bb35c75ba84b4f39e547b1416fd35/uploads/2021/06/2021061528.png",
    "https://currentaffairs.adda247.com/wp-content/uploads/multisite/sites/5/2020/06/11132950/rhwbe.jpg",
  ];
  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalTime = 3000;

  useEffect(() => {
    const autoPlay = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, intervalTime);

    return () => clearInterval(autoPlay);
  }, []);

  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % images.length);
  const prevSlide = () => setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);

  return (
    <div className="bg-white p-4 rounded-lg shadow-md md:col-span-1 h-[22rem] relative">
      {/* Carousel */}
      <div id="carousel" className="relative w-full h-full">
        {/* Navigation Buttons */}
        <button onClick={prevSlide} className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white px-3 py-1 rounded-full">
          ‹
        </button>
        <button onClick={nextSlide} className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white px-3 py-1 rounded-full">
          ›
        </button>

        {/* Image Display */}
        <div className="w-full h-full">
          <img src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} className="w-full h-full object-contain rounded-md" />
        </div>
      </div>
    </div>
  );
};

export default Carousel1;
