import React, { useEffect } from 'react';

import Navbar from '../components/Navbar'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

import Header from '../layouts/about/Header'
import Goals from '../layouts/about/Goals'
import Objectives from '../layouts/about/Objectives'
import Values from '../layouts/about/Values'
import CEO from '../layouts/about/CEO'

function About() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <>
        <Navbar />
        <main className="max-w-7xl mx-auto px-4">
          <Header />
          {/* <Goals /> */}
          <Objectives />
          <Values />
          <CEO />
          <Contact />
          <Footer />
        </main>
    </>
  )
}

export default About