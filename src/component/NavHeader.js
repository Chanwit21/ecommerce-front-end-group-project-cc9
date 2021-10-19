import React from 'react';
import { NavLink } from 'react-router-dom';

function NavHeader() {
  return (
    <>
      <div className='container-fluid text-center' style={{ backgroundColor: '#FAF2F4' }}>
        free shipping with any order!
      </div>
      <nav className='navbar navbar-expand-lg navbar-light flex-grow-0 shadow-sm'>
        <div className='container'>
          <NavLink to='/' className='navbar-brand'>
            MAKE ME GLOW
          </NavLink>
          <button
            className='navbar-toggler'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#navbarNavDropdown'
            aria-controls='navbarNavDropdown'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span className='navbar-toggler-icon'></span>
          </button>
          <div className='collapse navbar-collapse flex-grow-0' id='navbarNavDropdown'>
            <ul className='navbar-nav'>
              <li className='nav-item'>
                <NavLink className='nav-link' to='#'>
                  NEW
                </NavLink>
              </li>
              <li className='nav-item'>
                <NavLink className='nav-link' to='#'>
                  FACE
                </NavLink>
              </li>
              <li className='nav-item'>
                <NavLink className='nav-link' to='#'>
                  CHEEK
                </NavLink>
              </li>
              <li className='nav-item'>
                <NavLink className='nav-link' to='#'>
                  LIPS
                </NavLink>
              </li>
              <li className='nav-item'>
                <NavLink className='nav-link' to='#'>
                  EYES
                </NavLink>
              </li>
              <li className='nav-item'>
                <NavLink className='nav-link' to='#'>
                  BODY
                </NavLink>
              </li>
              <li className='nav-item'>
                <NavLink className='nav-link' to='#'>
                  SALE
                </NavLink>
              </li>
            </ul>
          </div>
          <div className='collapse navbar-collapse flex-grow-0'>
            <ul className='navbar-nav'>
              <li className='nav-item'>
                <NavLink className='nav-link' to='#'>
                  <button type='button' className=' btn px-0 position-relative'>
                    <i class='bi bi-person-circle'></i>
                  </button>
                </NavLink>
              </li>
              <li className='nav-item'>
                <NavLink className='nav-link' to='#'>
                  <button type='button' className='btn px-0 position-relative'>
                    <i class='bi bi-search'></i>
                  </button>
                </NavLink>
              </li>
              <li className='nav-item'>
                <NavLink className='nav-link' to='#'>
                  <button type='button' className='btn px-0 position-relative'>
                    <i class='bi bi-heart'></i>
                  </button>
                </NavLink>
              </li>
              <li className='nav-item'>
                <NavLink className='nav-link' to='#'>
                  <button type='button' className='btn px-0 position-relative'>
                    <i className='bi bi-handbag'></i>
                    <span
                      className='position-absolute translate-middle badge rounded-pill bg-danger'
                      style={{ left: '140%', top: '10%' }}
                    >
                      0<span className='visually-hidden'>Cart Count</span>
                    </span>
                  </button>
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavHeader;
