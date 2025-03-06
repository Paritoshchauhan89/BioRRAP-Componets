import React from 'react';

const DynamicBreadcrumbs = () => {
    return (
        <section className="relative">
            {/* Banner Section */}
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
                                <a href="#" className="text-white font-semibold hover:underline">Connect</a>
                            </li>
                        </ol>
                    </nav>
                    <h1 className="text-2xl md:text-3xl font-bold text-center md:text-left">Directory</h1>
                </div>
            </div>

            {/* Navigation Tabs */}
            <div className="bg-[#0B2641] mb-10 text-white py-6 md:py-8 px-4 md:px-8 rounded-lg w-full max-w-screen-xl mx-auto mt-[-30px] md:mt-[-60px] relative z-20">
                <ul className="flex flex-wrap justify-center md:justify-start gap-3 md:gap-4 text-sm">
                    <li><a href="#" className="px-4 py-2 rounded font-bold text-base md:text-lg block text-center">
                        Contact Us
                    </a></li>
                    <li><a href="#" className="px-4 py-2 rounded font-bold text-base md:text-lg block text-center">Directory</a></li>
                    <li><a href="#" className="px-4 py-2 rounded text-base md:text-lg block text-center">RTI</a></li>
                    <li><a href="#" className="px-4 py-2 rounded text-base md:text-lg block text-center">Grievance Redressal</a></li>
                    <li><a href="#" className="px-4 py-2 rounded text-base md:text-lg block text-center">Public Consultation</a></li>
                    <li><a href="#" className="px-4 py-2 rounded text-base md:text-lg block text-center">Parliament Questions</a></li>
                    <li><a href="#" className="px-4 py-2 rounded text-base md:text-lg block text-center">Visitor's Pass</a></li>
                </ul>
            </div>
        </section>
    );
};

export default DynamicBreadcrumbs;
