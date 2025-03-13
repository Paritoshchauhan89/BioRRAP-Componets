import { useState, useEffect } from "react";

const Carousel5 = () => {
    const slides = [
        {
            "img_url": "/img/Govlogo.png",
            "name": "IBSC",
            "desc": "IBSCs are authorized to consider and approve the applications for exchange, import or export of the regulated biological materials up to prescribed quantities and risk groups as specified in Table A of “Revised Simplified Procedure/Guidelines on Import, Export and Exchange of GE organisms and products therpeof for R&D purpose, 2020” (https://ibkp.dbtindia.gov.in/Content/Rules) for Biopharma Drug Development R&D as well as for R&D other than Biopharma Drug Development",
            "title": "Institutional Biosafety Committee (IBSC) of the organization",
            "link": "",
        },
        {
            "img_url": "https://biorrap.gov.in/Default/img/rcgm.jpg",
            "name": "RCGM",
            "desc": "Import, export, and exchange of Regulated items more than the specified quantity, all materials belonging to RG3 and RG4 or not covered in the Annexure 1 of “Revised Simplified Procedure/Guidelines on Import, Export and Exchange of GE organisms and products thereof for R&D purpose, 2020” shall require prior approval of IBSC followed by RCGM.",
            "title": "Institutional Biosafety Committee (IBSC) of the organization",
            "link": "",
        },
        {
            "img_url": "https://biorrap.gov.in/Default/img/geac.jpg",
            "name": "GEAC",
            "desc": "GEAC is the apex body constituted by the MoEF&CC and is responsible for approval of proposals relating to release of HMOs/GEOs/ LMOs and products thereof into the environment including experimental field trials.",
            "title": "Genetic Engineering Appraisal Committee (GEAC)",
            "link": "",
        },
        {
            "img_url": "/img/Govlogo.png",
            "name": "CPCSEA",
            "desc": "For approval of experimentation on large animals, the case is required to be forwarded to CPCSEA in prescribed manner with recommendation of IAEC. CPCSEA is a statutory Committee of Department of Animal Husbandry and Dairying (DAHD), Ministry of Fisheries, Animal Husbandry and Dairying (MoFAH&D).",
            "title": "Committee for the Purpose of Control and Supervision of Experiments on Animals (CPCSEA)",
            "link": "",
        },
        {
            "img_url": "https://biorrap.gov.in/Default/img/nba.jpg",
            "name": "NBA",
            "desc": "For export of biological material of Indian origin, permit of National Biodiversity Authority of India is also required in addition to IBSC/RCGM approval mentioned at para 1 and 2 above.",
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
            "desc": "DAHD, Ministry of Agriculture & Farmer Welfare issues No objection certificate for grant of permission to undertake Field trial for a new Veterinary biological.",
            "title": "Department of Animal Husbandry & Dairying (DAHD), Ministry of Agriculture & Farmer Welfare",
            "link": "",
        },
        {
            "img_url": "https://biorrap.gov.in/Default/img/cdsco.jpg",
            "name": "CDSCO",
            "desc": "The application for field trial along with covering letter and trial protocol with all the supporting documents shall be submitted to CDSCO in hard copy as well as in soft copy to be approved by CDSCO. The CDSCO is obliged to consult with the Department of Animal Husbandry, Dairying & Fisheries (DADF), Ministry of Agriculture and Farmers Welfare (MOA) prior to reaching a decision on an application for a trial.",
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
            "desc": "The Health Ministry’s Screening Committee (HMSC) operated by Department of Health Research/ICMR has been recently reconstituted by Ministry of Health & FW, GoI as per the directive of Cab Sec. HMSC is chaired by the Secretary, Department of Health Research (DHR), MOH&FW, GoI and Vice- Chairperson of the Committee is Secretary Department of Biotechnology(DBT). It has representatives from Department of Science and Technology; Ministry of Health & F.W.:, Directorate General of Health Services; Ministry of AYUSH; Ministry of Home Affairs; Ministry of External Affairs; Department of Economic Affairs, Ministry of Finance; Ministry of Defence; Central Drugs Standard Control Organization; Department of Agricultural Research and Education, Ministry of Agriculture; Ministry of Environment, Forest and Climate Change; Ministry of Fisheries, Animal Husbandry and Dairying; The Chair of the Review Committee for Genetic Manipulation; Directorate General of Foreign Trade and four independent subject experts as a standing expert group from governmental/non-governmental organizations/autonomous institutions representing different disciplines for expert opinion.",
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
        <div className="max-w-7xl mx-auto relative">
            <div className="overflow-hidden w-full relative">
                <div className="flex transition-transform duration-500 ease-in-out gap-4">
                    {slides.slice(currentIndex, currentIndex + slidesToShow).map((slide, index) => (
                        <div
                            key={index}
                            className="w-full sm:w-1/2 bg-white rounded-lg shadow-md h-[22rem] p-4 relative"
                        >
                            <div className="flex items-center space-x-4">
                                <h2 className="text-lg sm:text-xl font-semibold">{slide.title}</h2>
                                <img src={slide.img_url} alt={slide.name} className="w-50 h-16 object-contain" />
                            </div>
                            <hr className="my-4" />
                            <p className="text-right">{slide.name}</p>
                            <p className="mt-4 text-gray-700 text-justify">{slide.desc}</p>
                            <a href="/">
                                <button className="absolute bottom-4 right-4 text-white bg-[#2966A3] p-2 rounded-lg min-w-[100px]">
                                    Read More
                                </button>
                            </a>
                        </div>
                    ))}
                </div>
            </div>

            {/* Navigation Buttons */}
            <button
                onClick={prevSlide}
                className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-gray-300 p-2 rounded-full shadow-md"
            >
                ◀
            </button>
            <button
                onClick={nextSlide}
                className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-gray-300 p-2 rounded-full shadow-md"
            >
                ▶
            </button>
        </div>
    );
};

export default Carousel5;
