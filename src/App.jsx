import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-white selection:bg-primary selection:text-white">
      <Navbar />
      <Hero />
      <Features />

      <footer className="py-8 border-t border-gray-800 mt-20">
        <div className="container mx-auto px-6 text-center text-gray-500">
          <p>&copy; 2024 NeoVite Sample. Built with React + Tailwind.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
