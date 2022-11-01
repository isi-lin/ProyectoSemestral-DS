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
        <Card.Title>About Heikala</Card.Title><br></br>
         <a>
          Hello, I am an artist and illustrator from Finland. I like to use traditional mediums of ink and watercolor to create my art. I attend various conventions locally and around the world. You can find my prints, art books and more in those conventions or in my online shop.
        </a><br></br><br></br>
        <Button href="https://www.instagram.com/heikala/" target="_blank" rel="noopener noreferrer">Visit my Instagram!</Button>
      </Card.Body>
    </Card>
  );
}

export default HeaderAndFooterExample;
