//eslint-disable-next-line
import React, { useState } from 'react';

const Show_All = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const sampleText =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tincidunt luctus elementum. Phasellus rhoncus nisi at lorem pharetra dapibus. Morbi at eleifend turpis. Donec euismod mi nec elit elementum, non lacinia dolor finibus. Nulla efficitur interdum tristique. Fusce quis viverra elit. In vel quam arcu. Nullam ultrices posuere posuere. Phasellus cursus sapien a viverra efficitur. Sed tristique tortor eu risus pharetra, sed lobortis ipsum bibendum.";

  const handleShowAll = () => {
    setIsExpanded(true);
  };

  const handleShowLess = () => {
    setIsExpanded(false);
  };

  const renderText = () => {
    if (isExpanded) {
      return sampleText;
    } else {
      const halfLength = Math.ceil(sampleText.length / 2);
      const visibleText = sampleText.slice(0, halfLength);
      const hiddenText = sampleText.slice(halfLength);

      return (
        <>
          {visibleText}
          <span style={{ display: 'none' }}>{hiddenText}</span>
        </>
      );
    }
  };

  return (
    <div>
      {renderText()}
      {!isExpanded && (
        <>
          <button onClick={handleShowAll}>Show All</button>
        </>
      )}
      {isExpanded && (
        <>
          <button onClick={handleShowLess}>Show Less</button>
        </>
      )}
    </div>
  );
};

export default Show_All;
