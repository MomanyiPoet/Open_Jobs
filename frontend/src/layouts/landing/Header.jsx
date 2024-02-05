import React from 'react'
import openJobs3 from '../../assets/images/open-jobs-3.jpeg'

function Header() {
  return (
    <header>
            <div className="py-16">
                <div className="columns-2 flex flex-col md:flex-row items-center justify-start space-y-4 md:space-y-0">
                    <div className="text-secondary font-extrabold bg-cream rounded-3xl py-8 px-12 shadow-2xl z-20">
                        <h1 className="text-6xl sm:text-4xl lg:text-7xl py-4">Bridging The <span className="text-primary">Gap</span></h1>
                        <hr className="bg-secondary h-0.5" />
                        <h2 className="text-3xl md:text-3xl lg:text-5xl py-4">Opportunities Meet <span className="text-gold">Aspirations</span></h2>
                    </div>
                    <div className="-mx-4 z-10">
                        <img src={openJobs3} alt="Open Jobs Leading Image" className="w-96 md:w-80 xl:w-96 rounded-3xl shadow-2xl" />
                    </div>
                </div>

                <div className="max-w-2xl text-whity bg-primary rounded-3xl py-6 px-6 sm:px-12 shadow-2xl mt-4 xl:mt-0">
                    <p>
                        Discover exciting job opportunities tailored just for you. 
                        Our platform seamlessly connects top-tier talent with 
                        forward-thinking companies, fostering a dynamic synergy 
                        that propels careers to new heights.
                    </p>
                </div>
            </div>
        </header>
  )
}

export default Header