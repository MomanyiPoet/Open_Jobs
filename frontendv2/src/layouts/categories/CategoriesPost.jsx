import React from 'react';
// import { Link } from 'react-router-dom';
import CarouselCategories from './CarouselCategories';
import Posts from './Posts';

function CategoriesPost() {

  return (
      <section>
        <div className='py-4'>
            <div className="text-center">
                <h4 className="text-secondary font-semibold text-xl">Categories</h4>
            </div>

            <CarouselCategories />

            <Posts />
        </div>
      </section>
  )
}

export default CategoriesPost