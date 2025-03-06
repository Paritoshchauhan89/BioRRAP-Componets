import React, { useState, useEffect } from "react";

const Carousel2 = () => {
    const images = ["/img/Biouser1.png", "/img/Biouser4.png", "/img/Biouser3.png"];
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
    const goToSlide = (index) => setCurrentIndex(index);

    return (
        <div className="bg-white p-4 rounded-lg shadow-md md:col-span-1 h-[22rem] relative flex items-center justify-center overflow-hidden">
            {/* Carousel */}
            <div id="carousel" className="relative w-full h-[90%] rounded-full bg-gray-100 overflow-hidden">
                {/* Navigation Buttons */}
                <button onClick={prevSlide} className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white px-3 py-1 rounded-full z-10">
                    ‹
                </button>
                <button onClick={nextSlide} className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white px-3 py-1 rounded-full z-10">
                    ›
                </button>

                {/* Image Display */}
                <div className="w-full h-[80%] ">
                    <img src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} className="w-full h-full  object-contain rounded-lg" />
                </div>
            </div>

            {/* Dots Indicator */}
            <div className="absolute bottom-3 flex justify-center space-x-2">
                {images.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => goToSlide(index)}
                        className={`h-3 w-3 rounded-full transition-all ${index === currentIndex ? "bg-[#13406C] w-6" : "bg-gray-600"}`}
                    ></button>
                ))}
            </div>
        </div>
    );
};

export default Carousel2;
