import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function CarouselCategories() {
  const settings = {
    slidesToScroll: 2,
    slidesToShow: 1,
    variableWidth: true,
    slidesToShow: 3,
    infinite: false,
  };
  return (
    <div className="max-w-sm sm:max-w-2xl lg:max-w-4xl xl:max-w-7xl mx-auto py-4 text-xs sm:text-sm shadow-2xl rounded-full">
      <Slider {...settings} className='mx-4'>
            <a href="#" className="border font-semibold border-primary text-primary py-2 px-3 rounded-3xl shadow-xl">All Categories</a>
            <a href="#" className="border font-semibold border-primary text-primary py-2 px-3 rounded-3xl shadow-xl">Marketing</a>
            <a href="#" className="border font-semibold border-primary text-primary py-2 px-3 rounded-3xl shadow-xl">Software Engineering</a>
            <a href="#" className="border font-semibold border-primary text-primary py-2 px-3 rounded-3xl shadow-xl">Nurse</a>
            <a href="#" className="border font-semibold border-primary text-primary py-2 px-3 rounded-3xl shadow-xl">Financial Analyst</a>
            <a href="#" className="border font-semibold border-primary text-primary py-2 px-3 rounded-3xl shadow-xl">Mechanic</a>
            <a href="#" className="border font-semibold border-primary text-primary py-2 px-3 rounded-3xl shadow-xl">Farmer</a>
        </Slider>
      
      {/* <div className="categories-carousel py-4 flex flex-row justify-evenly px-4 text-xs sm:text-sm  shadow-2xl rounded-full"> */}
        
    </div>
  )
}

export default CarouselCategories