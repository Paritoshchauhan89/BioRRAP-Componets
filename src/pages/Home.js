import React from 'react'
import Carousel4 from '../Components/Carousel4/Carousel4'
import Carousel3 from '../Components/Carousel3/Carousel3'
import Carousel1 from '../Components/Carousel1/Carousel1'
import Carousel2 from '../Components/Carousel2/Carousel2'
import Notification from '../Components/Notification/Notification'
import Layout from '../Layout/Layout'

const Home = () => {


  return (
    <Layout>
      <div className="contain-fluid bg-gray-100">
      
        <div className="container mx-auto p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <div className="sm:col-span-2 md:col-span-2">
            {/* Left Side Content */}
            <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              <div className="bg-white rounded-lg shadow-md h-[22rem]">
                <img
                  src="https://cdn.zeebiz.com/sites/default/files/2023/07/25/252912-pm-modi-reuetrs.jpg?im=FitAndFill=(1200,900)"
                  alt="PM Modi"
                  className="w-full h-full object-cover rounded-md"
                />
              </div>
              <Carousel1 />
              <Carousel2 />
            </section>

            <section className="mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              <Carousel3 />
              <Carousel4 />
            </section>
          </div>

          {/* Right Side Content */}
          <div className="md:col-span-1">
            <section className="grid gap-4">
              <div className="bg-[#2966A3] rounded-lg shadow-md h-[5rem] flex justify-center items-center">
                <img
                  src="/img/Biorraplogo.png"
                  alt="BioRRAP Logo"
                  className="w-[80px] h-[80px] sm:w-[150px] md:w-[200px] sm:h-[60px] md:h-[75px] object-contain rounded-md"
                />
              </div>
              <Notification />
            </section>
          </div>
        </div>
      </div>
      


    </Layout>
  )
}

export default Home
