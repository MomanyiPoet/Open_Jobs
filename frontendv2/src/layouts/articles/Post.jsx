import React, { useState, useEffect  } from 'react';
import { useParams } from 'react-router-dom';

function Post() {

    const customStyle2 = {
        backgroundColor: `rgba(0, 0, 0, 0.702)`,
    }

    const { id } = useParams(); // Get the article id from the URL parameter
    const [article, setArticle] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Fetch article content based on the id
        fetch(`https://open-jobs.onrender.com/openjobs/api/article/${id}`)
            .then(response => response.json())
            .then(data => {
                setArticle(data);
                setLoading(false); // Set loading to false when articles are fetched
            })
            .catch(error => {
                console.error('Error fetching articles:', error);
                setLoading(false); // Set loading to false in case of error
            });
    }, [id]);

  return (
    <div className="py-8 grid lg:grid-cols-5 gap-4">
        {/* Left */}
        <div className="col-span-3 bg-whity rounded-3xl px-6 py-4 shadow-2xl">
            <div className="py-8">
                {/* Job Post */}
                {loading ? (
                    <div className="flex justify-center items-center py-4">
                        <span className="loading loading-dots loading-lg text-center text-primary"></span>
                    </div>
                ) : (
                    <>
                        {article &&  (
                            <div className="max-w-2xl mx-auto mb-12 border-t-4 xl:border-t-0 xl:border-l-4 even:border-gold odd:border-primary py-6 px-8 rounded-3xl shadow-2xl">
                                <div className="my-2 px-6 py-12 rounded-3xl bg-center bg-cover shadow-2xl relative" style={{backgroundImage: `url(${article.image})`,}} alt="Opportunities Meet Aspirations" title='Kenya Jobs | Open Jobs'>
                                    <div className="rounded-3xl absolute top-0 left-0 w-[100%] h-[100%]" style={customStyle2}></div>
                                    <div className="relative z-10">
                                        <h2 className="text-whity text-2xl font-semibold">{article.title}</h2>
                                        <div className="py-2 flex items-center space-x-4 text-whity">
                                            <i className="fa-solid fa-location-dot fa-beat-fade"></i>
                                            <p>{article.location}</p>
                                        </div>
                                    </div>
                                </div>
            
                                <div className="py-2 text-secondary font-semibold text-xs flex">
                                    <p className="border border-secondary py-2 px-4 rounded-3xl">{article.tags}</p>
                                </div>
            
                                <div className="py-2 text-secondary/80 italic text-sm">
                                    <h6 className='text-primary font-semibold italic py-2'>Description</h6>
                                    <p>
                                        {article.about}
                                    </p>
                                </div>
            
                                <div className="py-2 text-secondary/80 italic text-sm">
                                    <h6 className='text-primary font-semibold italic py-2'>Requirements</h6>
                                    <p>
                                        {article.requirements}
                                    </p>
                                </div>
            
                                <div className="py-2 text-secondary/80 italic text-xs font-semibold">
                                    <h6>*More Information about Application click the link to job post below:</h6>
                                </div>
            
                                <div className="py-4 flex flex-row justify-between text-secondary">
                                    <div className="flex flex-row text-xs space-x-2">
                                        <p>by <span className="text-primary font-semibold italic">Elijah</span></p>
                                        <p>{new Date(article.post_date).toLocaleString('en-US', { year: 'numeric', month: '2-digit', day: '2-digit' })}</p>
                                    </div>
                                    <div className="text-whity font-semibold text-xs transition duration-200 transform hover:scale-110">
                                        <a href={article.job_link} target='Job Link' className="bg-gradient-to-r from-cyan-500 to-blue-500 focus:outline-none focus:ring focus:ring-cyan-300 py-2 px-4 rounded-3xl">More Details</a>
                                    </div>
                                </div>
                            </div>
                        )}
                    </>
                )}
            </div>
        </div>

        {/* Right */}
        <div className="col-span-2 bg-whity rounded-3xl px-6 py-4 shadow-2xl">
            {/* Welcome */}
            <section className="py-8">
                <div className="max-w-2xl text-whity bg-gradient-to-r from-cyan-500 to-blue-500 rounded-3xl py-6 px-6 sm:px-12 shadow-2xl mt-4 xl:mt-0">
                    <h1 className="text-xl sm:text-2xl py-4 font-semibold text-center">Welcome to <span className="italic text-whity">Open Jobs</span></h1>
                </div>
            </section>

            {/* Objectives */}
            <section className="py-8">
                <div className="bg-whity rounded-3xl shadow-2xl p-4 sm:px-8">
                    <div>
                        <div className="flex justify-center px-8 md:px-16">
                            <h1 className="-mt-12 text-xl sm:text-2xl text-secondary italic py-4 px-6 font-semibold bg-whity rounded-3xl shadow-2xl">OUR OBJECTIVES</h1>
                        </div>
                        <div className="py-4 text-secondary text-justify">
                            <p className="text-sm">
                                The objective is to bridge the information gap between Kenyan youths and the diverse 
                                opportunities available to them. <br/><br/>
                                By sourcing opportunities from first-party and reputable second-party websites, 
                                the objective is to provide accurate and reliable information that helps young 
                                individuals make informed decisions regarding their educational and career paths.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Core Value */}
            <section className="py-8">
                <div className="bg-whity rounded-3xl shadow-2xl p-4 sm:px-8">
                    <div>
                        <div className="flex justify-center px-8 md:px-16">
                            <h1 className="-mt-12 text-xl sm:text-2xl text-secondary italic py-4 px-6 font-semibold bg-whity rounded-3xl shadow-2xl">CORE VALUES</h1>
                        </div>
                        <div className="py-4 flex items-center justify-evenly flex-wrap px-2 text-sm text-white space-x-1 space-y-2">
                            <p className="odd:bg-gradient-to-r from-cyan-500 to-blue-500 even:bg-secondary py-3 px-6 rounded-3xl shadow-xl">Innovation</p>
                            <p className="odd:bg-gradient-to-r from-cyan-500 to-blue-500 even:bg-secondary py-3 px-6 rounded-3xl shadow-xl">Integrity</p>
                            <p className="odd:bg-gradient-to-r from-cyan-500 to-blue-500 even:bg-secondary py-3 px-6 rounded-3xl shadow-xl">Team Work</p>
                            <p className="odd:bg-gradient-to-r from-cyan-500 to-blue-500 even:bg-secondary py-3 px-6 rounded-3xl shadow-xl">Excellence</p>
                            <p className="odd:bg-gradient-to-r from-cyan-500 to-blue-500 even:bg-secondary py-3 px-6 rounded-3xl shadow-xl">Customer Focus</p>
                            <p className="odd:bg-gradient-to-r from-cyan-500 to-blue-500 even:bg-secondary py-3 px-6 rounded-3xl shadow-xl">Professionalism</p>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    </div>
  )
}

export default Post