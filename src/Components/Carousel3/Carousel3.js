import React, { useState, useEffect } from "react";

const Carousel3 = () => {
    const images = [
        "/img/1.png",
        "/img/2.png",
        "/img/3.png",
        "/img/4.png",
        "/img/5.png",
        "/img/6.png",
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const [isPlaying, setIsPlaying] = useState(true);
    const intervalTime = 3000;

    useEffect(() => {
        if (isPlaying) {
            const autoPlay = setInterval(() => {
                setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
            }, intervalTime);
            return () => clearInterval(autoPlay);
        }
    }, [isPlaying, images.length]);

    const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % images.length);
    const prevSlide = () => setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    const goToSlide = (index) => setCurrentIndex(index);

    return (
        <div className="bg-white rounded-lg shadow-md md:col-span-2 h-[20rem] relative flex items-center justify-center overflow-hidden">
            <div className="w-full h-full">
                <img
                    src={images[currentIndex]}
                    alt={`Image ${currentIndex + 1}`}
                    className="w-full h-full object-fit rounded-md"
                />
            </div>

            {/* Navigation Buttons */}
            <button
                onClick={prevSlide}
                className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white px-3 py-1 rounded-full z-10"
            >
                ‹
            </button>
            <button
                onClick={nextSlide}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white px-3 py-1 rounded-full z-10"
            >
                ›
            </button>

            {/* Play/Pause Button */}
            <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="absolute bottom-4 right-4 bg-gray-800 text-white px-3 py-2 rounded-md text-sm"
            >
                {isPlaying ? "Pause" : "Play"}
            </button>

            {/* Dots Indicator */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {images.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => goToSlide(index)}
                        className={`h-3 w-3 rounded-full transition-all ${index === currentIndex ? "bg-[#13406C] w-6" : "bg-gray-300"}`}
                    ></button>
                ))}
            </div>
        </div>
    );
};

export default Carousel3;
