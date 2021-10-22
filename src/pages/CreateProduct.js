import React from 'react';

function CreateProduct() {
  return (
    <div
      className='d-flex justify-content-center'
      style={{
        background: '#FEF3F5',
        width: '100%',
        minHeight: '70vh',
      }}
    >
      <div className='container bg-white d-flex justify-content-center' style={{ minHeight: '100%', width: '76%' }}>
        <div style={{ width: '70%' }}>
          <div className='row mt-5 mb-5'>
            <div className='col-12 mb-5'>
              <h3 style={{ textAlign: 'center' }}>CREATE NEW PRODUCT</h3>
            </div>
            <div className='col-12 mb-2'>
              <label htmlFor='firstName' className='form-label'>
                Product Name
              </label>
              <input type='text' id='firstName' className='form-control' />
            </div>
            <div className='col-6 mb-2'>
              <label htmlFor='price' className='form-label'>
                Price
              </label>
              <input type='text' id='price' className='form-control' />
            </div>
            <div className='col-6 mb-2'>
              <label htmlFor='quantity' className='form-label'>
                Quantity
              </label>
              <input type='text' id='quantity' className='form-control' />
            </div>
            <div className='col-12 mb-2'>
              <label htmlFor='category' className='form-label'>
                Category
              </label>
              <input type='text' id='category' className='form-control' />
            </div>
            <div className='col-6 mb-2'>
              <label htmlFor='colorName' className='form-label'>
                Options - Color Name
              </label>
              <input type='text' id='colorName' className='form-control' />
            </div>
            <div className='col-6 mb-2'>
              <label htmlFor='colorCode' className='form-label'>
                Options - Color Code #
              </label>
              <input type='text' id='colorCode' className='form-control' />
            </div>
            <div className='col-12 mb-2'>
              <label htmlFor='description' className='form-label'>
                Description
              </label>
              <textarea className='form-control' id='description' style={{ height: '11.45833333333333vw' }}></textarea>
            </div>
            <div className='col-12 mb-2'>
              <label htmlFor='ingredients' className='form-label'>
                Ingredients
              </label>
              <textarea className='form-control' id='ingredients' style={{ height: '11.45833333333333vw' }}></textarea>
            </div>
            <div className='col-12 mt-3 d-flex justify-content-center'>
              <button className='btn btn-dark' style={{ minWidth: '9.375vw', minHeight: '2.604166666666667vw' }}>
                SAVE
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateProduct;
