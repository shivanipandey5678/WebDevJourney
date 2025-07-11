import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center px-6">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">Welcome to BlogSphere</h1>
      <p className="text-lg text-gray-600 text-center mb-6 max-w-xl">
        Discover, Write, and Share ideas. Whether you're a reader, author, or admin — this is your space to explore thoughts and experiences.
      </p>

      <div className="flex gap-4">
        <Link to="/login">
          <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">
            Login
          </button>
        </Link>
        <Link to="/signup">
          <button className="bg-gray-700 text-white px-6 py-2 rounded hover:bg-gray-800">
            Signup
          </button>
        </Link>
        <Link to="/blogs">
          <button className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700">
            View Blogs
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
