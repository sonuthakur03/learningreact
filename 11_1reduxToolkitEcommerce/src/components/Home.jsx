import React from 'react';

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-orange-50">
      {/* Header Section */}
      <header className="text-center mb-10">
        <h1 className="text-4xl font-bold text-orange-600">
          Welcome to Our E-commerce
        </h1>
        <p className="mt-4 text-lg text-gray-700">
          Experience the vibrant energy of our services and offerings.
        </p>
      </header>

      {/* Call to Action Section */}
      <div className="flex flex-col items-center">
        <h2 className="text-2xl font-semibold text-orange-500 mb-4">
          Get Started Today!
        </h2>
        <p className="text-gray-600 mb-6">
          Join us and transform your ideas into reality.
        </p>
        <a 
          href="#"
          className="bg-orange-600 text-white px-6 py-3 rounded-lg shadow hover:bg-orange-700 transition duration-300"
        >
          Sign Up Now
        </a>
      </div>

      {/* Footer Section */}
      <footer className="mt-10 text-gray-500">
        <p>&copy; 2024 E-Commerce. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
