import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';

export default function Footer1() {
  return (
    <MDBFooter bgColor='light' className='text-center text-lg-start text-muted'>
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'></section>
      <section className=''>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>
                <MDBIcon icon="gem" className="me-3" />
                Company name
              </h6>
              <div class='footercolor'>
              
              
                Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit amet,
                consectetur adipisicing elit.
              
              </div>
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
              <div className='footercolor'>

              <h6 className='text-uppercase fw-bold mb-4'>Products</h6>
              
                <a href='#!' className='text-reset'>
                  Angular
                </a>
              
              <div className='footercolor'>
                <a href='#!' className='text-reset'>
                  React
                </a>
              </div>

              <div className='footercolor'>
                <a href='#!' className='text-reset'>
                  Vue
                </a>
              </div>
              <div className='footercolor'>
                <a href='#!' className='text-reset'>
                  Laravel
                </a>
              </div>
              </div>
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Useful links</h6>
              <div className='footercolor'>
                <a href='#!' className='text-reset'>
                  Pricing
                </a>
              </div>
              <div className='footercolor'>
                <a href='#!' className='text-reset'>
                  Settings
                </a>
              </div>
              <div className='footercolor'>
                <a href='#!' className='text-reset'>
                  Orders
                </a>
              </div>
              <div className='footercolor'>
                <a href='#!' className='text-reset'>
                  Help
                </a>
              </div>
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
              <div className='footercolor'>
                <MDBIcon icon="home" className="me-2" />
                New York, NY 10012, US
              </div>
              <div className='footercolor'>
                <MDBIcon icon="envelope" className="me-3" />
                info@example.com
              </div>
              <div className='footercolor'>
                <MDBIcon icon="phone" className="me-3" /> + 01 234 567 88
              </div>
              <div>
                <MDBIcon icon="print" className="me-3" /> + 01 234 567 89
              </div>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2021 Copyright:
        <a className='text-reset fw-bold' href='https://mdbootstrap.com/'>
          MDBootstrap.com
        </a>
      </div>
    </MDBFooter>
  );
}