import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import ArticlePost from '../layouts/articles/ArticlePost';

function Article() {

    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

  return (
    <>
        <Navbar/>
        <main className="max-w-7xl mx-auto px-4">
            <ArticlePost />
            <Contact />
            <Footer />
        </main>
    </>
  )
}

export default Article