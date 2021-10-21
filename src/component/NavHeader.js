import React from 'react';
import { Link, NavLink } from 'react-router-dom';

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
                <button type='button' className=' btn px-0 position-relative'>
                  <Link className='nav-link active' to='/login' style={{ opacity: '100%' }}>
                    <i class='bi bi-person-circle'></i>
                  </Link>
                </button>
              </li>
              <li className='nav-item'>
                <NavLink className='nav-link' to='#'>
                  <button
                    type='button'
                    className='btn px-0 position-relative'
                    data-bs-toggle='collapse'
                    data-bs-target='#collapseExample'
                  >
                    <i class='bi bi-search'></i>
                  </button>
                </NavLink>
              </li>
              <li className='nav-item'>
                <button type='button' className='btn px-0 position-relative'>
                  <NavLink className='nav-link' to='#'>
                    <i class='bi bi-heart'></i>
                  </NavLink>
                </button>
              </li>
              <li className='nav-item'>
                <button type='button' className='btn px-0 position-relative'>
                  <NavLink className='nav-link' to='#'>
                    <i className='bi bi-handbag'></i>
                    <span
                      className='position-absolute translate-middle badge rounded-pill bg-danger'
                      style={{ left: '85%', top: '30%' }}
                    >
                      0<span className='visually-hidden'>Cart Count</span>
                    </span>
                  </NavLink>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className='collapse container border-0' id='collapseExample'>
        <form>
          <div className='d-flex flex-row'>
            <div className='input-group my-3'>
              <span className='input-group-text border-end-0' style={{ backgroundColor: '#FEF3F5' }}>
                <i class='bi bi-search'></i>
              </span>
              <input
                type='text'
                className='form-control border-start-0 border-end-0'
                placeholder='Search'
                style={{ backgroundColor: '#FEF3F5' }}
              />
              <span className='input-group-text' style={{ backgroundColor: '#FEF3F5', borderLeft: 'none' }}>
                <button type='button' className='btn p-0' data-bs-toggle='collapse' data-bs-target='#collapseExample'>
                  <i class='bi bi-x-lg'></i>
                </button>
              </span>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default NavHeader;
