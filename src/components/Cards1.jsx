import React from 'react';
import {
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardGroup
} from 'mdb-react-ui-kit';
import imagencard1 from '../card1.jpg'
import imagencard2 from '../card2.jpg'
import imagencard3 from '../card3.jpg'

export default function Cards1() {
  return (
    <MDBCardGroup>
      <MDBCard>
        <MDBCardImage style={{padding: 45, alignSelf: 'flex-start'}}
        src={imagencard1} alt='...' position='top'/>
        <MDBCardBody>
          <MDBCardTitle>Art Supply Boxes</MDBCardTitle><br></br>
          <a>
            The Heikala Art Suppy Boxes will soon be available.
          </a>
        </MDBCardBody>
      </MDBCard>
      <MDBCard>
        <MDBCardImage style={{padding: 45, alignSelf: 'flex-start'}}
        src={imagencard2} alt='...' position='top' />
        <MDBCardBody>
          <MDBCardTitle>New Promotion</MDBCardTitle><br></br>
          <a>
            Buy any 2 prints and get 1 print of your choice for free.
          </a>
        </MDBCardBody>
      </MDBCard>

      <MDBCard>
        <MDBCardImage style={{padding: 45, alignSelf: 'flex-start'}}
        src={imagencard3} alt='...' position='top' />
        <MDBCardBody>
          <MDBCardTitle>Stamp washi tapes</MDBCardTitle><br></br>
          <a>New stamp washi tapes are available in the shop! </a>
        </MDBCardBody>
      </MDBCard>
    </MDBCardGroup>
  );
}