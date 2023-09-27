import React from 'react';

const Button = ({ path, text }) => {

  return (
    <a href={path}>
        <button className="px-3 py-1 text-base text-gray-200 bg-transparent border border-solid rounded-xl transition-colors hover:bg-gray-500/75 md:w-auto md:mb-0">
                {text}
        </button>
    </a>
  );
};

export default Button;