import React from 'react';
import Carousel3 from '../Components/Carousel3/Carousel3';
import Notification from '../Components/Notification/Notification';
import Layout from '../Layout/Layout';
import Carousel5 from '../Components/Carousel5/Carousel5';
import { useState, useRef } from "react";


const Home = () => {
  const [isPlaying, setIsPlaying] = useState(true);
  const videoRef = useRef(null);

  const togglePlayPause = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
        setIsPlaying(true);
      } else {
        videoRef.current.pause();
        setIsPlaying(false);
      }
    }
  };
  const data = [
    {
      "img_url": "/img/Govlogo.png",
      "name": "IBSC",
    },
    {
      "img_url": "https://biorrap.gov.in/Default/img/rcgm.jpg",
      "name": "RCGM",
    },
    {
      "img_url": "https://biorrap.gov.in/Default/img/geac.jpg",
      "name": "GEAC",
    },
    {
      "img_url": "/img/Govlogo.png",
      "name": "CPCSEA",
    },
    {
      "img_url": "https://biorrap.gov.in/Default/img/nba.jpg",
      "name": "NBA",
    },
    
    {
      "img_url": "/img/Govlogo.png",
      "name": "IAECs",
    },
   
    {
      "img_url": "/img/Govlogo.png",
      "name": "DAHD",
    },
    {
      "img_url": "https://biorrap.gov.in/Default/img/cdsco.jpg",
      "name": "CDSCO",
    },
    {
      "img_url": "/img/Govlogo.png",
      "name": "IHEC",
    }, 
    {
      "img_url": "http://biorrap.gov.in/Default/img/icmr.jpg",
      "name": "HMSC",
    },
  ];
  return (
    <Layout>
      <div className="bg-gray-100 w-full">
        <div className="container mx-auto p-4 grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Left Side Content */}
          <div className="md:col-span-2">
            <section className="mb-4 grid gap-4">
              <Carousel3 />
            </section>
            <section className="flex flex-col md:flex-row gap-4">
              {/* Image Section */}
              <div className="bg-white rounded-lg shadow-md h-[22rem] w-full md:w-[20rem]">
                <img
                  src="https://cdn.zeebiz.com/sites/default/files/2023/07/25/252912-pm-modi-reuetrs.jpg?im=FitAndFill=(1200,900)"
                  alt="PM Modi"
                  className="w-full h-full object-cover rounded-md"
                />
              </div>

              {/* Quote Section */}
              <div className="w-full md:w-3/4 bg-white p-6 rounded-lg shadow-md flex flex-col justify-center">
                <h2 className="text-xl font-bold text-gray-800">Inspirational Words</h2>
                <p className="text-lg italic text-gray-600 mt-2">
                  "For the first time, the World Audio Visual Entertainment Summit (WAVES) is going to be organized in our country.
                  I would urge the entire entertainment and creative industry of India - whether you are a young creator or an
                  established artist, associated with Bollywood or regional cinema, a professional from the TV industry, an expert in
                  animation, gaming, or an innovator in entertainment technology - to be a part of WAVES."
                </p>
                <p className="mt-4 text-right font-semibold text-gray-700">- Narendra Modi</p>
              </div>
            </section>

          </div>

          <div className="md:col-span-1">
            <section className="grid gap-4">
              <div className="bg-[#2966A3] rounded-lg shadow-md h-[5rem] flex items-center px-6">
                {/* Left Side: Logo */}
                <div className="flex items-center">
                  <img src="/img/Biorraplogo.png" alt="BioRRAP" width={"auto"} height={100}  />
                </div>

                {/* Right Side: Buttons */}
                <div className="ml-auto flex gap-4">
                  <button className="text-[#2966A3] bg-white px-6 py-2 rounded-lg font-semibold min-w-[120px] hover:bg-gray-100 transition">
                    Login
                  </button>
                  <button className="text-[#2966A3] bg-white px-6 py-2 rounded-lg font-semibold min-w-[120px] hover:bg-gray-100 transition">
                    Register
                  </button>
                </div>
              </div>
              <Notification/>
            </section>
          </div>
        </div>
      </div>

    
      <div className="bg-gray-100  py-4">
         <Carousel5/>

      </div>
      <div className="bg-gray-100 py-4">
        <div className="max-w-7xl shadow-md rounded-lg bg-white p-6 sm:p-8 md:p-10 mx-auto text-center md:text-left">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold">BioRRAP</h2>

          <p className="text-sm sm:text-base text-justify mt-2 mb-2">
            The Department of Biotechnology has developed Biological Research Regulatory Approval Portal (BioRRAP) to track the regulatory approvals for a research proposal on a single portal. This will provide more credibility and recognition to such biological researches.
          </p>

          <p className="text-sm sm:text-base text-justify mt-2 mb-2">
            BioRRAP provides a single route to direct the applicant to regulatory agencies providing requisite approval relevant to the biological research. Based on a succinct set of questions responded in affirmative by the applicant, the list of regulatory agencies from whom approvals may be required for biological research, is determined and attached to the unique BioRRAP ID generated on the submission.
          </p>

          <p className="text-sm sm:text-base text-justify mt-2 mb-2">
            This portal will strengthen interdepartmental synergies and increase efficacy in functioning of agencies regulating various aspect of biological research. This will streamline the regulatory process and affirm ease of doing biological science.
          </p>
          <div className="relative mx-auto mt-4 mb-4 w-80 max-w-xs sm:max-w-md">
            {/* Video Element */}
            <video
              ref={videoRef}
              src="/video/biorrap_intro.mov"
              className="w-full rounded-lg shadow-md"
              // controls
              autoPlay
              muted
            />

            {/* Play/Pause Button */}
            <button
              onClick={togglePlayPause}
              className="absolute inset-0 flex items-center justify-center w-full h-full bg-black bg-opacity-10 hover:bg-opacity-30 transition-opacity duration-200 rounded-lg border-0"
            >
              {isPlaying ? (
                <i className="bi bi-pause-fill text-black display-4 text-lg rounded-lg bg-gray-300 p-2"></i> // Bootstrap Pause Icon
              ) : (
                  <i className="bi bi-play-fill text-black display-4 text-lg rounded-lg bg-gray-300 p-2"></i> // Bootstrap Play Icon
              )}
            </button>
          </div>


        

      
        </div>


      </div>


    </Layout>
  );
};

export default Home;
