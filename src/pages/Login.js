import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { validateEmail, validatePassword } from '../service/validateForm';
import { useAuthContext } from '../context/AuthContext';
import axios from '../config/axios';

function Login() {
  const [loginForm, setLoginForm] = useState({ email: '', password: '' });
  const [errorLoginFrom, setErrorLoginFrom] = useState({ email: '', password: '' });

  const { dispatch } = useAuthContext();

  const handleChangeInput = (field, e) => {
    setLoginForm((cur) => {
      const clone = { ...cur };
      clone[field] = e.target.value;
      return clone;
    });
    setErrorLoginFrom((cur) => {
      const clone = { ...cur };
      clone[field] = '';
      return clone;
    });
  };

  const handleSubmitLogin = async (e) => {
    e.preventDefault();
    const errorEmail = validateEmail(loginForm.email);
    const errorPassword = validatePassword(loginForm.password);

    setErrorLoginFrom({ email: errorEmail, password: errorPassword });

    if (!errorPassword && !errorEmail) {
      try {
        const res = await axios.post('/users/login', { ...loginForm });
        dispatch({ type: 'LOGIN', payload: { token: res.data.token } });
      } catch (err) {
        console.dir(err);
      }
    }
  };

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
        className='bg-white my-5'
        style={{
          width: '28.64583333333333vw',
          boxShadow: '0 0.2083333333333333vw 0.8333333333333333vw #0004',
          borderRadius: '1vw',
        }}
      >
        <div className='pt-5 px-4 pb-3' style={{ width: '80%', margin: '0 auto' }}>
          <h4 className='text-center'>LOG IN</h4>
          <form onSubmit={handleSubmitLogin}>
            <div className='row'>
              <div className='col-12 mt-5 mb-2'>
                <label htmlFor='email' className='mb-1'>
                  Email Address :
                </label>
                <input
                  type='text'
                  className={`form-control${errorLoginFrom.email ? ' is-invalid' : ''}`}
                  id='email'
                  style={{ backgroundColor: '#FEF3F5' }}
                  value={loginForm.email}
                  onChange={(e) => handleChangeInput('email', e)}
                />
                {errorLoginFrom.email ? <div className='invalid-feedback'>{errorLoginFrom.email}</div> : null}
              </div>
              <div className='col-12 mb-4'>
                <label htmlFor='password' className='mb-1'>
                  Password
                </label>
                <input
                  type='text'
                  className={`form-control${errorLoginFrom.password ? ' is-invalid' : ''}`}
                  id='password'
                  style={{ backgroundColor: '#FEF3F5' }}
                  value={loginForm.password}
                  onChange={(e) => handleChangeInput('password', e)}
                />
              </div>
              <div className='col-12 mb-2'>
                <button
                  className='btn btn-dark'
                  style={{ width: '100%', minHeight: '2.083333333333333vw' }}
                  type='submit'
                >
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
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
