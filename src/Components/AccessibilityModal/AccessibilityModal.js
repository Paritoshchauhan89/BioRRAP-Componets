import React, { useState } from "react";
import { applyTheme} from "../../utils/Thems";

const AccessibilityModal = ({ isOpen, onClose }) => {
    const [activeTheme, setActiveTheme] = useState(null);

    if (!isOpen) return null;

    const handleThemeChange = (theme) => {
        if (activeTheme === theme) {
            setActiveTheme(null);
            applyTheme("default"); // Reset theme
        } else {
            setActiveTheme(theme);
            applyTheme(theme);
            if (theme === "screen-reader") screenReader();
        }
    };

    return (
        <div className="w-[400px] absolute right-0 top-full mt-2 bg-white p-4 rounded-lg shadow-lg border border-gray-300 z-50">
            <h2 className="text-lg font-bold mb-3">Accessibility Tools</h2>

            {/* Color Contrast */}
            <div className="mb-4 ">
                <h3 className="font-semibold">Color Contrast</h3>
                <div className="grid grid-cols-3 gap-2 mt-2">
                    <button className="border p-2 rounded text-center" onClick={() => applyTheme("high-contrast")}>
                        <img src="/icons/HighContrast.svg" alt="High Contrast" width={30} className="mx-auto" />
                        High Contrast
                    </button>
                    <button className="border p-2 rounded text-center" onClick={() => applyTheme("normal")}>
                        <img src="/icons/Normalcontrast.svg" alt="Normal Contrast" width={30} className="mx-auto" />
                        Normal Contrast
                    </button>
                    <button className="border p-2 rounded text-center" onClick={() => applyTheme("highlight-links")}>
                        <img src="/icons/HighlightLinks.svg" alt="Highlight Links" width={30} className="mx-auto" />
                        Highlight Links
                    </button>
                    <button className="border p-2 rounded text-center" onClick={() => applyTheme("highlight-links")}>
                        <img src="/icons/Inverted.svg" alt="Inverted" width={30} className="mx-auto" />
                        Invert
                    </button>
                    <button className="border p-2 rounded text-center" onClick={() => applyTheme("highlight-links")}>
                        <img src="/icons/Saturation.svg" alt="Saturation" width={30} className="mx-auto" />
                        Saturation
                    </button>
                    <button className="border p-2 rounded text-center" onClick={() => applyTheme("highlight-links")}>
                        <img src="/icons/ZoomIn.svg" alt="Zoom IN" width={30} className="mx-auto" />
                        Zoom IN 
                    </button>
                    <button className="border p-2 rounded text-center" onClick={() => applyTheme("highlight-links")}>
                        <img src="/icons/ZoomOut.svg" alt="Zoom OUT" width={30} className="mx-auto" />
                        Zoom OUT
                    </button>
                </div>
                
            </div>

            {/* Text Size */}
            <div className="mb-4">
                <h3 className="font-semibold">Text Size</h3>
                <div className="grid grid-cols-3 gap-2 mt-2">
                    <button className="border p-2 rounded" onClick={() => applyTheme("increase-text")}>
                        <img src="/icons/TextIncrease.svg" alt="A+" width={30} className="mx-auto" />

                        Font Size Increase
                    </button>
                    <button className="border p-2 rounded" onClick={() => applyTheme("decrease-text")}>
                        <img src="/icons/TextDecrease.svg" alt="A-" width={30} className="mx-auto" />
                        Font Size Decrease
                        
                    </button>
                    <button className="border p-2 rounded" onClick={() => applyTheme("normal-text")}>
                        
                        Normal Font
                    </button>
                </div>
            </div>

            {/* Other Options */}
            <div>
                <h3 className="font-semibold">Others</h3>
                <div className="grid grid-cols-2 gap-2 mt-2">
                    <button className="border p-2 rounded" onClick={() => applyTheme("hide-images")}>
                        <img src="/icons/HideImage.svg" alt="A-" width={30}  className="mx-auto"/>

                        Hide Images
                    </button>
                    <button className="border p-2 rounded" onClick={() => applyTheme("big-cursor")}>
                        <img src="/icons/BigCursor.svg" alt="A-" width={30} className="mx-auto" />

                        Big Cursor
                    </button>
                    <button className="border p-2 rounded" onClick={() => applyTheme("big-cursor")}>
                        <img src="/icons/ScreenReader.svg" alt="Screen Reader" width={30} className="mx-auto" />

                        Screen Reader
                    </button>
                    <button className="border p-2 rounded" onClick={() => applyTheme("big-cursor")}>
                        <img src="/icons/DarkMode.svg" alt="Dark Mode" width={30} className="mx-auto" />

                        Dark Mode
                    </button>
                    <button className="border p-2 rounded" onClick={() => applyTheme("big-cursor")}>
                        <img src="/icons/LightMode.svg" alt="Light Mode" width={30} className="mx-auto" />

                        Light Mode
                    </button>
                </div>
            </div>

         
        </div>
    );
};

export default AccessibilityModal;


export const screenReader = () => {
    const speech = new SpeechSynthesisUtterance();
    speech.text = "Screen reader is now activated.";
    window.speechSynthesis.speak(speech);
};
