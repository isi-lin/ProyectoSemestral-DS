import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import imagen1 from '../logo2.png'

function HeaderAndFooterExample() {
  return (
    <Card className="text-center">
      <Card.Body>
      <img
              alt=""
              src={imagen1}
              width="190"
              height="170"
              className="d-inline-block align-top"
            />
        <Card.Title>Shipping</Card.Title><br></br>
         <a>
         We ship orders as fast as we can, but during big product launches or sales campaigns we may take longer than usual to get to your order. Thank you for understanding!
        </a><br></br><br></br>
      </Card.Body>
    </Card>
  );
}

export default HeaderAndFooterExample;