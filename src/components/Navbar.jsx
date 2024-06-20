import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4 text-white flex justify-between items-center">
      <h1 className="text-2xl font-bold">News Portal</h1>
      <div className="space-x-4">
        <Link to="/" className="hover:underline">Home</Link>
        <Link to="/category/business" className="hover:underline">Business</Link>
        <Link to="/category/technology" className="hover:underline">Technology</Link>
        <Link to="/category/entertainment" className="hover:underline">Entertainment</Link>
      </div>
    </nav>
  );
};

export default Navbar;
