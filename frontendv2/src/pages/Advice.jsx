import React, { useEffect } from 'react';

import Navbar from '../components/Navbar'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import Header from '../layouts/advice/Header';

const Advice = () => {
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

export default Advice