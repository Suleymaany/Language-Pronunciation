import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div
      className="flex flex-col items-center justify-center h-screen text-center p-6 relative overflow-hidden"
    >
      {/* Background image with a subtle blur and overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url("https://example.com/your-image.jpg")',
          filter: 'blur(5px)',
          zIndex: -1,
        }}
      />
      <div className="absolute inset-0 bg-black opacity-40 z-0"></div>
      
      {/* Decorative border */}
      <div className="absolute inset-0 border-8 border-dashed border-blue-500 rounded-lg z-0"></div>
      
      {/* Main content */}
      <div className="relative z-10 bg-white bg-opacity-80 p-10 rounded-lg shadow-lg">
        <h1 className="text-5xl font-bold text-gray-800 mb-6 drop-shadow-lg">
          Welcome to the Language Pronunciation Practice App
        </h1>
        <p className="text-lg text-gray-700 mb-8 max-w-md mx-auto drop-shadow-md">
          Practice your pronunciation and get feedback.
        </p>
        <Link
          to="/practice"
          className="text-lg text-white bg-gradient-to-r from-blue-500 to-purple-500 px-6 py-3 rounded-full hover:from-purple-500 hover:to-blue-500 transition-all duration-300 transform hover:scale-110 shadow-lg"
        >
          Start Practicing
        </Link>
      </div>
    </div>
  );
}

export default Home;