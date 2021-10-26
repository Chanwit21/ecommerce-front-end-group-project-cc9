import React from 'react'
import AdminHeader from '../component/AdminHeader'

function AdminOrderSummary() {
  return (
    <div>
      <div className='userOrderSummary'>
        <AdminHeader />
        <div className="container" style={{ marginTop: '50px', width: '50vw' }}>
          <h5>20211023110532</h5>
          <div className="container" style={{ margin: '50px 0px ' }}>
            <div className="row">
              <div className="col-6 pe-5">
                <div className="d-flex justify-content-between align-items-center">
                  <span style={{ fontSize: '24px', fontWeight: 'bold' }}>ORDER SUMMARY</span>
                  <span className="badge py-2" style={{ padding: '0px 2vw', backgroundColor: '#E5F7EA', color: '#05B535' }}>To Ship</span>
                </div>
                <hr />
                <div className="row my-4">
                  <div className="col-2">
                    <img style={{ width: '90px', height: '90px' }} src='https://cdn.shopify.com/s/files/1/0450/5069/1744/products/1.1_400x.jpg?v=1628594753' alt="" />
                  </div>
                  <div className="col-8" style={{ padding: '0px 70px' }}>
                    <p style={{ fontSize: '14px', fontWeight: 'bold' }}>Product Name</p>
                    <p style={{ fontSize: '14px' }}>Shade</p>
                    <p style={{ fontSize: '14px' }}>Qty: 1</p>
                  </div>
                  <div className="col-2">
                    <div className="d-flex justify-content-end align-items-end h-100">
                      <span style={{ fontSize: '18px', fontWeight: 'bold' }}>$50</span>
                    </div>
                  </div>
                </div>
                <div className='dashedLine' style={{ opacity: '0.25' }} ></div>
                <div className="d-flex justify-content-between my-4">
                  <span style={{ fontSize: '18px', fontWeight: 'bold' }}>SUBTOTAL</span>
                  <span style={{ fontSize: '18px', fontWeight: 'bold' }}>$150</span>
                </div>
                <div className="d-flex justify-content-between my-4">
                  <span style={{ fontSize: '18px', fontWeight: 'bold' }}>SHIPPING</span>
                  <span style={{ fontSize: '18px', fontWeight: 'bold' }}>FREE</span>
                </div>
                <hr />
                <div className="d-flex justify-content-between my-4">
                  <span style={{ fontSize: '18px', fontWeight: 'bold' }}>TOTAL</span>
                  <span style={{ fontSize: '18px', fontWeight: 'bold' }}>$150</span>
                </div>

              </div>
              <div className="col-6 ps-5">
                <p style={{ fontSize: '24px', fontWeight: 'bold' }}>SHIPPING ADDRESS</p>

                <hr />
                <div>
                  <p className='m-0' style={{ fontSize: '16px' }}>JOHN DOE</p>
                  <p className='m-0' style={{ fontSize: '16px' }}>099-999-9999</p>
                  <p className='m-0' style={{ fontSize: '16px' }}>12/345 MMG VILLA, LADPRAO ROAD, WANGTHINGLANG,</p>
                  <p className='m-0' style={{ fontSize: '16px' }}>BANGKOK 10310</p>
                </div>
                <div style={{ fontSize: '14px', marginTop: '20px', width: '20vw', padding: '10px 0px' }} className="badge bg-dark">CUSTOMER@GMAIL.COM</div>
                <p style={{ fontSize: '24px', fontWeight: 'bold', marginTop: '50px' }}>PAYMENT</p>
                <hr />
                <p>PAID BY: CREDITS CARD</p>
                <p style={{ fontSize: '24px', fontWeight: 'bold', marginTop: '50px' }}>DELIVERY</p>
                <hr />
                <p>TRACKING NUMBER: RF12459514TH</p>
              </div>
            </div>
          </div>
        </div>
      </div >
    </div>
  )
}

export default AdminOrderSummary
