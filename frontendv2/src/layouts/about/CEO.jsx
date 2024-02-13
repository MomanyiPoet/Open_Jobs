import React from 'react'
import ceo from '../../assets/images/ceo.webp'

function CEO() {
  return (
    <section>
        <div className="py-16">
            <div className="flex flex-col lg:flex-row justify-center items-center space-y-4 lg:space-y-0">
                <div className="lg:-mx-8 z-10">
                    <img src={ceo} alt="Open Jobs Leading Image" className="w-72 sm:w-96 rounded-3xl shadow-2xl" />
                </div>
                <div className="flex flex-col max-w-xl text-whity bg-gradient-to-r from-cyan-600 to-blue-500 rounded-3xl py-8 px-6 md:px-16 shadow-2xl z-20">
                    <div className="flex justify-center">
                        <h1 className="-mt-16 text-2xl text-secondary italic py-4 px-6 font-semibold bg-whity rounded-3xl shadow-2xl">Message from our CEO</h1>
                    </div>
                    <div className="pt-4 flex justify-center space-x-4">
                        <span className="text-5xl">“</span>
                        <p className="text-sm lg:text-base text-justify italic">
                            Nothing hurts like seeing KIND people struggling to find a job. May God help you find the right job soon!
                        </p>
                        <span className="text-5xl">“</span>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default CEO