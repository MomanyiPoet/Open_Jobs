import React, { useState, useEffect, useRef  } from 'react';
import { Link, useParams } from 'react-router-dom';

function Posts() {

    const customStyle2 = {
        backgroundColor: `rgba(0, 0, 0, 0.702)`,
    }
    // Create a ref for the section you want to scroll to
    const articleSectionRef = useRef(null);

    // Scroll to the article section when the link is clicked
    const scrollToArticleSection = () => {
        articleSectionRef.current.scrollIntoView({ behavior: 'smooth' });
    };

    const [articles, setArticles] = useState([]); // articles setArticles
    const [loading, setLoading] = useState(true);
    const { id } = useParams(); // Get the article id from the URL parameter
    const [article, setArticle] = useState(null); // article setArticle

    useEffect(() => {
        // Fetch articles
        fetch('https://open-jobs.onrender.com/openjobs/api/article/')
            .then(response => response.json())
            .then(data => {
                setArticles(data);
                setLoading(false); // Set loading to false when articles are fetched
            })
            .catch(error => {
                console.error('Error fetching articles:', error);
                setLoading(false); // Set loading to false in case of error
            });

        if (id) {
            // Fetch article content based on the id if the user clicks a link
            fetch(`https://open-jobs.onrender.com/openjobs/api/article/${id}`)
                .then(response => response.json())
                .then(data => {
                    setArticle(data);
                    setLoading(false); // Set loading to false when the article is fetched
                })
                .catch(error => {
                    console.error('Error fetching article:', error);
                    setLoading(false); // Set loading to false in case of error
                });
        } else {
            // Fetch the list of articles to get the latest article ID
            fetch('https://open-jobs.onrender.com/openjobs/api/article/')
                .then(response => response.json())
                .then(data => {
                    // Get the latest article ID from the list of articles
                    const latestArticleId = data.length > 0 ? data[0].id : null;

                    if (latestArticleId) {
                        // Fetch article content based on the latest article ID
                        fetch(`https://open-jobs.onrender.com/openjobs/api/article/${latestArticleId}`)
                            .then(response => response.json())
                            .then(data => {
                                setArticle(data);
                                setLoading(false); // Set loading to false when the default article is fetched
                            })
                            .catch(error => {
                                console.error('Error fetching default article:', error);
                                setLoading(false); // Set loading to false in case of error
                            });
                    } else {
                        console.error('No articles found.');
                        setLoading(false); // Set loading to false if no articles are available
                    }
                })
                .catch(error => {
                    console.error('Error fetching articles:', error);
                    setLoading(false); // Set loading to false in case of error
                });
        }
    }, [id]);

    const handleClick = () => {
        // Get the article header and content
        const articleHeader = document.getElementById('articleHeader').innerText;
        const articleContent = document.getElementById('articleContent').innerText;

        // Get the current page URL
        const currentPageUrl = window.location.href;

        // Customize the font
        const boldArticleHeader = `*${articleHeader}*`;
        const italicArticleContent = `_${articleContent}_`;
        const assistText = 'Explore more content and requirements by following the link below:';
        const boldAssistText = `*${assistText}*`;

        // Encode the article information for the URL
        const encodedArticle = encodeURIComponent(boldArticleHeader + '\n\n' + italicArticleContent + '\n\n' + boldAssistText + '\n' + currentPageUrl);

        // Generate the WhatsApp share URL
        const whatsappUrl = 'https://wa.me/?text=' + encodedArticle;

        // Open the share dialog
        window.open(whatsappUrl, '_blank');
    };

  return (
    <div className="py-8 grid lg:grid-cols-2 gap-4">
        {/* Left */}
        <div className="bg-whity rounded-3xl px-6 py-4 shadow-2xl">
            <div className="text-center py-4">
                <h4 className="text-secondary font-semibold text-xl">Latest picks for you</h4>
            </div>

            {/* Post */}

            {loading ? (
                <div className="flex justify-center items-center py-4">
                    <span className="loading loading-dots loading-lg text-center text-primary"></span>
                </div>
            ):(
                <>
                    {articles.slice().reverse().slice(0, 4).map((article) => (
                        <div className="py-3" key={article.id}>
                            <Link to={`/${article.id}`} onClick={scrollToArticleSection} className="flex items-center space-x-4 shadow-2xl rounded-3xl">
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
        <div className="bg-whity rounded-3xl px-6 py-4 shadow-2xl" ref={articleSectionRef}>
            <div className="py-8">
                {/* Job Post */}
                {loading ? (
                    <div className="flex justify-center items-center py-4">
                        <span className="loading loading-dots loading-lg text-center text-primary"></span>
                    </div>
                ):(
                    <>
                        {article && (
                            <div className="max-w-xl mx-auto mb-12 border-t-4 xl:border-t-0 xl:border-l-4 even:border-gold odd:border-primary py-6 px-8 rounded-3xl shadow-2xl">
                                <div className="my-2 px-6 py-12 rounded-3xl bg-center bg-cover shadow-2xl relative" style={{backgroundImage: `url(${article.image})`,}} alt="Opportunities Meet Aspirations" title='Kenya Jobs | Open Jobs'>
                                    <div className="rounded-3xl absolute top-0 left-0 w-[100%] h-[100%]" style={customStyle2}></div>
                                    <div className='relative z-10'>
                                        <h2 id='articleHeader' className="text-whity text-2xl font-semibold">{article.title}</h2>
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
                                    <p id='articleContent' dangerouslySetInnerHTML={{ __html: article.about }}></p>
                                </div>
            
                                <div className="py-2 text-secondary/80 italic text-sm">
                                    <h6 className='text-primary font-semibold italic py-2'>Requirements</h6>
                                    <p dangerouslySetInnerHTML={{ __html: article.requirements }}></p>
                                </div>
            
                                <div className="py-2 text-secondary/80 italic text-xs font-semibold">
                                    <h6>*More Information about Application click the link to job post below:</h6>
                                </div>
            
                                <div className="flex flex-row items-center text-xs text-secondary space-x-2 py-2">
                                    <p>by <span className="text-primary font-semibold italic">Elijah</span></p>
                                    <p>{new Date(article.post_date).toLocaleString('en-US', { year: 'numeric', month: '2-digit', day: '2-digit' })}</p>
                                </div>
            
                                <div className="py-4 flex flex-row justify-between items-center text-secondary">
                                    <div className="flex flex-row items-center text-sm space-x-2">
                                        <p className="text-primary font-semibold italic">Share</p>
                                        <button onClick={handleClick}><i className="fa-brands fa-whatsapp text-success text-xl"></i></button>
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
    </div>
  )
}

export default Posts