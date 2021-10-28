import React from 'react';
import { Link } from 'react-router-dom';

function Pagination({ countPage, onPage, setOnPage }) {
  const handleClickPage = (page, e) => {
    e.preventDefault();
    setOnPage(page);
  };

  const handleIncreasePage = (e) => {
    e.preventDefault();
    setOnPage((cur) => cur + 1);
  };

  const handleDecreasePage = (e) => {
    e.preventDefault();
    setOnPage((cur) => cur - 1);
  };

  const pagination = new Array(countPage).fill(null).map((item, index) => {
    return (
      <li className={`page-item${index + 1 === onPage ? ' active' : ''}`} key={index}>
        <Link to='#' className='page-link' onClick={(e) => handleClickPage(index + 1, e)}>
          {index + 1}
        </Link>
      </li>
    );
  });

  return (
    <nav>
      <ul className='pagination'>
        <li className={`page-item${onPage === 1 ? ' disabled' : ''}`}>
          <Link to='#' className='page-link' onClick={handleDecreasePage}>
            <span aria-hidden='true'>&laquo;</span>
          </Link>
        </li>
        {pagination}
        <li className={`page-item${onPage === countPage ? ' disabled' : ''}`}>
          <Link to='#' className='page-link' onClick={handleIncreasePage}>
            <span aria-hidden='true'>&raquo;</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Pagination;
