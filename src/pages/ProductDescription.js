import React from 'react'

function ProductDescription() {
  return (
    <div className='productDescriptionPage'>
      <div className="card p-4"> {/* product detial*/}
        <span>Home / Shop / Cheek / Blush</span>
        <div className="row">
          <div className="col-2" style={{ backgroundColor: 'gray' }}>
            <img style={{ width: '100%' }} src='https://cdn.shopify.com/s/files/1/0450/5069/1744/products/Porcelain_400x.jpg?v=1626851297' alt="" />
          </div>
          <div className="col-5" style={{ backgroundColor: 'lightGray' }}>
            <img style={{ width: '100%' }} src='https://cdn.shopify.com/s/files/1/0450/5069/1744/products/Porcelain_400x.jpg?v=1626851297' alt="" />
          </div>
          <div className="col-5" style={{ backgroundColor: 'lightBlue' }}>
            <h6>Seal the Deal Concealer</h6>
            <hr />
            <i class="bi bi-star-fill"></i>
            <i class="bi bi-star-fill"></i>
            <i class="bi bi-star-fill"></i>
            <i class="bi bi-star-fill"></i>
            <i class="bi bi-star-half"></i>
            <p>$PRICE</p>
            <p>Color Shade Name</p>
            <div style={{ width: '50px', height: '50px', backgroundColor: 'lightBlue' }}></div>

          </div>

        </div>
      </div>
      <div>
        <div className="card m-4 p-4"> {/* product info*/}
          <h5>PRODUCT INFO</h5>
          <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio quo eius nostrum dicta assumenda dignissimos! Nulla eius dicta dolorem voluptate consequatur hic harum eaque sapiente, enim repudiandae magnam sed beatae aliquam cum ab aliquid sequi asperiores consequuntur aperiam. Hic, laborum! Nulla quo molestiae, esse eligendi et id quibusdam odit omnis!</span>
        </div>
        <div className="card m-4 p-4"> {/* ingreduents*/}
          <h5>INGREDIENTS</h5>
          <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio quo eius nostrum dicta assumenda dignissimos! Nulla eius dicta dolorem voluptate consequatur hic harum eaque sapiente, enim repudiandae magnam sed beatae aliquam cum ab aliquid sequi asperiores consequuntur aperiam. Hic, laborum! Nulla quo molestiae, esse eligendi et id quibusdam odit omnis!</span>
        </div>
        <div className="card m-4 p-4"> {/*delivery*/}
          <h5>DELIVERY</h5>
          <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio quo eius nostrum dicta assumenda dignissimos! Nulla eius dicta dolorem voluptate consequatur hic harum eaque sapiente, enim repudiandae magnam sed beatae aliquam cum ab aliquid sequi asperiores consequuntur aperiam. Hic, laborum! Nulla quo molestiae, esse eligendi et id quibusdam odit omnis!</span>
        </div>
        <div className="card m-4 p-4"> {/* payment and security*/}
          <h5>{`PAYMENT & SECURITY`}</h5>
          <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio quo eius nostrum dicta assumenda dignissimos! Nulla eius dicta dolorem voluptate consequatur hic harum eaque sapiente, enim repudiandae magnam sed beatae aliquam cum ab aliquid sequi asperiores consequuntur aperiam. Hic, laborum! Nulla quo molestiae, esse eligendi et id quibusdam odit omnis!</span>
        </div>
      </div>
    </div>
  )
}

export default ProductDescription
