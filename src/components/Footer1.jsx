import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import { NavLink } from 'react-router-dom';

export default function Footer1() {
  return (
    <MDBFooter bgColor='light' className='text-center text-lg-start text-muted'>
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'></section>
      <section className=''>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>
                Heikala
              </h6>
              <div class='footercolor'>
                <a>
                Thank you for visiting the website! Please contact us if you need any information.
                </a>
              </div>
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
              <div className='footercolor'>

              <h6 className='text-uppercase fw-bold mb-4'>Shop</h6>
              
                <a href="/Prints" as={NavLink} className='text-reset'>
                  Prints
                </a>
              
              <div className='footercolor'>
                <a href="/ArtSupplies" as={NavLink} className='text-reset'>
                  Art Supplies
                </a>
              </div>

              <div className='footercolor'>
                <a href="/Books" as={NavLink} className='text-reset'>
                  Books
                </a>
              </div>
              </div>
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Information</h6>
              <div className='footercolor'>
                <a href="/AboutH" as={NavLink} className='text-reset'>
                  About Heikala
                </a>
              </div>
              <div className='footercolor'>
                <a href="/Shipping" as={NavLink} className='text-reset'>
                  Shipping
                </a>
              </div>
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
              <div className='footercolor'>
                <a>
                  Finland, Oulu
                </a>
              </div>
              <div className='footercolor'>
                <a>
                heikala.contact@info.com
                </a>
              </div>
              <div className='footercolor'>
                <a>+ 01 234 567 88</a>
              </div>
              <div>
                <a>+ 01 234 567 89</a>
              </div>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2022
      </div>
    </MDBFooter>
  );
}