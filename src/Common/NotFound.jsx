import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="flex flex-col items-center p-2 text-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-6xl font-bold text-red-600">404</h1>
      <p className="text-2xl mt-4 text-gray-800">Page Not Found</p>
      <p className="mt-2 text-gray-600">Sorry, the page you are looking for does not exist.</p>
      <Link to="/" className="mt-6 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
        Go to Home
      </Link>
    </div>
  );
};

export default NotFound;
