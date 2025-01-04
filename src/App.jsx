import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Experience from './components/sections/Experience';
import Education from './components/sections/Education';
import Skills from './components/sections/Skills';
import Projects from './components/sections/Projects';
import Blog from './components/Blog';
import BlogDetail from './components/Blog/BlogDetail';
import Footer from './components/layout/Footer';
import SEO from './components/SEO';
import BlogPostForm from './components/Blog/BlogPostForm';

function App() {
  return (
    <Router>
      <SEO />
      <div className="relative min-h-screen w-full bg-gradient-to-br from-white via-gray-50 to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 overflow-x-hidden">
        <Navbar />
        <Routes>
          <Route path="/" element={
            <main className="flex-grow">
              <Hero />
              <About />
              <Education />
              <Experience />
              <Skills />
              <Projects />
            </main>
          } />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<BlogDetail />} />
         
          <Route path="/BlogPostForm" element={<BlogPostForm />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;