import React, { useState, useEffect, useRef  } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

function Posts() {

    const customStyle2 = {
        backgroundColor: `rgba(0, 0, 0, 0.702)`,
    }

    const articleSectionRef = useRef(null);
    const { id } = useParams();
    const [categories, setCategories] = useState([]);
    const [categoryTitle, setCategoryTitle] = useState('');
    const [articles, setArticles] = useState([]);
    const [article, setArticle] = useState(null);
    const [loading, setLoading] = useState(true);
    const [displayCount, setDisplayCount] = useState(3);
    const [selectedArticle, setSelectedArticle] = useState(null);

    const scrollToArticleSection = () => {
        articleSectionRef.current.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        fetch(`https://open-jobs.onrender.com/openjobs/api/article/by_category/?category=${id}`)
            .then(response => response.json())
            .then(data => {
                setArticles(data);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching articles:', error);
                setLoading(false);
            });

        if (id) {
            fetch(`https://open-jobs.onrender.com/openjobs/api/article/${id}`)
                .then(response => response.json())
                .then(data => {
                    setArticle(data);
                    setLoading(false);
                })
                .catch(error => {
                    console.error('Error fetching article:', error);
                    setLoading(false);
                });
        }
    }, [id]);

    useEffect(() => {
        fetch('https://open-jobs.onrender.com/openjobs/api/category/')
            .then(response => response.json())
            .then(data => {
                setCategories(data);
            })
            .catch(error => {
                console.error('Error fetching categories:', error);
            });
    }, []);

    useEffect(() => {
        const selectedCategory = categories.find(category => category.id === id);
        if (selectedCategory) {
            setCategoryTitle(selectedCategory.name);
        }
    }, [id, categories]);

    const handleLoadMore = () => {
        setDisplayCount(displayCount + 5);
    };

  return (
    <>
        <section>
            <div className="my-4 py-8 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full">
                {loading ? (
                    <div className="flex justify-center items-center py-4">
                        <span className="loading loading-dots loading-lg text-center text-primary"></span>
                    </div>
                ) : (
                    <>
                        <div className="text-center">
                            <h3 className="text-whity font-semibold text-2xl">{categoryTitle.id} Open Jobs Categories</h3>
                        </div>
                    </>
                )}
            </div>
        </section>
        
        <div className="py-8 grid lg:grid-cols-2 gap-4">
            {/* Left */}
            <div className="bg-whity rounded-3xl px-6 py-4 shadow-2xl">
                {/* Post 1 */}
                {loading ? (
                    <div className="flex justify-center items-center py-4">
                        <span className="loading loading-dots loading-lg text-center text-primary"></span>
                    </div>
                ) : (
                    <>
                        {articles.slice().reverse().slice(0, displayCount).map((article) => (
                            <div className="py-3" key={article.id}>
                                <Link to={`/category/${id}/${article.id}`} onClick={() => setSelectedArticle(article)} className="flex items-center justify-center lg:justify-start space-x-4 shadow-2xl rounded-3xl">
                                    <div className="px-14 py-20 sm:p-20 rounded-s-3xl bg-center bg-cover shadow-2xl" style={{backgroundImage: `url(${article.image})`,}} alt="Opportunities Meet Aspirations" title='Kenya Jobs | Open Jobs'>
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

                {/* LOAD MORE */}
                {displayCount < articles.length && (
                    <div className="text-whity font-semibold text-xs flex justify-center">
                        <button onClick={handleLoadMore} className="bg-primary hover:bg-sky-800 active:bg-sky-700 focus:outline-none focus:ring focus:ring-sky-500 py-2 px-4 rounded-3xl">Load More</button>
                    </div>
                )}

            </div>

            {/* Right */}
            <div ref={articleSectionRef} className="bg-whity rounded-3xl px-6 py-4 shadow-2xl">
            <div className="py-8">
        {selectedArticle && (
            <div className="max-w-xl mx-auto mb-12 border-t-4 xl:border-t-0 xl:border-l-4 even:border-gold odd:border-primary py-6 px-8 rounded-3xl">
                <div className="my-2 px-6 py-12 rounded-3xl bg-center bg-cover shadow-2xl relative" style={{backgroundImage: `url(${selectedArticle.image})`}} alt="Opportunities Meet Aspirations" title='Kenya Jobs | Open Jobs'>
                    <div className="rounded-3xl absolute top-0 left-0 w-[100%] h-[100%]" style={customStyle2}></div>
                    <div className='relative z-10'>
                        <h2 className="text-whity text-2xl font-semibold">{selectedArticle.title}</h2>
                        <div className="py-2 flex items-center space-x-4 text-whity">
                            <i className="fa-solid fa-location-dot fa-beat-fade"></i>
                            <p>{selectedArticle.location}</p>
                        </div>
                    </div>
                </div>

                <div className="py-2 text-secondary font-semibold text-xs flex">
                    <p className="border border-secondary py-2 px-4 rounded-3xl">{selectedArticle.tags}</p>
                </div>

                <div className="py-2 text-secondary/80 italic text-sm">
                    <h6 className='text-primary font-semibold italic py-2'>Description</h6>
                    <p>
                        {selectedArticle.about}
                    </p>
                </div>

                <div className="py-2 text-secondary/80 italic text-sm">
                    <h6 className='text-primary font-semibold italic py-2'>Requirements</h6>
                    <p>
                        {selectedArticle.requirements}
                    </p>
                </div>

                <div className="py-2 text-secondary/80 italic text-xs font-semibold">
                    <h6>*More Information about Application click the link to job post below:</h6>
                </div>

                <div className="py-4 flex flex-row justify-between text-secondary">
                    <div className="flex flex-row text-xs space-x-2">
                        <p>by <span className="text-primary font-semibold italic">Elijah</span></p>
                        <p>{new Date(selectedArticle.post_date).toLocaleString('en-US', { year: 'numeric', month: '2-digit', day: '2-digit' })}</p>
                    </div>
                    <div className="text-whity font-semibold text-xs transition duration-200 transform hover:scale-110">
                        <a href={selectedArticle.job_link} target='Job Link' className="bg-gradient-to-r from-cyan-500 to-blue-500 focus:outline-none focus:ring focus:ring-cyan-300 py-2 px-4 rounded-3xl">Link to Job Post</a>
                    </div>
                </div>
            </div>
        )}
    </div>
            </div>
        </div>
    </>
  )
}

export default Posts