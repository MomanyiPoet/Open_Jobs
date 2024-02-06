import React from 'react'
import Navbar from '../components/Navbar'
import Header from '../layouts/landing/Header'
import CategoriesPost from '../layouts/landing/CategoriesPost'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

function Landing() {
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

export default Landing