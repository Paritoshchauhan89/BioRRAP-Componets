import { useState, useEffect } from "react";

const Carousel5 = () => {
    const slides = [
        {
            "img_url": "/img/Govlogo.png",
            "name": "IBSC",
            "desc": "IBSCs are authorized to consider and approve the applications for exchange. ",
            "title": "Institutional Biosafety Committee (IBSC) of the organization",
            "link": "",
        },
        {
            "img_url": "/img/rcgm.png",
            "name": "RCGM",
            "desc": "Import, export, and exchange of Regulated items more than the specified quantity.",
            "title": "Institutional Biosafety Committee (IBSC) of the organization",
            "link": "",
        },
        {
            "img_url": "https://biorrap.gov.in/Default/img/geac.jpg",
            "name": "GEAC",
            "desc": "GEAC is the apex body constituted by the MoEF&CC and is responsible for approval of proposals relating to release.",
            "title": "Genetic Engineering Appraisal Committee (GEAC)",
            "link": "",
        },
        {
            "img_url": "/img/Govlogo.png",
            "name": "CPCSEA",
            "desc": "For approval of experimentation on large animals, the case is required to be forwarded to CPCSEA in prescribed manner with recommendation of IAEC.",
            "title": "Committee for the Purpose of Control and Supervision of Experiments on Animals (CPCSEA)",
            "link": "",
        },
        {
            "img_url": "https://biorrap.gov.in/Default/img/nba.jpg",
            "name": "NBA",
            "desc": "For export of biological material of Indian origin.",
            "title": "National Biodiversity Authority of India (NBA)",
            "link": "",
        },

        {
            "img_url": "/img/Govlogo.png",
            "name": "IAECs",
            "desc": "IAEC reviews and approve all types of protocols for research involving small animal experimentation before the start of the study.",
            "title": "Institutional Animal Ethics Committees (IAECs)",
            "link": "",
        },

        {
            "img_url": "/img/Govlogo.png",
            "name": "DAHD",
            "desc": "DAHD, Ministry of Agriculture & Farmer Welfare issues No objection.",
            "title": "Department of Animal Husbandry & Dairying (DAHD), Ministry of Agriculture & Farmer Welfare",
            "link": "",
        },
        {
            "img_url": "/img/cdsco.png",
            "name": "CDSCO",
            "desc": "The application for field trial along with covering letter and trial protocol.",
            "title": "Central Drugs Standard Control Organization (CDSCO)",
            "link": "",
        },
        {
            "img_url": "/img/Govlogo.png",
            "name": "IHEC",
            "desc": "All Biomedical Research involving Human Participants are to be approved by IHECs.",
            "title": "Institutional Human Ethics Committees (IHECs)",
            "link": "",
        },
        {
            "img_url": "http://biorrap.gov.in/Default/img/icmr.jpg",
            "name": "HMSC",
            "desc": "The Health Ministry’s Screening Committee (HMSC) operated by Department of Health.",
            "title": " Health Ministry’s Screening Committee (HMSC)",
            "link": "",
        },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const [slidesToShow, setSlidesToShow] = useState(2); // Default: 2 slides for desktop

    useEffect(() => {
        const updateSlidesToShow = () => {
            setSlidesToShow(window.innerWidth < 768 ? 1 : 2); // Show 1 slide on mobile, 2 on desktop
        };

        updateSlidesToShow(); // Initial check
        window.addEventListener("resize", updateSlidesToShow); // Listen for resize
        return () => window.removeEventListener("resize", updateSlidesToShow); // Cleanup
    }, []);

    const totalSlides = slides.length;
    const totalPages = Math.ceil(totalSlides / slidesToShow);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + slidesToShow) % totalSlides);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex - slidesToShow < 0 ? totalSlides - slidesToShow : prevIndex - slidesToShow
        );
    };

    return (
        <div className="max-w-7xl mx-auto relative ">
            <div className="overflow-hidden w-full relative">
                <div className="flex transition-transform duration-500 ease-in-out gap-4">
                    {slides.slice(currentIndex, currentIndex + slidesToShow).map((slide, index) => (
                        <div
                            key={index}
                            className="w-full sm:w-1/2 bg-white rounded-lg shadow-md h-[22rem] p-4 relative"
                        >
                            <div className="flex items-center space-x-4 mx-auto justify-between">
                                <h2 className="text-lg sm:text-xl font-semibold">{slide.title}</h2>
                                <img src={slide.img_url} alt={slide.name} className="w-50 h-16 object-contain" />
                            </div>
                            <hr className="my-4" />
                            <p className="text-right">{slide.name}</p>
                            <p className="mt-4 text-gray-700 text-justify">{slide.desc}</p>
                            <a href="/">
                                <button className="absolute bottom-4 right-4 text-[#1e4f80]  px-4 py-2 rounded-lg min-w-[100px]  transition">
                                    <i className="bi bi-box-arrow-up-right"></i>
                                </button>
                            </a>
                        </div>
                    ))}
                </div>
            </div>

            {/* Navigation Buttons (Responsive) */}
            <button
                onClick={prevSlide}
                className="absolute top-1/2 left-2 md:left-4 transform -translate-y-1/2 bg-gray-300 p-3 rounded-full shadow-md hover:bg-gray-400 transition md:ml-[-60px]"
            >
                <i className="bi bi-caret-left"></i>
            </button>
            <button
                onClick={nextSlide}
                className="absolute top-1/2 right-2 md:right-4 transform -translate-y-1/2 bg-gray-300 p-3 rounded-full shadow-md hover:bg-gray-400 transition md:mr-[-60px]"
            >
                <i className="bi bi-caret-right"></i>
            </button>

        </div>


    );
};

export default Carousel5;
