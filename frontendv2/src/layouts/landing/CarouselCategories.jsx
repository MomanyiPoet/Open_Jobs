import React, { useState, useEffect  } from 'react';
import { Link } from 'react-router-dom';

function CarouselCategories() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

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
  }, []);

  return (
    <div  className="max-w-sm sm:max-w-2xl lg:max-w-4xl xl:max-w-7xl mx-auto">
      {loading ? (
          <div className="flex justify-center items-center py-4">
              <span className="loading loading-dots loading-lg text-center text-primary"></span>
          </div>
      ):(
        <div className="categories-carousel py-4 flex flex-row flex-wrap justify-start space-x-2 px-4 text-xs sm:text-sm shadow-2xl rounded-3xl">
          {categories.map((category) => (
            <a href="#" key={category.id} className="border font-semibold odd:border-primary even:border-secondary odd:text-primary even:text-secondary py-2 px-3 rounded-3xl shadow-xl my-1">{category.name}</a>
          ))}
        </div>
      )}
    </div>
  )
}

export default CarouselCategories