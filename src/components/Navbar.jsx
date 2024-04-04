import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="p-4">
      <ul className="flex justify-center space-x-4">
        <li>
          <Link to="/" className="text-black hover:bg-gray-200 px-3 py-2 rounded-md">Home</Link>
        </li>
        <li>
          <Link to="/login" className="text-black hover:bg-gray-200 px-3 py-2 rounded-md">Login</Link>
        </li>
        <li>
          <Link to="/multisignup" className="text-black hover:bg-gray-200 px-3 py-2 rounded-md">Sign Up</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;