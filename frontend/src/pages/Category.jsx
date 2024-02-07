import React from 'react'
import Navbar from '../components/Navbar'
import CategoriesPost from '../layouts/categories/CategoriesPost'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import Header from '../layouts/about/Header'

function Category() {
  return (
    <>
        <Navbar/>
        <main className="max-w-7xl mx-auto px-4">
            <Header />
            <CategoriesPost />
            <Contact />
            <Footer />
        </main>
    </>
  )
}

export default Category