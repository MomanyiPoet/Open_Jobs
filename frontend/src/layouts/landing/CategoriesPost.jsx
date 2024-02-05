import React from 'react'

function CategoriesPost() {
  return (
    <section className="py-4 md:py-16">
            <div className="grid lg:grid-cols-5 gap-12">
                <aside className="bg-whity rounded-3xl py-8 lg:col-span-2 shadow-2xl">
                    <div className="text-center">
                        <h4 className="text-secondary font-semibold text-xl">Categories</h4>
                    </div>
                    <div className="py-4 flex items-center justify-evenly flex-wrap px-2 text-xs sm:text-sm space-x-1 space-y-2 sm:space-y-4">
                        <a className="border font-semibold odd:border-primary even:border-secondary odd:text-primary even:text-secondary py-2 px-3 rounded-3xl shadow-xl">All Categories</a>
                        <a className="border font-semibold odd:border-primary even:border-secondary odd:text-primary even:text-secondary py-2 px-3 rounded-3xl shadow-xl">Marketing</a>
                        <a className="border font-semibold odd:border-primary even:border-secondary odd:text-primary even:text-secondary py-2 px-3 rounded-3xl shadow-xl">Software Engineering</a>
                        <a className="border font-semibold odd:border-primary even:border-secondary odd:text-primary even:text-secondary py-2 px-3 rounded-3xl shadow-xl">Nurse</a>
                        <a className="border font-semibold odd:border-primary even:border-secondary odd:text-primary even:text-secondary py-2 px-3 rounded-3xl shadow-xl">Financial Analyst</a>
                        <a className="border font-semibold odd:border-primary even:border-secondary odd:text-primary even:text-secondary py-2 px-3 rounded-3xl shadow-xl">Mechanic</a>
                        <a className="border font-semibold odd:border-primary even:border-secondary odd:text-primary even:text-secondary py-2 px-3 rounded-3xl shadow-xl">Farmer</a>
                        <a className="border font-semibold odd:border-primary even:border-secondary odd:text-primary even:text-secondary py-2 px-3 rounded-3xl shadow-xl">Frontend Internships</a>
                        <a className="border font-semibold odd:border-primary even:border-secondary odd:text-primary even:text-secondary py-2 px-3 rounded-3xl shadow-xl">House Help</a>
                        <a className="border font-semibold odd:border-primary even:border-secondary odd:text-primary even:text-secondary py-2 px-3 rounded-3xl shadow-xl">Aviator Pilot</a>
                        <a className="border font-semibold odd:border-primary even:border-secondary odd:text-primary even:text-secondary py-2 px-3 rounded-3xl shadow-xl">Civil Engineer</a>
                        <a className="border font-semibold odd:border-primary even:border-secondary odd:text-primary even:text-secondary py-2 px-3 rounded-3xl shadow-xl">Human Resource</a>
                        <a className="border font-semibold odd:border-primary even:border-secondary odd:text-primary even:text-secondary py-2 px-3 rounded-3xl shadow-xl">Hotel Manager</a>
                        <a className="border font-semibold odd:border-primary even:border-secondary odd:text-primary even:text-secondary py-2 px-3 rounded-3xl shadow-xl">HR Attachees</a>
                    </div>
                </aside>
    
                <aside className="bg-whity rounded-3xl py-8 shadow-2xl lg:col-span-3">
                    <div className="text-center">
                        <h4 className="text-secondary font-semibold text-xl">Latest Posts</h4>
                    </div>

                    <div className="pt-8 px-4">
                        {/* Post 1 */}
                        <div className="max-w-xl mx-auto mb-12 border-t-4 xl:border-t-0 xl:border-l-4 even:border-gold odd:border-primary py-8 px-8 rounded-3xl shadow-2xl">
                            <div>
                                <h2 className="text-secondary text-2xl font-semibold">Project Officer Health, Sanitation and Hygiene</h2>
                            </div>

                            <div className="py-2 flex items-center space-x-4 text-primary">
                                <i className="fa-solid fa-location-dot fa-beat-fade"></i>
                                <p>Nairobi, Kenya</p>
                            </div>

                            <div className="py-2 text-secondary font-semibold text-xs flex">
                                <p className="border border-secondary py-2 px-4 rounded-3xl">Full Time</p>
                            </div>

                            <div className="py-2 text-secondary/80 italic text-sm">
                                <p>
                                    With over 70 years of experience, our focus 
                                    is on helping the most vulnerable children 
                                    overcome poverty and experience fullness...
                                </p>
                            </div>

                            <div className="py-4 flex flex-row justify-between text-secondary">
                                <div className="flex flex-row text-xs space-x-2">
                                    <p>by <span className="text-primary font-semibold italic">Elijah</span></p>
                                    <p>January 17, 2024</p>
                                </div>
                                <div className="text-whity font-semibold text-xs">
                                    <a href="" className="bg-primary hover:bg-sky-800 active:bg-sky-700 focus:outline-none focus:ring focus:ring-sky-500 py-2 px-4 rounded-3xl">More Details</a>
                                </div>
                            </div>
                        </div>

                        {/* Post 2 */}
                        <div className="max-w-xl mx-auto mb-12 border-t-4 xl:border-t-0 xl:border-l-4 even:border-gold odd:border-primary py-8 px-8 rounded-3xl shadow-2xl">
                            <div>
                                <h2 className="text-secondary text-2xl font-semibold">Project Officer Health, Sanitation and Hygiene</h2>
                            </div>

                            <div className="py-2 flex items-center space-x-4 text-primary">
                                <i className="fa-solid fa-location-dot fa-beat-fade"></i>
                                <p>Nairobi, Kenya</p>
                            </div>

                            <div className="py-2 text-secondary font-semibold text-xs flex">
                                <p className="border border-secondary py-2 px-4 rounded-3xl">Full Time</p>
                            </div>

                            <div className="py-2 text-secondary/80 italic text-sm">
                                <p>
                                    With over 70 years of experience, our focus 
                                    is on helping the most vulnerable children 
                                    overcome poverty and experience fullness...
                                </p>
                            </div>

                            <div className="py-4 flex flex-row justify-between text-secondary">
                                <div className="flex flex-row text-xs space-x-2">
                                    <p>by <span className="text-primary font-semibold italic">Elijah</span></p>
                                    <p>January 17, 2024</p>
                                </div>
                                <div className="text-whity font-semibold text-xs">
                                    <a href="" className="bg-primary hover:bg-sky-800 active:bg-sky-700 focus:outline-none focus:ring focus:ring-sky-500 py-2 px-4 rounded-3xl">More Details</a>
                                </div>
                            </div>
                        </div>

                        {/* Post 3 */}
                        <div className="max-w-xl mx-auto mb-12 border-t-4 xl:border-t-0 xl:border-l-4 even:border-gold odd:border-primary py-8 px-8 rounded-3xl shadow-2xl">
                            <div>
                                <h2 className="text-secondary text-2xl font-semibold">Project Officer Health, Sanitation and Hygiene</h2>
                            </div>

                            <div className="py-2 flex items-center space-x-4 text-primary">
                                <i className="fa-solid fa-location-dot fa-beat-fade"></i>
                                <p>Nairobi, Kenya</p>
                            </div>

                            <div className="py-2 text-secondary font-semibold text-xs flex">
                                <p className="border border-secondary py-2 px-4 rounded-3xl">Full Time</p>
                            </div>

                            <div className="py-2 text-secondary/80 italic text-sm">
                                <p>
                                    With over 70 years of experience, our focus 
                                    is on helping the most vulnerable children 
                                    overcome poverty and experience fullness...
                                </p>
                            </div>

                            <div className="py-4 flex flex-row justify-between text-secondary">
                                <div className="flex flex-row text-xs space-x-2">
                                    <p>by <span className="text-primary font-semibold italic">Elijah</span></p>
                                    <p>January 17, 2024</p>
                                </div>
                                <div className="text-whity font-semibold text-xs">
                                    <a href="" className="bg-primary hover:bg-sky-800 active:bg-sky-700 focus:outline-none focus:ring focus:ring-sky-500 py-2 px-4 rounded-3xl">More Details</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </aside>
            </div>
        </section>
  )
}

export default CategoriesPost