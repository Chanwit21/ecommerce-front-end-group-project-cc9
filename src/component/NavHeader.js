import React from 'react';
import { NavLink } from 'react-router-dom';

const style = {
  nav: { height: '5vw' },
  navHeader: { width: '70%', height: '100%' },
  veticalLine: { height: '1.7vw', opacity: '40%' },
};

function NavHeader() {
  return (
    <nav className='navbar navbar-expand-lg navbar-light bg-dark flex-grow-0' style={style.nav}>
      <div className='container' style={style.navHeader}>
        <NavLink className='navbar-brand color-light text-light' to='#'>
          Navbar
        </NavLink>
        <form className='d-flex flex-grow-1'>
          <div className='input-group'>
            <input className='form-control' type='search' placeholder='Search' />
            <button className='btn btn-outline-success' type='submit'>
              <i class='bi bi-search'></i>
            </button>
          </div>
        </form>
        <ul className='navbar-nav d-flex justify-content-center align-items-center'>
          <li className='nav-item'>
            <NavLink className='nav-link dropdown-toggle text-light' to='#'>
              Login / Register
            </NavLink>
          </li>
          <li className='nav-item border-end' style={style.veticalLine}></li>
          <li className='nav-item'>
            <NavLink className='nav-link text-light' to='#'>
              <i className='bi bi-cart-fill me-2'></i>
              Cart
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavHeader;
