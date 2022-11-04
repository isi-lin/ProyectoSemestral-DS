import React from 'react';
import {
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardGroup
} from 'mdb-react-ui-kit';
import imagencollab1 from '../imagencollab1.jpeg'
import imagencollab2 from '../imagencollab2.jpeg'
import imagencollab3 from '../imagencollab3.jpeg'

export default function Cards2() {
  return (
    <MDBCardGroup>
      <MDBCard>
        <MDBCardImage style={{padding: 45, alignSelf: 'flex-start'}}
        src={imagencollab1} alt='...' position='top'/>
        <MDBCardBody>
          <MDBCardTitle>Wabi Sabi</MDBCardTitle><br></br>
          <a>
          Rayn Camus's first album, cover illustration by Heikala.
            </a>
        </MDBCardBody>
      </MDBCard>
      <MDBCard>
        <MDBCardImage style={{padding: 45, alignSelf: 'flex-start'}}
        src={imagencollab2} alt='...' position='top' />
        <MDBCardBody>
          <MDBCardTitle>Mono no Aware</MDBCardTitle><br></br>
          <a>
          Cover illustration by Heikala for Rayn Camus's second album.
          </a>
        </MDBCardBody>
      </MDBCard>

      <MDBCard>
        <MDBCardImage style={{padding: 45, alignSelf: 'flex-start'}}
        src={imagencollab3} alt='...' position='top' />
        <MDBCardBody>
          <MDBCardTitle>Mossery</MDBCardTitle><br></br>
          <a>
            Notebooks, Planners and Sketchbooks covers by Heikala's original illustrations.
            </a>
        </MDBCardBody>
      </MDBCard>
    </MDBCardGroup>
    
  );
}