import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function SignUp() {
  const [signUpForm, setSignUpForm] = useState({ firstName: '', lastName: '', email: '', password: '' });

  const handleChangeInput = (field, e) => {
    setSignUpForm((cur) => {
      const clone = { ...cur };
      clone[field] = e.target.value;
      return clone;
    });
  };

  return (
    <div
      className='d-flex justify-content-center align-items-center'
      style={{
        background: 'linear-gradient(0deg, #FEFFFF 0%, #FEF3F5 100%)',
        width: '100%',
        height: '70vh',
      }}
    >
      <div
        className='bg-white my-5'
        style={{
          width: '28.64583333333333vw',
          boxShadow: '0 0.2083333333333333vw 0.8333333333333333vw #0004',
          borderRadius: '1vw',
        }}
      >
        <div className='pt-5 px-4 pb-3' style={{ width: '85%', margin: '0 auto' }}>
          <h4 className='text-center'>CREATE YOUR ACCOUNT</h4>
          <div className='row mt-5'>
            <div className='col-6 mt-4 mb-3'>
              <input
                type='text'
                className='form-control'
                style={{ backgroundColor: '#FEF3F5' }}
                placeholder='Firstname'
                value={setSignUpForm.firstName}
                onChange={(e) => handleChangeInput('firstName', e)}
              />
            </div>
            <div className='col-6 mt-4 mb-3'>
              <input
                type='text'
                className='form-control'
                style={{ backgroundColor: '#FEF3F5' }}
                placeholder='Lastname'
              />
            </div>
            <div className='col-12 mb-3'>
              <input
                type='text'
                className='form-control'
                style={{ backgroundColor: '#FEF3F5' }}
                placeholder='Email Address'
              />
            </div>
            <div className='col-6 mb-3'>
              <input
                type='text'
                className='form-control'
                style={{ backgroundColor: '#FEF3F5' }}
                placeholder='Password'
              />
            </div>
            <div className='col-6 mb-3'>
              <input
                type='text'
                className='form-control'
                style={{ backgroundColor: '#FEF3F5' }}
                placeholder='Confirm Password'
              />
            </div>
            <div className='col-12 text-center mb-4'>
              <input className='form-check-input' type='checkbox' value='' id='flexCheckChecked' />
              <label className='form-check-label ms-3' htmlFor='flexCheckChecked'>
                <span style={{ opacity: '50%' }}> I have read the </span> Privace Policy
              </label>
            </div>
            <div className='col-12'>
              <button className='btn btn-dark' style={{ width: '100%', height: '2.083333333333333vw' }} type='button'>
                GET STARTED
              </button>
            </div>
            <button className='btn mb-2'>
              <Link to='/login' className='nav-link text-start' style={{ color: '#000' }}>
                {'<< Back to Login'}
              </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
