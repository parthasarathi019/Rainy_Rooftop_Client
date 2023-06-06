//eslint-disable-next-line
import React, { useState } from 'react';

const Pagination = () => {
  const [currentPage, setCurrentPage] = useState(1);

  // Mock data
  const data = [
    'Data 1', 'Data 2', 'Data 3', 'Data 4', 'Data 5', 'Data 6',
    'Data 7', 'Data 8', 'Data 9', 'Data 10', 'Data 11', 'Data 12',
    'Data 13', 'Data 14', 'Data 15', 'Data 16', 'Data 17', 'Data 18',
    'Data 19', 'Data 20', 'Data 21', 'Data 22', 'Data 23', 'Data 24'
  ];

  // Calculate total pages
  const totalPages = Math.ceil(data.length / 3);

  // Get data for current page
  const start = (currentPage - 1) * 3;
  const end = start + 3;
  const currentData = data.slice(start, end);

  // Handle page change
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div>
      <ul>
        {currentData.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      <div>
        {Array.from({ length: totalPages }, (_, index) => index + 1).map((page) => (
          <button
            key={page}
            onClick={() => handlePageChange(page)}
            style={{
              fontWeight: page === currentPage ? 'bold' : 'normal',
              marginLeft: '5px',
            }}
          >
            {page}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Pagination;
