import React from 'react';
import Footer from '../Components/Footer/Footer';
import Header from '../Components/Header/Header';
import PreHeader from '../Components/PreHeader/PreHeader';

const Layout = ({ children }) => {
      const [isPlaying, setIsPlaying] = React.useState(true);
    
      const toggleMarquee = () => {
        setIsPlaying(!isPlaying);
        document.querySelector('.animate-marquee').style.animationPlayState = isPlaying ? 'paused' : 'running';
      };
    return (
        <div className="min-h-screen flex flex-col">
        <PreHeader/>
            <Header />
            <div className="w-full flex p-2 border mt-2 mb-2 bg-[#13406C]">
                <div className="overflow-hidden whitespace-nowrap w-full">
                    <p className="animate-marquee text-white font-semibold text-sm md:text-base">
                        Breaking News: New policy updates announced! | Upcoming events and conferences! | Stay tuned for more updates!
                    </p>
                </div>
                <button className="bg-white text-gray-700 hover:text-gray-900 rounded" onClick={toggleMarquee}>
                    <img src={isPlaying ? "/icons/pause.svg" : "/icons/play.svg"} alt="Toggle Play/Pause" className="w-6 h-6 md:w-8 md:h-8" />
                </button>
            </div>
            <main className="flex-1 h-full">
                {children}
            </main>
        <Footer/>
        </div>
    );
};

export default Layout;