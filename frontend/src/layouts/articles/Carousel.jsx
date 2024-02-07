import React from 'react'

function Carousel() {
  return (
    <section className="py-8">
        <div className="carousel w-full rounded-3xl shadow-2xl">
            <div id="slide1" className="carousel-item carousel-slide relative w-full scroll">
                <img src="https://daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.jpg" className="w-full" />
                
            </div>
            <div id="slide2" className="carousel-item carousel-slide relative w-full">
                <img src="https://daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.jpg" className="w-full" />
                
            </div>
            <div id="slide3" className="carousel-item carousel-slide relative w-full">
                <img src="https://daisyui.com/images/stock/photo-1414694762283-acccc27bca85.jpg" className="w-full" />
                
            </div>
            <div id="slide4" className="carousel-item carousel-slide relative w-full">
                <img src="https://daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.jpg" className="w-full" />
                
            </div>
        </div>
    </section>
  )
}

export default Carousel