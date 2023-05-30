import React from 'react';
import { Link } from 'react-router-dom';

const Button = ({ path, text }) => {

  return (
    <Link to={path}>
        <button className="inline-flex items-center justify-center w-full px-6 py-2 mb-2 text-lg text-gray-800 bg-gray-200 rounded-md cursor-pointer transition-colors shadow-sm shadow-gray-200 hover:bg-amber-400 hover:shadow-lg hover:shadow-amber-500/30 md:w-auto md:mb-0">
                {text}
        </button>
    </Link>
  );
};

export default Button;