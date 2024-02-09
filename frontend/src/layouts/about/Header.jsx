import React from 'react'
import openJobs2 from '../../assets/images/open-jobs-2.webp'

function Header() {
  return (
    <header>
        <div className="py-16">
            <div className="flex flex-col lg:flex-row justify-center items-center space-y-4 lg:space-y-0">
                <div className="flex flex-col max-w-xl text-cream bg-primary rounded-3xl py-8 px-6 md:px-16 shadow-2xl z-20">
                    <h1 className="text-3xl sm:text-4xl py-4 font-semibold">Welcome to <span className="italic text-whity">Open Jobs</span></h1>
                    <p className="text-sm lg:text-md text-justify">
                        Established in 2024 with the vision of becoming a premier information hub dedicated to empowering 
                        Kenyan youths between the ages of 18 and 35. Our initiative is committed to bridging the 
                        gap between young individuals and valuable opportunities that can enhance their 
                        personal and professional growth.
                    </p>
                </div>
                <div className="lg:-mx-8 z-10">
                    <img src={openJobs2} alt="Open Jobs Leading Image" className="w-72 sm:w-96 rounded-3xl shadow-2xl" />
                </div>
            </div>
        </div>
    </header>
  )
}

export default Header