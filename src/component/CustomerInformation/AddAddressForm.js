import React from 'react';

function AddAddressForm({ setIsAddingAddress }) {
  const handleClickBack = () => {
    setIsAddingAddress(false);
  };
  return (
    <div className='mt-5' style={{ width: '90%' }}>
      <h4>SHIPPING ADDRESS</h4>
      <form>
        <div className='row mt-4'>
          <div className='mb-3 col-6'>
            <input type='text' className='form-control border-dark' placeholder='Firstname ' />
          </div>
          <div className='mb-3 col-6'>
            <input type='text' className='form-control border-dark' placeholder='Lastname' />
          </div>
          <div className='mb-3 col-12'>
            <input type='text' className='form-control border-dark' placeholder='Address 1' />
          </div>
          <div className='mb-3 col-12'>
            <input type='text' className='form-control border-dark' placeholder='Address 2' />
          </div>
          <div className='mb-3 col-6'>
            <select className='form-select border-dark' aria-label='Default select example'>
              <option selected>Province</option>
              <option value='1'>One</option>
              <option value='2'>Two</option>
              <option value='3'>Three</option>
            </select>
          </div>
          <div className='mb-3 col-6'>
            <select className='form-select border-dark' aria-label='Default select example'>
              <option selected>District</option>
              <option value='1'>One</option>
              <option value='2'>Two</option>
              <option value='3'>Three</option>
            </select>
          </div>
          <div className='mb-3 col-6'>
            <select className='form-select border-dark' aria-label='Default select example'>
              <option selected>Sub District</option>
              <option value='1'>One</option>
              <option value='2'>Two</option>
              <option value='3'>Three</option>
            </select>
          </div>
          <div className='mb-3 col-6'>
            <input type='text' className='form-control border-dark' placeholder='Postal Code' readOnly />
          </div>
          <div className='mb-3 col-6'>
            <input type='text' className='form-control border-dark' placeholder='Phone' />
          </div>
        </div>
      </form>
      <button type='button' className='btn' onClick={handleClickBack}>
        {'< Back To Choose Address'}
      </button>
    </div>
  );
}

export default AddAddressForm;
