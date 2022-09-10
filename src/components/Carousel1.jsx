import Carousel from 'react-bootstrap/Carousel';
import Image from 'react-bootstrap/Image'
import imagen1 from '../c1.jpg'
import imagen2 from '../c2.jpeg'
import imagen3 from '../c3.jpg'




function Carousel1() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={imagen1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Unknown Orbit</h3>
          <p>Painting for my first solo exhibition 'Out of this World'</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Image
          className="d-block w-100"
          src={imagen2}
          alt="Second slide"
        />
        <Carousel.Caption>
        <h3>Shikishi</h3>
          <p>
            New art book Shikishi available
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={imagen3}
          alt="Third slide"
        />

        <Carousel.Caption>
        <h3>Summer Night</h3>
          <p>New print available. Inspired by Finnish Midsummer festivities</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Carousel1;