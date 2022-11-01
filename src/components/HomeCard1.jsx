import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import imagen1 from '../logo2.png'

function HeaderAndFooterExample() {
  return (
    <Card className="text-center">
      <Card.Body>
        <h2>¡Welcome!</h2>
        <a>This page is dedicated to Heikala's art and illustrations!</a><br></br>
        <a>Here you can find information about Heikala, her art, colaborations and support her by checking out the available products in the shop.</a>
      </Card.Body>
    </Card>
  );
}

export default HeaderAndFooterExample;
