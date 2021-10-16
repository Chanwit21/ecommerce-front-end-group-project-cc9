import React from 'react';

const style = {
  footerContainer: { width: '70%', height: '100%' },
};

function Footer() {
  return (
    <div className='flex-grow-0 bg-dark text-light'>
      <div className='container ' style={style.footerContainer}>
        Footer Test
      </div>
    </div>
  );
}

export default Footer;
