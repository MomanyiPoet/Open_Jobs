import React from 'react'
import uN from '../../assets/images/un.png'

function Posts() {
    const customStyle = {
        backgroundImage: `url(${uN})`,
    };

    const customStyle2 = {
        backgroundColor: `rgba(0, 0, 0, 0.402)`,
    }
  return (
    <div className="py-8 grid lg:grid-cols-2 gap-4">
        {/* Left */}
        <div className="bg-whity rounded-3xl px-6 py-4 shadow-2xl">
            <div className="text-center py-4">
                <h4 className="text-secondary font-semibold text-xl">Latest picks for you</h4>
            </div>

            {/* Post 1 */}
            <div className="py-3">
                <a href="#" className="flex items-center justify-center lg:justify-start space-x-4 shadow-2xl rounded-3xl">
                    <div className="px-14 py-20 sm:p-20 rounded-s-3xl bg-center bg-cover shadow-2xl" style={customStyle}>
                    </div>
                    <div className="flex flex-col justify-evenly">
                        <div>
                            <h6 className="text-secondary font-semibold text-md">Project Officer Health, Sanitation and Hygiene</h6>
                        </div>

                        <div className="py-1 flex items-center space-x-2 text-primary text-xs">
                            <i className="fa-solid fa-location-dot fa-beat-fade"></i>
                            <p>Nairobi, Kenya</p>
                        </div>

                        <div className="py-1 text-secondary font-semibold text-xs flex">
                            <p className="border border-secondary py-2 px-4 rounded-3xl">Full Time</p>
                        </div>
                    </div>
                </a>
            </div>

            {/* Post 2 */}
            <div className="py-3">
                <a href="#" className="flex items-center justify-center lg:justify-start space-x-4 shadow-2xl rounded-3xl">
                    <div className="px-14 py-20 sm:p-20 rounded-s-3xl bg-center bg-cover shadow-2xl" style={customStyle}>
                    </div>
                    <div className="flex flex-col justify-evenly">
                        <div>
                            <h6 className="text-secondary font-semibold text-md">Project Officer Health, Sanitation and Hygiene</h6>
                        </div>

                        <div className="py-1 flex items-center space-x-2 text-primary text-xs">
                            <i className="fa-solid fa-location-dot fa-beat-fade"></i>
                            <p>Nairobi, Kenya</p>
                        </div>

                        <div className="py-1 text-secondary font-semibold text-xs flex">
                            <p className="border border-secondary py-2 px-4 rounded-3xl">Full Time</p>
                        </div>
                    </div>
                </a>
            </div>

            {/* Post 3 */}
            <div className="py-3">
                <a href="#" className="flex items-center justify-center lg:justify-start space-x-4 shadow-2xl rounded-3xl">
                    <div className="px-14 py-20 sm:p-20 rounded-s-3xl bg-center bg-cover shadow-2xl" style={customStyle}>
                    </div>
                    <div className="flex flex-col justify-evenly">
                        <div>
                            <h6 className="text-secondary font-semibold text-md">Project Officer Health, Sanitation and Hygiene</h6>
                        </div>

                        <div className="py-1 flex items-center space-x-2 text-primary text-xs">
                            <i className="fa-solid fa-location-dot fa-beat-fade"></i>
                            <p>Nairobi, Kenya</p>
                        </div>

                        <div className="py-1 text-secondary font-semibold text-xs flex">
                            <p className="border border-secondary py-2 px-4 rounded-3xl">Full Time</p>
                        </div>
                    </div>
                </a>
            </div>

        </div>

        {/* Right */}
        <div className="bg-whity rounded-3xl px-6 py-4 shadow-2xl">
            <div className="py-8">
                {/* Job Post */}
                <div className="max-w-xl mx-auto mb-12 border-t-4 xl:border-t-0 xl:border-l-4 even:border-gold odd:border-primary py-6 px-8 rounded-3xl shadow-2xl">
                    <div className="my-2 px-6 py-12 rounded-3xl bg-center bg-cover shadow-2xl relative" style={customStyle}>
                        <div className="rounded-3xl absolute top-0 left-0 w-[100%] h-[100%]" style={customStyle2}></div>
                        <div className='relative z-10'>
                            <h2 className="text-whity text-2xl font-semibold">Project Officer Health, Sanitation and Hygiene</h2>
                            <div className="py-2 flex items-center space-x-4 text-whity">
                                <i className="fa-solid fa-location-dot fa-beat-fade"></i>
                                <p>Nairobi, Kenya</p>
                            </div>
                        </div>
                    </div>

                    <div className="py-2 text-secondary font-semibold text-xs flex">
                        <p className="border border-secondary py-2 px-4 rounded-3xl">Full Time</p>
                    </div>

                    <div className="py-2 text-secondary/80 italic text-sm">
                        <h6 className='text-primary font-semibold italic py-2'>Description</h6>
                        <p>
                            With over 70 years of experience, our focus 
                            is on helping the most vulnerable children 
                            overcome poverty and experience fullness...
                        </p>
                    </div>

                    <div className="py-2 text-secondary/80 italic text-sm">
                        <h6 className='text-primary font-semibold italic py-2'>Requirements</h6>
                        <p>
                            With over 70 years of experience, our focus 
                            is on helping the most vulnerable children 
                            overcome poverty and experience fullness...
                        </p>
                    </div>

                    <div className="py-2 text-secondary/80 italic text-xs font-semibold">
                        <h6>*More Information about Application click the link to job post below:</h6>
                    </div>

                    <div className="py-4 flex flex-row justify-between text-secondary">
                        <div className="flex flex-row text-xs space-x-2">
                            <p>by <span className="text-primary font-semibold italic">Elijah</span></p>
                            <p>January 17, 2024</p>
                        </div>
                        <div className="text-whity font-semibold text-xs transition duration-200 transform hover:scale-110">
                            <a href="" className="bg-gradient-to-r from-cyan-500 to-blue-500 focus:outline-none focus:ring focus:ring-cyan-300 py-2 px-4 rounded-3xl">More Details</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Posts