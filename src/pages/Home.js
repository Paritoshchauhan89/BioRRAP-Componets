import React from 'react';
import Carousel4 from '../Components/Carousel4/Carousel4';
import Carousel3 from '../Components/Carousel3/Carousel3';
import Carousel1 from '../Components/Carousel1/Carousel1';
import Carousel2 from '../Components/Carousel2/Carousel2';
import Notification from '../Components/Notification/Notification';
import Layout from '../Layout/Layout';
import Carousel5 from '../Components/Carousel5/Carousel5';

const Home = () => {
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
            <section className='flex flex-col md:flex-row gap-4'>
              <div className="bg-white rounded-lg shadow-md h-[22rem] w-full md:w-[20rem]">
                <img
                  src="https://cdn.zeebiz.com/sites/default/files/2023/07/25/252912-pm-modi-reuetrs.jpg?im=FitAndFill=(1200,900)"
                  alt="PM Modi"
                  className="w-full h-full object-cover rounded-md"
                />
              </div>
              <Carousel4 />
            </section>
          </div>

          {/* Right Side Content */}
          <div className="md:col-span-1">
            <section className="grid gap-4">
              <div className="bg-[#2966A3] rounded-lg shadow-md h-[5rem] flex justify-center items-center">
                <div className="flex justify-center items-center gap-4 w-[50%]">
                  <button className="text-[#2966A3] bg-white p-2 rounded-lg flex-1 min-w-[120px]">Login</button>
                  <button className="text-[#2966A3] bg-white p-2 rounded-lg flex-1 min-w-[120px]">Register</button>
                </div>
              </div>
              <Notification />
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

          {/* Desktop Grid View */}
          <div className="hidden md:flex flex-wrap justify-center mt-4 mb-4 gap-6 mx-auto max-w-6xl">
            {data.map((item, index) => (
              <div key={index} className="flex flex-col items-center w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/6">
                <img src={item.img_url} alt={item.name} className="w-[60px] h-[60px] sm:w-[80px] sm:h-[80px] object-contain" />
                <p className="text-center text-sm mt-2 font-medium">{item.name}</p>
              </div>
            ))}
          </div>

          {/* Mobile Scrollable View */}
          <div className="md:hidden overflow-x-auto scrollbar-hide mt-4 mb-4">
            <div className="flex space-x-6 w-max px-4">
              {data.map((item, index) => (
                <div key={index} className="flex flex-col items-center min-w-[100px]">
                  <img src={item.img_url} alt={item.name} className="w-[60px] h-[60px] sm:w-[80px] sm:h-[80px] object-contain" />
                  <p className="text-center text-sm mt-2 font-medium">{item.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>


      </div>


    </Layout>
  );
};

export default Home;
