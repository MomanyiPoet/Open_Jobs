import React from 'react';
import CarouselCategories from '../landing/CarouselCategories';
import Post from './Post';

function ArticlePost() {
  return (
    <section>
        <div className='py-4'>
            <div className="text-center">
                <h4 className="text-secondary font-semibold text-xl">Categories</h4>
            </div>

            <CarouselCategories />

            <Post />
        </div>
      </section>
  )
}

export default ArticlePost