import React from 'react';
import { Link } from 'react-router-dom';

function LandingPage() {
  return (
    <div
      className="flex flex-col items-center justify-center h-screen text-center p-6 relative overflow-hidden"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url("https://example.com/landing-image.jpg")',
          filter: 'blur(8px)',
          zIndex: -1,
        }}
      />
      {/* Overlay with gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-70 z-0"></div>
      <h1 className="text-5xl font-extrabold text-white mb-6 drop-shadow-lg z-10">
        Welcome to Our App
      </h1>
      <p className="text-xl text-white mb-8 max-w-md mx-auto drop-shadow-md z-10">
        Discover the features and get started by clicking below.
      </p>
      <Link
        to="/home"
        className="relative z-10 text-lg text-white bg-gradient-to-r from-blue-500 to-purple-500 px-6 py-3 rounded-full hover:from-purple-500 hover:to-blue-500 transition-all duration-300 transform hover:scale-110 shadow-lg"
      >
        Enter Home
      </Link>
    </div>
  );
}

export default LandingPage;
