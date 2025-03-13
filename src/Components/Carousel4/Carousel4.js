import React, { useState } from "react";

const data = [
    { "img_url": "https://biorrap.gov.in/Default/img/rcgm.jpg", "name": "IBSC", "title": "Institutional Biosafety Committee (IBSC) of the organization" },
    { "img_url": "https://biorrap.gov.in/Default/img/rcgm.jpg", "name": "RCGM", "title": "Institutional Biosafety Committee (IBSC) of the organization" },
    { "img_url": "https://biorrap.gov.in/Default/img/geac.jpg", "name": "GEAC", "title": "Genetic Engineering Appraisal Committee (GEAC)" },
    { "img_url": "https://biorrap.gov.in/Default/img/nba.jpg", "name": "NBA", "title": "National Biodiversity Authority of India (NBA)" },
    { "img_url": "https://biorrap.gov.in/Default/img/noLogo.jpg", "name": "CPCSEA", "title": "Committee for the Purpose of Control and Supervision of Experiments on Animals (CPCSEA)" },
    { "img_url": "https://biorrap.gov.in/Default/img/noLogo.jpg", "name": "IAECs", "title": "Institutional Animal Ethics Committees (IAECs)" },
    { "img_url": "https://biorrap.gov.in/Default/img/noLogo.jpg", "name": "DAHD", "title": "Department of Animal Husbandry & Dairying (DAHD), Ministry of Agriculture & Farmer Welfare" },
    { "img_url": "https://biorrap.gov.in/Default/img/cdsco.jpg", "name": "CDSCO", "title": "Central Drugs Standard Control Organization (CDSCO)" },
];

const Carousel4 = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => setCurrentIndex((prev) => (prev + 2) % data.length);
    const prevSlide = () => setCurrentIndex((prev) => (prev - 2 + data.length) % data.length);

    return (
        <div className="w-[70%] mx-auto relative flex flex-col items-center">
            {/* Image Display in Grid */}
            <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4">
                {data.slice(currentIndex, currentIndex + 2).map((item, index) => (
                    <div key={index} className="flex flex-col items-center bg-gray-100 rounded-lg p-4 shadow-md w-full h-[22rem]">
                        <img src={item.img_url} alt={item.name} className="w-full h-36 object-contain rounded-md" />
                        <h2 className="text-black text-center mt-2 font-bold text-lg leading-tight">{item.name}</h2>
                        <p className="text-black text-center mt-2 text-md leading-relaxed">{item.title}</p>
                    </div>
                ))}
            </div>

            {/* Navigation Buttons */}
            <button onClick={prevSlide} className="absolute left-2 top-1/2 bg-gray-800 text-white px-3 py-1 rounded-full z-10 transform -translate-y-1/2">
                ‹
            </button>
            <button onClick={nextSlide} className="absolute right-2 top-1/2 bg-gray-800 text-white px-3 py-1 rounded-full z-10 transform -translate-y-1/2">
                ›
            </button>
        </div>
    );
};


export default Carousel4;
