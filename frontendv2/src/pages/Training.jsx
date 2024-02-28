import React, { useEffect } from 'react';

import Navbar from '../components/Navbar'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import Header from '../layouts/training/Header';

const Training = () => {
  useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

  return (
      <>
          <Navbar />
          <main className="max-w-7xl mx-auto px-4">
              <Header />
              <Contact />
              <Footer />
          </main>
      </>
  )
}

export default Training