import React, { useState, useEffect, useRef  } from 'react';
import { Link, useParams } from 'react-router-dom';

function Posts() {

    const { id } = useParams(); // Get the category id from the URL parameter
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [displayCount, setDisplayCount] = useState(3); // Initial number of articles to display

    useEffect(() => {
        // Fetch articles
        fetch(`https://open-jobs.onrender.com/openjobs/api/article/by_category/?category=${id}`)
            .then(response => response.json())
            .then(data => {
                setArticles(data);
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
            <div className="text-center py-4">
                <h4 className="text-secondary font-semibold text-xl">Available Positions</h4>
            </div>

            {/* Post */}
            {loading ? (
                <div className="flex justify-center items-center py-4">
                    <span className="loading loading-dots loading-lg text-center text-primary"></span>
                </div>
            ):(
                <>
                    {articles.map((article) => (
                        <div className="py-3">
                            <Link to={`/article/${article.id}`}  className="flex items-center justify-start space-x-4 shadow-2xl rounded-3xl">
                                <div className="px-14 py-20 sm:p-20 rounded-s-3xl bg-center bg-cover shadow-2xl" style={{backgroundImage: `url(${article.image})`,}}>
                                </div>
                                <div className="flex flex-col justify-evenly">
                                    <div>
                                        <h6 className="text-secondary font-semibold text-md">{article.title}</h6>
                                    </div>

                                    <div className="py-1 flex items-center space-x-2 text-primary text-xs">
                                        <i className="fa-solid fa-location-dot fa-beat-fade"></i>
                                        <p>{article.location}</p>
                                    </div>

                                    <div className="py-1 text-secondary font-semibold text-xs flex">
                                        <p className="border border-secondary py-2 px-4 rounded-3xl">{article.tags}</p>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    ))}
                </>
            )}

        </div>

        {/* Right */}
        <div className="col-span-2 bg-whity rounded-3xl px-6 py-4 shadow-2xl">
            {/* Welcome */}
            <section className="py-8">
                <div className="max-w-2xl mx-auto text-whity bg-gradient-to-r from-cyan-500 to-blue-500 rounded-3xl py-6 px-6 sm:px-12 shadow-2xl mt-4 xl:mt-0">
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

            {/* Core Values */}
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

export default Posts