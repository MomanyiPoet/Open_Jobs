import React from 'react'
import openJobs2 from '../../assets/images/open-jobs-2.webp'
import openJobs3 from '../../assets/images/open-jobs-3.webp'

function Header() {
  return (
    <header>
        <div className="py-16">
            <div className="columns-2 flex flex-col md:flex-row items-center justify-start space-y-4 md:space-y-0">
                <div className="text-secondary font-extrabold bg-cream rounded-3xl py-8 px-12 shadow-2xl z-20">
                    <h1 className="text-6xl sm:text-4xl lg:text-7xl py-4">Bridging The <span className="text-primary">Gap</span></h1>
                    <hr className="bg-secondary h-0.5"/>
                    <h2 className="text-3xl md:text-3xl lg:text-5xl py-4">Opportunities Meet <span className="text-gold">Aspirations</span></h2>
                </div>
                <div className="-mx-4 z-10">
                    <img src={openJobs3} alt="Open Jobs Leading Image" className="w-96 md:w-80 xl:w-96 rounded-3xl shadow-2xl"/>
                </div>
            </div>

            <div className="max-w-2xl text-whity bg-gradient-to-r from-cyan-500 to-blue-500 rounded-3xl py-6 px-6 sm:px-12 shadow-2xl mt-4 xl:mt-0">
                <h1 className="text-3xl sm:text-4xl py-4 font-semibold">Welcome to <span className="italic text-whity">Open Jobs</span></h1>
                <p className="text-sm lg:text-md text-justify">
                    Established in 2024 with the vision of becoming a premier information hub dedicated to empowering 
                    Kenyan youths between the ages of 18 and 35. Our initiative is committed to bridging the 
                    gap between young individuals and valuable opportunities that can enhance their 
                    personal and professional growth.
                </p>
            </div>
        </div>
    </header>
  )
}

export default Header