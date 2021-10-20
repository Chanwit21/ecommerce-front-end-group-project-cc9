import React from 'react';
import { Link } from 'react-router-dom';

function Login() {
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
        <div className='pt-5 px-4 pb-3' style={{ width: '80%', margin: '0 auto' }}>
          <h4 className='text-center'>LOG IN</h4>
          <div className='row'>
            <div className='col-12 mt-5 mb-2'>
              <label htmlFor='email' className='mb-1'>
                Email Address :
              </label>
              <input type='text' className='form-control' id='email' style={{ backgroundColor: '#FEF3F5' }} />
            </div>
            <div className='col-12 mb-4'>
              <label htmlFor='password' className='mb-1'>
                Password
              </label>
              <input type='text' className='form-control' id='password' style={{ backgroundColor: '#FEF3F5' }} />
            </div>
            <div className='col-12 mb-2'>
              <button className='btn btn-dark' style={{ width: '100%', height: '2.083333333333333vw' }} type='button'>
                SIGN IN
              </button>
            </div>
            <div className='col-6 mb-2 d-flex justify-content-end mt-2'>
              <button className='btn px-0' type='button'>
                <img src='https://img.icons8.com/color/48/000000/google-logo.png' alt='google' />
              </button>
            </div>
            <div className='col-6 mb-2 d-flex justify-content-start mt-2'>
              <button className='btn px-0' type='button'>
                <img src='https://img.icons8.com/color/48/000000/facebook-circled--v1.png' alt='facebook' />
              </button>
            </div>
            <div className='col-12 text-center mb-4'>
              <div>
                <span style={{ opacity: '75%' }}>ALREADY HAVE AN ACCOUNT?</span>&nbsp;&nbsp;
                <Link to='/sign_up' style={{ textDecoration: 'none', color: '#000' }}>
                  SIGN UP
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
