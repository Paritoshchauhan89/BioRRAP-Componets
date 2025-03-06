import React, { useState, useEffect } from "react";

const data = [
    {
        "img_url": "https://biorrap.gov.in/Default/img/rcgm.jpg",
        "name": "IBSC",
        "title": "Institutional Biosafety Committee (IBSC) of the organization"
    },
    {
        "img_url": "https://biorrap.gov.in/Default/img/rcgm.jpg",
        "name": "RCGM",
        "title": "Institutional Biosafety Committee (IBSC) of the organization"
    },
    {
        "img_url": "https://biorrap.gov.in/Default/img/geac.jpg",
        "name": "GEAC",
        "title": "Genetic Engineering Appraisal Committee (GEAC)"
    },
    {
        "img_url": "https://biorrap.gov.in/Default/img/nba.jpg",
        "name": "NBA",
        "title": "National Biodiversity Authority of India (NBA)"
    },
    {
        "img_url": "https://biorrap.gov.in/Default/img/noLogo.jpg",
        "name": "CPCSEA",
        "title": "Committee for the Purpose of Control and Supervision of Experiments on Animals (CPCSEA)"
    },
    {
        "img_url": "https://biorrap.gov.in/Default/img/noLogo.jpg",
        "name": "IAECs",
        "title": "Institutional Animal Ethics Committees (IAECs)"
    },
    {
        "img_url": "https://biorrap.gov.in/Default/img/noLogo.jpg",
        "name": "DAHD",
        "title": "Department of Animal Husbandry & Dairying (DAHD), Ministry of Agriculture & Farmer Welfare"
    },
    {
        "img_url": "https://biorrap.gov.in/Default/img/cdsco.jpg",
        "name": "CDSCO",
        "title": "Central Drugs Standard Control Organization (CDSCO)"
    },
    {
        "img_url": "https://biorrap.gov.in/Default/img/noLogo.jpg",
        "name": "IHEC",
        "title": "Institutional Human Ethics Committees (IHECs)"
    },
];

const Carousel4 = () => {
    const [currentIndex, setCurrentIndex] = useState(0);



    const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % data.length);
    const prevSlide = () => setCurrentIndex((prev) => (prev - 1 + data.length) % data.length);

    return (
        <div className="bg-white p-4 rounded-lg shadow-md md:col-span-1 h-[20rem] relative flex flex-col items-center justify-center">
            {/* Image Display */}
            <div className="relative w-full h-[80%] flex items-center justify-center">
                <button onClick={prevSlide} className="absolute left-2 bg-gray-800 text-white px-3 py-1 rounded-full z-10">
                    ‹
                </button>
                <img src={data[currentIndex].img_url} alt={data[currentIndex].name} className="w-full h-full object-contain rounded-md" />
                <button onClick={nextSlide} className="absolute right-2 bg-gray-800 text-white px-3 py-1 rounded-full z-10">
                    ›
                </button>
            </div>
            <div className="bg-[#13406C] rounded">
            {/* Name Display */}
              <h2 className="text-white text-center mt-2 font-bold text-lg">{data[currentIndex].name}</h2>
            <p className="text-white text-center mt-2 font-semibold text-lg">{data[currentIndex].title}</p>
        </div>

            {/* Dots Indicator */}
            <div className="flex justify-center mt-2 space-x-2">
                {data.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentIndex(index)}
                        className={`h-3 w-3 rounded-full transition-all ${index === currentIndex ? "bg-[#13406C] w-6" : "bg-gray-400"}`}
                    ></button>
                ))}
            </div>

      
        </div>
    );
};

export default Carousel4;