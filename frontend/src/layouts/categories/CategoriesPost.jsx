import React, { useState, useEffect  } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

function CategoriesPost() {
    
    const { id } = useParams(); // Get the category id from the URL parameter
    const [categories, setCategories] = useState([]);
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [displayCount, setDisplayCount] = useState(4); // Initial number of articles to display

    useEffect(() => {
        // Fetch categories
        fetch('https://open-jobs.onrender.com/openjobs/api/category/')
            .then(response => response.json())
            .then(data => {
                setCategories(data);
                setLoading(false); // Set loading to false when categories are fetched
            })
            .catch(error => {
                console.error('Error fetching categories:', error);
                setLoading(false); // Set loading to false in case of error
            });
        
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

    const handleLoadMore = () => {
        // Increase the display count to load more comments
        setDisplayCount(displayCount + 5);
    };

  return (
      <section className="py-4 md:py-16" id='categoryPosts'>
          <div className="grid lg:grid-cols-5 gap-12">
              <aside className="bg-whity rounded-3xl py-8 lg:col-span-2 shadow-2xl">
                  <div className="text-center">
                      <h4 className="text-secondary font-semibold text-xl">Categories</h4>
                  </div>

                  {loading ? (
                      <div className="flex justify-center items-center py-4">
                          <span className="loading loading-dots loading-lg text-center text-primary"></span>
                      </div>
                  ) : (
                    <div className="py-4 flex items-center justify-evenly flex-wrap px-2 text-xs sm:text-sm space-x-1 space-y-2 sm:space-y-4">
                        <Link to="/" className="border font-semibold odd:border-primary even:border-secondary odd:text-primary even:text-secondary py-2 px-3 rounded-3xl shadow-xl">All</Link>
                        {categories.map((category) => (
                            <Link to={`/category/${category.id}`} className="border font-semibold odd:border-primary even:border-secondary odd:text-primary even:text-secondary py-2 px-3 rounded-3xl shadow-xl" key={category.id}>{category.name}</Link>
                        ))}
                    </div>
                  )}

              </aside>

              <aside className="bg-whity rounded-3xl py-8 shadow-2xl lg:col-span-3">
                  <div className="text-center">
                      <h4 className="text-secondary font-semibold text-xl">Latest Posts</h4>
                  </div>

                  <div className="pt-8 px-4">
                      {/* Post 1 */}
                      {loading ? (
                          <div className="flex justify-center items-center py-4">
                              <span className="loading loading-dots loading-lg text-center text-primary"></span>
                          </div>
                      ) : (
                          <div>
                              {articles.slice().reverse().slice(0, displayCount).map((article) => (
                                  <div className="max-w-xl mx-auto mb-12 border-t-4 xl:border-t-0 xl:border-l-4 even:border-gold odd:border-primary py-8 px-8 rounded-3xl shadow-2xl" key={article.id}>
                                      <div>
                                          <h2 className="text-secondary text-2xl font-semibold">{article.title}</h2>
                                      </div>

                                      <div className="py-2 flex items-center space-x-4 text-primary">
                                          <i className="fa-solid fa-location-dot fa-beat-fade"></i>
                                          <p>{article.location}</p>
                                      </div>

                                      <div className="py-2 text-secondary font-semibold text-xs flex">
                                          <p className="border border-secondary py-2 px-4 rounded-3xl">{article.tags}</p>
                                      </div>

                                      <div className="py-2 text-secondary/80 italic text-sm">
                                          <p>
                                              {article.about.length > 200 ? `${article.about.substring(0, 200)}...` : article.about}
                                          </p>
                                      </div>

                                      <div className="py-4 flex flex-row justify-between text-secondary">
                                          <div className="flex flex-row text-xs space-x-2">
                                              <p>by <span className="text-primary font-semibold italic">Elijah</span></p>
                                              <p>{new Date(article.post_date).toLocaleString('en-US', { year: 'numeric', month: '2-digit', day: '2-digit' })}</p>
                                          </div>
                                          <div className="text-whity font-semibold text-xs">
                                              <Link to={`/articles/${article.id}`} className="bg-primary hover:bg-sky-800 active:bg-sky-700 focus:outline-none focus:ring focus:ring-sky-500 py-2 px-4 rounded-3xl">More Details</Link>
                                          </div>
                                      </div>
                                  </div>
                              ))}
                          </div>
                      )}
                  </div>

                  {/* LOAD MORE */}
                  {displayCount < articles.length && (
                      <div className="text-whity font-semibold text-xs flex justify-center">
                          <button onClick={handleLoadMore} className="bg-primary hover:bg-sky-800 active:bg-sky-700 focus:outline-none focus:ring focus:ring-sky-500 py-2 px-4 rounded-3xl">Load More</button>
                      </div>
                  )}
              </aside>
          </div>
      </section>
  )
}

export default CategoriesPost