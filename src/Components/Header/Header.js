"use client";

import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const navigationMenu = [
    { title: "Home", to: "/" },
    { title: "About Us", to: "/about-us" },
    { title: "Guidance", to: "#" },
    { title: "Organization Registration", to: "#" },
    { title: "Application Submission", to: "#" },
    { title: "Regulatory Documents", to: "#" },
    { title: "Contact Us", to: "/contact-us" },
    { title: "FAQ", to: "/FAQ" },
];

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const location = useLocation();

    return (
        <nav className="w-full bg-white shadow p-4">
            <div className="container mx-auto flex justify-between items-center px-4 md:px-6">
                <div className="hidden md:flex space-x-8 space">
                    {navigationMenu.map((item, index) => (
                        <Link
                            key={index}
                            to={item.to}
                            className={`text-blue-900  font-semibold hover:underline flex items-center hover:no-underline ${location.pathname === item.to ? 'border-b-2 border-blue-900' : ''}`}
                        >
                            {item.title}
                        </Link>
                    ))}
                </div>
                <div className="md:hidden">
                    <button onClick={() => setMenuOpen(!menuOpen)} className="text-blue-900 text-xl font-semibold">
                        ☰
                    </button>
                </div>
            </div>
            {menuOpen && (
                <div className="md:hidden bg-white p-4 flex flex-col space-y-2">
                    {navigationMenu.map((item, index) => (
                        <Link
                            key={index}
                            to={item.to}
                            className={`block text-blue-900 font-semibold hover:no-underline ${location.pathname === item.to ? 'border-b-2 border-blue-900' : ''}`}
                        >
                            {item.title}
                        </Link>
                    ))}
                </div>
            )}
        </nav>
    );
};

export default Header;
