import React from 'react';
import '../css/FilterProduct.css';

function FilterProduct() {
  return (
    <div style={{ width: '100%' }} className='FilterProduct'>
      <h3 className='mb-3'>FILTERS</h3>

      <div className='accordion' id='accordionFilterProduct'>
        <div className='accordion-item'>
          <h2 className='accordion-header' id='face'>
            <button
              className='accordion-button collapsed'
              type='button'
              data-bs-toggle='collapse'
              data-bs-target='#accordiotFace'
              aria-expanded='false'
              aria-controls='accordiotFace'
            >
              FACE
            </button>
          </h2>
          <div id='accordiotFace' className='accordion-collapse collapse' aria-labelledby='face'>
            <div className='accordion-body'>
              <div className='d-flex justify-content-between mb-2'>
                <label className='form-check-label' for='foundation'>
                  Foundation
                </label>
                <input className='form-check-input' type='checkbox' id='foundation' />
              </div>
              <div className='d-flex justify-content-between mb-2'>
                <label className='form-check-label' for='powder'>
                  Powder
                </label>
                <input className='form-check-input' type='checkbox' id='powder' />
              </div>
              <div className='d-flex justify-content-between mb-2'>
                <label className='form-check-label' for='concealer'>
                  Concealer
                </label>
                <input className='form-check-input' type='checkbox' id='concealer' />
              </div>
              <div className='d-flex justify-content-between mb-2'>
                <label className='form-check-label' for='primer'>
                  Primer
                </label>
                <input className='form-check-input' type='checkbox' id='primer' />
              </div>
            </div>
          </div>
        </div>
        <div className='accordion-item'>
          <h2 className='accordion-header' id='panelsStayOpen-headingTwo'>
            <button
              className='accordion-button collapsed'
              type='button'
              data-bs-toggle='collapse'
              data-bs-target='#accordionSheek'
              aria-expanded='false'
              aria-controls='accordionSheek'
            >
              SHEEK
            </button>
          </h2>
          <div id='accordionSheek' className='accordion-collapse collapse' aria-labelledby='panelsStayOpen-headingTwo'>
            <div className='accordion-body'>
              <div className='d-flex justify-content-between mb-2'>
                <label className='form-check-label' for='blush'>
                  Blush
                </label>
                <input class='form-check-input' type='checkbox' id='blush' />
              </div>
              <div className='d-flex justify-content-between mb-2'>
                <label className='form-check-label' for='bronzer'>
                  Bronzer
                </label>
                <input className='form-check-input' type='checkbox' id='bronzer' />
              </div>
              <div className='d-flex justify-content-between mb-2'>
                <label className='form-check-label' for='hightlighter'>
                  Hightlighter
                </label>
                <input className='form-check-input' type='checkbox' id='hightlighter' />
              </div>
            </div>
          </div>
        </div>
        <div className='accordion-item'>
          <h2 className='accordion-header' id='panelsStayOpen-headingThree'>
            <button
              className='accordion-button collapsed'
              type='button'
              data-bs-toggle='collapse'
              data-bs-target='#accordionLips'
              aria-expanded='false'
              aria-controls='accordionLips'
            >
              LIPS
            </button>
          </h2>
          <div id='accordionLips' className='accordion-collapse collapse' aria-labelledby='panelsStayOpen-headingThree'>
            <div className='accordion-body'>
              <div className='d-flex justify-content-between mb-2'>
                <label className='form-check-label' for='liquidLipstick'>
                  Liquid Lipstick
                </label>
                <input class='form-check-input' type='checkbox' id='liquidLipstick' />
              </div>
              <div className='d-flex justify-content-between mb-2'>
                <label className='form-check-label' for='lipstick'>
                  Lipstick
                </label>
                <input className='form-check-input' type='checkbox' id='lipstick' />
              </div>
              <div className='d-flex justify-content-between mb-2'>
                <label className='form-check-label' for='lipLiner'>
                  Lip Liner
                </label>
                <input className='form-check-input' type='checkbox' id='lipLiner' />
              </div>
              <div className='d-flex justify-content-between mb-2'>
                <label className='form-check-label' for='lipBlam'>
                  Lip Blam
                </label>
                <input className='form-check-input' type='checkbox' id='lipBlam' />
              </div>
            </div>
          </div>
        </div>
        <div className='accordion-item'>
          <h2 className='accordion-header' id='panelsStayOpen-headingFour'>
            <button
              className='accordion-button collapsed'
              type='button'
              data-bs-toggle='collapse'
              data-bs-target='#accordionEyes'
              aria-expanded='false'
              aria-controls='accordionEyes'
            >
              EYES
            </button>
          </h2>
          <div id='accordionEyes' className='accordion-collapse collapse' aria-labelledby='panelsStayOpen-headingThree'>
            <div className='accordion-body'>
              <div className='d-flex justify-content-between mb-2'>
                <label className='form-check-label' for='eyeshadow'>
                  Eyeshadow
                </label>
                <input class='form-check-input' type='checkbox' id='eyeshadow' />
              </div>
              <div className='d-flex justify-content-between mb-2'>
                <label className='form-check-label' for='eyebrows'>
                  Eyebrows
                </label>
                <input className='form-check-input' type='checkbox' id='eyebrows' />
              </div>
              <div className='d-flex justify-content-between mb-2'>
                <label className='form-check-label' for='eyeliner'>
                  Eyeliner
                </label>
                <input className='form-check-input' type='checkbox' id='eyeliner' />
              </div>
              <div className='d-flex justify-content-between mb-2'>
                <label className='form-check-label' for='mascrara'>
                  Mascrara
                </label>
                <input className='form-check-input' type='checkbox' id='mascrara' />
              </div>
            </div>
          </div>
        </div>
        <div className='accordion-item'>
          <h2 className='accordion-header' id='panelsStayOpen-headingFive'>
            <button
              className='accordion-button collapsed'
              type='button'
              data-bs-toggle='collapse'
              data-bs-target='#accordionBody'
              aria-expanded='false'
              aria-controls='accordionBody'
            >
              BODY
            </button>
          </h2>
          <div id='accordionBody' className='accordion-collapse collapse' aria-labelledby='panelsStayOpen-headingThree'>
            <div className='accordion-body'>
              <div className='d-flex justify-content-between mb-2'>
                <label className='form-check-label' for='bodyMakeup'>
                  Body Makeup
                </label>
                <input class='form-check-input' type='checkbox' id='bodyMakeup' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FilterProduct;
