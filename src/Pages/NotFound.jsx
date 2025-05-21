// Pages/NotFound.jsx
import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-br from-gray-100 to-blue-100 px-4 text-center">
      <h1 className="text-9xl font-extrabold text-gray-800">404</h1>
      <p className="text-2xl mt-4 text-gray-700">Oops! Page not found.</p>
      <p className="text-gray-600 mt-2 mb-6">The page you're looking for doesn't exist or has been moved.</p>
      <Link to="/"className="px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition duration-300">⬅️ Go Home</Link>
    </div>
  );
}

export default NotFound;
