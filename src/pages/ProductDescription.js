import React from 'react';

function ProductDescription() {
  return (
    <div className='productDescriptionPage'>
      <div className="card p-4" style={{ backgroundImage: `linear-gradient(180deg, #FEF3F5 13.02%, rgba(251, 243, 245, 0) 100%)` }}> {/* product detial*/}
        <span className='fs-6'>Home / Shop / Cheek / Blush</span>
        <div className="row my-5">
          <div className="col-1" >
            <img className='mb-2' style={{ width: '100%' }} src='https://cdn.shopify.com/s/files/1/0450/5069/1744/products/Porcelain_400x.jpg?v=1626851297' alt="" />
            <img className='mb-2' style={{ width: '100%' }} src='https://cdn.shopify.com/s/files/1/0450/5069/1744/products/Porcelain_400x.jpg?v=1626851297' alt="" />
            <img className='mb-2' style={{ width: '100%' }} src='https://cdn.shopify.com/s/files/1/0450/5069/1744/products/Porcelain_400x.jpg?v=1626851297' alt="" />
            <img className='mb-2' style={{ width: '100%' }} src='https://cdn.shopify.com/s/files/1/0450/5069/1744/products/Porcelain_400x.jpg?v=1626851297' alt="" />
            <img className='mb-2' style={{ width: '100%' }} src='https://cdn.shopify.com/s/files/1/0450/5069/1744/products/Porcelain_400x.jpg?v=1626851297' alt="" />
          </div>
          <div className="col-5" >
            <img style={{ width: '100%' }} src='https://cdn.shopify.com/s/files/1/0450/5069/1744/products/Porcelain_400x.jpg?v=1626851297' alt="" />
          </div>
          <div className="col-6" >
            <h5>Seal the Deal Concealer</h5>
            <hr className='m-0' />
            <div className='m-0'>
              <i className="bi bi-star-fill"></i>
              <i className="bi bi-star-fill"></i>
              <i className="bi bi-star-fill"></i>
              <i className="bi bi-star-fill"></i>
              <i className="bi bi-star-half"></i>
            </div>
            <p className='mt-4 fw-bold'>$50</p>
            <p>Color Shade Name</p>
            <div className="d-flex">
              <div className='me-2' style={{ width: '50px', height: '50px', backgroundColor: '#F6C5B1' }}></div>
              <div className='me-2' style={{ width: '50px', height: '50px', backgroundColor: '#A85E5B' }}></div>
              <div className='me-2' style={{ width: '50px', height: '50px', backgroundColor: '#703840' }}></div>
            </div>
            <div className='d-flex align-items-center my-4'>
              <div className='border border-dark'>
                <button className='btn'>-</button>
                <span>1</span>
                <button className='btn'>+</button>
              </div>
              <button className='btn btn-dark mx-2'>ADD TO CART</button>
              <button className='btn border border-dark mx-2'><i className="bi bi-heart"></i></button>
            </div>
          </div>
        </div>
      </div>
      <div className='p-4' style={{ backgroundColor: '#FEF6F8' }}>
        <div className="accordion" id="accordionPanelsStayOpenExample">
          <div className="card "> {/* product info*/}
            <div className="accordion-item">
              <h2 className="accordion-header" id="panelsStayOpen-headingOne">
                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                  <h5>PRODUCT INFO</h5>
                </button>
              </h2>
              <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
                <div className="accordion-body">
                  <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                </div>
              </div>
            </div>
          </div>
          <div className="card my-4"> {/* ingreduents*/}
            <div className="accordion-item">
              <h2 className="accordion-header" id="panelsStayOpen-headingOne">
                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="true" aria-controls="panelsStayOpen-collapseTwo">
                  <h5>INGREDIENTS</h5>
                </button>
              </h2>
              <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
                <div className="accordion-body">
                  <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                </div>
              </div>
            </div>
          </div>
          <div className="card my-4"> {/*delivery*/}
            <div className="accordion-item">
              <h2 className="accordion-header" id="panelsStayOpen-headingOne">
                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="true" aria-controls="panelsStayOpen-collapseThree">
                  <h5>DELIVERY</h5>
                </button>
              </h2>
              <div id="panelsStayOpen-collapseThree" className="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
                <div className="accordion-body">
                  <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                </div>
              </div>
            </div>
          </div>
          <div className="card my-4"> {/* payment and security*/}
            <div className="accordion-item">
              <h2 className="accordion-header" id="panelsStayOpen-headingOne">
                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseFour" aria-expanded="true" aria-controls="panelsStayOpen-collapseFour">
                  <h5>{`PAYMENT & SECURITY`}</h5>
                </button>
              </h2>
              <div id="panelsStayOpen-collapseFour" className="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
                <div className="accordion-body">
                  <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>



    </div >
  )
}

export default ProductDescription;
