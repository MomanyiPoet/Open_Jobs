import React, { useEffect } from 'react';
import Navbar from '../components/Navbar'
import Header from '../layouts/categories/Header'
import CategoriesPost from '../layouts/categories/CategoriesPost'
import Contact from '../components/Contact'
import Footer from '../components/Footer'


function Category() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
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