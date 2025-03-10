"use client";

import React, { useState } from "react";
import AccessibilityModal from "../AccessibilityModal/AccessibilityModal";
import { applyTheme } from "../../utils/Thems"; // Import theme handling functions

const PreHeader = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [theme, setTheme] = useState("normal"); // Default theme

    const openModal = () => setIsModalOpen(!isModalOpen);
    const closeModal = () => setIsModalOpen(false);

    // Handle theme change
    const handleThemeChange = (newTheme) => {
        setTheme(newTheme);
        applyTheme(newTheme);
    };

    return (
        <div className={`bg-white w-full border ${theme} relative`}>
            <div className="container mx-auto px-8 flex justify-between items-center">
                <div className="flex items-center space-x-2">
                    <img src="/img/Govlogo.png" alt="Government Logo" className="w-12 h-16" />
                    <div className="text-gray-900 text-sm">
                        <p className="font-semibold">Department of Biotechnology</p>
                        <p className="font-bold">Ministry of Science and Technology</p>
                    </div>
                </div>

                {/* Accessibility Icon */}
                <div className="flex items-center space-x-4 relative">
                    <img src="/icons/skipcontent.svg" alt="Skip_to_Content" width={30} />
                    <img src="/icons/language.svg" alt="Language" width={30} />
                    <button onClick={openModal} className="relative">
                        <img src="/icons/accessability.svg" alt="Accessibility" width={30} />
                    </button>

                    {/* Accessibility Modal - Shows Below Icon */}
                    <div className="absolute top-full right-0 mt-2">
                        <AccessibilityModal isOpen={isModalOpen} onClose={closeModal} setTheme={handleThemeChange} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PreHeader;
