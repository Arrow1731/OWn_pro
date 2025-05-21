import React from 'react';
import { Link } from 'react-router-dom';

const Teacher = () => {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">O'qituvchi Profili</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Link to="/create-test">
          <div className="bg-blue-500 text-white p-6 rounded shadow hover:bg-blue-600 cursor-pointer">➕ Yangi test yaratish</div>
        </Link>

        <Link to="/tests">
          <div className="bg-purple-500 text-white p-6 rounded shadow hover:bg-purple-600 cursor-pointer">📚 Barcha testslarni ko'rish</div>
        </Link>

        <Link to="/students">
          <div className="bg-yellow-500 text-white p-6 rounded shadow hover:bg-yellow-600 cursor-pointer">👥 O'quvchilarni boshqarish</div>
        </Link>

        <Link to="/results">
          <div className="bg-green-500 text-white p-6 rounded shadow hover:bg-green-600 cursor-pointer">📊 Test natijalarini ko'rish</div>
        </Link>
      </div>
    </div>
  );
};

export default Teacher;