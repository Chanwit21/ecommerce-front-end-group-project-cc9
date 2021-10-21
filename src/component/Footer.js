import React from 'react';
import { NavLink } from 'react-router-dom';
import visaIcon from '../pic/icons/294654_visa_icon.svg';
import masterCardIcon from '../pic/icons/380809_card_master_mastercard_icon.svg';
import facebookIcon from '../pic/icons/facebook.png';
import twitterIcon from '../pic/icons/twitter.png';
import pinterestIcon from '../pic/icons/pinterest.png';

const style = {
  footerContainer: { width: '70%', height: '100%' },
};

function Footer() {
  return (
    <div className='flex-grow-0 bg-dark text-light p-3'>
      <div className='container ' style={style.footerContainer}>
        <hr style={{ border: '1px solid #FFFFFF', opacity: '100%' }} />
        <div className='row mb-3 px-3'>
          <div className='col-5'>
            <h4>About the Shop</h4>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book. It has survived not only five centuries.
            </p>
          </div>
          <div className='col-1'></div>
          <div className='col-3'>
            <h4>Help</h4>

            <ul className='navbar-nav'>
              <li className='nav-item'>
                <NavLink to='#' className='nav-link' style={{ color: '#FFFFFF' }}>
                  Terms of Services
                </NavLink>
              </li>
              <li className='nav-item'>
                <NavLink to='#' className='nav-link' style={{ color: '#FFFFFF' }}>
                  Contact Us
                </NavLink>
              </li>
            </ul>
          </div>
          <div className='col-3'>
            <h4>We Accept</h4>
            <img
              src={visaIcon}
              alt='visa'
              style={{ height: '40px', backgroundColor: '#FFF' }}
              className='px-2 rounded'
            />

            <img
              src={masterCardIcon}
              alt='master_card'
              style={{ height: '40px', backgroundColor: '#FFF' }}
              className='p-2 rounded ms-2'
            />
          </div>
        </div>
        <div className='d-flex justify-content-between'>
          <div className='d-flex align-items-end'>&copy; MAKE ME GLOW Cosmetice</div>
          <div>
            <p>Follow Us</p>
            <img src={facebookIcon} alt='facebook' style={{ height: '40px' }} className='p-0 rounded ms-0' />
            <img src={twitterIcon} alt='twitter' style={{ height: '40px' }} className='p-0 rounded ms-3' />
            <img src={pinterestIcon} alt='pinterest' style={{ height: '40px' }} className='p-0 rounded ms-3' />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
