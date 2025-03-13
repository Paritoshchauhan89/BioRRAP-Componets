import React from 'react';
import { Link } from 'react-router-dom';

const DynamicBreadcrumbs = () => {
    return (
        <section className="relative">
            <div
                className="Innerbaner relative w-full h-48 md:h-64 bg-cover bg-center"
                style={{ backgroundImage: 'url("/img/BreadCrumbs.png")' }}
            >
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-[#0B2641] to-transparent" />

                <div className="container max-w-screen-xs mx-auto relative z-10 text-white p-4 md:p-8 pt-12 md:pt-20">
                    <nav aria-label="Breadcrumb" className="text-sm md:text-lg mb-2 mx-auto">
                        <ol className="flex flex-wrap space-x-2 justify-center md:justify-start">
                            <li className="breadcrumb-item">
                                <a href="#" className="text-gray-300 hover:text-white">Home</a>
                            </li>
                            <span>/</span>
                            <li className="breadcrumb-item">
                                <a href="#" className="text-white font-semibold hover:underline">About us</a>
                            </li>
                        </ol>
                    </nav>
                    <h1 className="text-2xl md:text-3xl font-bold text-center md:text-left">About US</h1>
                </div>
            </div>

         
        </section>
    );
};

export default DynamicBreadcrumbs;
