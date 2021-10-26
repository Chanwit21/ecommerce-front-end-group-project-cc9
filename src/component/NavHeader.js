import React from 'react';
import { Link } from 'react-router-dom';
import { useCartContext } from '../context/CartContext';
import Logo from '../pic/icons/mmg-logo.svg';

function NavHeader() {
  const {
    state: { countCart },
  } = useCartContext();
  return (
    <>
      <div className='container-fluid text-center p-1' style={{ backgroundColor: '#FFD6DC' }}>
        FREE SHIPPING WITH ANY ORDER!
      </div>
      <nav className='navbar navbar-expand-lg navbar-light flex-grow-0 shadow-sm'>
        <div className='container'>
          <Link to='/' className='navbar-brand'>
            <img src={Logo} alt='Logo' style={{ width: '13.0625vw' }} />
          </Link>
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
              <li className='nav-item mx-1'>
                <Link className='nav-link active' to='/allProduct/All Product'>
                  ALL
                </Link>
              </li>
              <li className='nav-item mx-1'>
                <Link className='nav-link active' to='/allProduct/face'>
                  FACE
                </Link>
              </li>
              <li className='nav-item mx-1'>
                <Link className='nav-link active' to='/allProduct/sheek'>
                  SHEEK
                </Link>
              </li>
              <li className='nav-item mx-1'>
                <Link className='nav-link active' to='/allProduct/lips'>
                  LIPS
                </Link>
              </li>
              <li className='nav-item mx-1'>
                <Link className='nav-link active' to='/allProduct/eyes'>
                  EYES
                </Link>
              </li>
              <li className='nav-item mx-1'>
                <Link className='nav-link active' to='/allProduct/body'>
                  BODY
                </Link>
              </li>
            </ul>
          </div>
          <div className='collapse navbar-collapse flex-grow-0'>
            <ul className='navbar-nav'>
              <li className='nav-item'>
                <button type='button' className=' btn px-0 position-relative'>
                  <Link className='nav-link active active' to='/login' style={{ opacity: '100%' }}>
                    <i className='bi bi-person-circle'></i>
                  </Link>
                </button>
              </li>
              <li className='nav-item'>
                <Link className='nav-link active' to='#'>
                  <button
                    type='button'
                    className='btn px-0 position-relative'
                    data-bs-toggle='collapse'
                    data-bs-target='#collapseExample'
                  >
                    <i className='bi bi-search'></i>
                  </button>
                </Link>
              </li>
              <li className='nav-item'>
                <button type='button' className='btn px-0 position-relative'>
                  <Link className='nav-link active' to='/favorite'>
                    <i className='bi bi-heart'></i>
                  </Link>
                </button>
              </li>
              <li className='nav-item'>
                <button type='button' className='btn px-0 position-relative'>
                  <Link className='nav-link active' to='/shoppingCart'>
                    <i className='bi bi-handbag'></i>
                    <span
                      className='position-absolute translate-middle badge rounded-pill bg-danger'
                      style={{ left: '85%', top: '30%' }}
                    >
                      {countCart}
                      <span className='visually-hidden'>Cart Count</span>
                    </span>
                  </Link>
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
                <i className='bi bi-search'></i>
              </span>
              <input
                type='text'
                className='form-control border-start-0 border-end-0'
                placeholder='Search'
                style={{ backgroundColor: '#FEF3F5' }}
              />
              <span className='input-group-text' style={{ backgroundColor: '#FEF3F5', borderLeft: 'none' }}>
                <button type='button' className='btn p-0' data-bs-toggle='collapse' data-bs-target='#collapseExample'>
                  <i className='bi bi-x-lg'></i>
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
