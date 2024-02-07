import React from 'react'
import Navbar from '../components/Navbar'
import Carousel from '../layouts/articles/Carousel'
import ArticlesPost from '../layouts/articles/ArticlesPost'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

function Articles() {
  return (
    <>
        <Navbar/>
        <main className="max-w-7xl mx-auto px-4">
            <Carousel />
            <ArticlesPost />
            <Contact />
            <Footer />
        </main>
    </>
  )
}

export default Articles