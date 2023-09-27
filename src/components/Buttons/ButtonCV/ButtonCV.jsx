import React from 'react';
import { FaRegFilePdf } from 'react-icons/fa';

const ButtonCV = ({ path }) => {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = path;
    link.rel = 'noreferrer';
    link.target = '_blank'
    link.click();
  };

  return (
    <button onClick={handleDownload} className="flex flex-row items-center px-3 py-1 text-base text-gray-200 bg-gray-500/75 border border-solid rounded-xl transition-colors hover:bg-black hover:bg-opacity-20 hover:text-black md:w-auto md:mb-0">
          <span className='px-2'>CV</span>
          <FaRegFilePdf size={17}/>
    </button>
  );
};

export default ButtonCV;