import React from 'react';

const Button = ({ path, text }) => {

  return (
    <a href={path}>
        <button className="px-3 py-1 text-base text-gray-200 bg-gray-500/75 border border-solid rounded-xl transition-colors hover:bg-black hover:bg-opacity-20 hover:text-black md:w-auto md:mb-0">
                {text}
        </button>
    </a>
  );
};

export default Button;