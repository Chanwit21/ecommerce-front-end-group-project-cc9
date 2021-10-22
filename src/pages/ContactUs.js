import React, { useEffect } from 'react';

function ContactUs() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div
      className='d-flex justify-content-center align-items-center'
      style={{
        background: 'linear-gradient(0deg, #FEFFFF 0%, #FEF3F5 100%)',
        width: '100%',
        minHeight: '70vh',
      }}
    >
      <div
        className='my-5 p-5'
        style={{
          width: '39.0625vw',
          backgroundColor: '#FFFC',
          borderRadius: '0.8333333333333333vw',
          boxShadow: '0 1.041666666666667vw 1.354166666666667vw #0001,0 8px 9px #0001',
        }}
      >
        <div className='row'>
          <div className='col-12 mb-4'>
            <h3 className='text-center' style={{ opacity: '50%' }}>
              CONTACT US
            </h3>
          </div>
          <div className='col-6 mb-4'>
            <label htmlFor='firstName' className='mb-1'>
              First Name
            </label>
            <input type='text' className={`form-control`} id='firstName' placeholder='First Name' />
          </div>
          <div className='col-6 mb-4'>
            <label htmlFor='lastName' className='mb-1'>
              Last Name
            </label>
            <input type='text' className={`form-control`} id='lastName' placeholder='Last Name' />
          </div>
          <div className='col-12 mb-4'>
            <label htmlFor='email' className='mb-1'>
              Email Adress
            </label>
            <input type='text' className={`form-control`} id='email' placeholder='Email Adress' />
          </div>
          <div className='col-12 mb-4'>
            <label htmlFor='message' className='mb-1'>
              Your message
            </label>
            <textarea
              className='form-control'
              id='message'
              style={{ height: '5.520833333333333vw' }}
              placeholder='Message here...'
            ></textarea>
          </div>
          <div className='col-12 mb-4'>
            <button className='btn btn-dark' style={{ width: '100%' }}>
              SEND MESSAGE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
