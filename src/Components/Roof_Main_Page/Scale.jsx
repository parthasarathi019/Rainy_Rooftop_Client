//eslint-disable-next-line
import React, { useState } from 'react';

const Scale = () => {
  const [isScaled, setIsScaled] = useState(false);

  const handleClick = () => {
    setIsScaled(true);
    setTimeout(() => {
      setIsScaled(false);
    }, 300); // Change the duration as needed
  };

  return (
    <div>
      <button
        className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-transform ${
          isScaled ? 'scale-105' : ''
        }`}
        onClick={handleClick}
      >
        Scale
      </button>
    </div>
  );
};

export default Scale;
