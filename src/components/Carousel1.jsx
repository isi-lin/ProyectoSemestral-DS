import Carousel from 'react-bootstrap/Carousel';
import Image from 'react-bootstrap/Image'
import imagen1 from '../c1.png'
import imagen2 from '../c2.png'
import imagen3 from '../c3.png'


function Carousel1() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={imagen1}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <Image
          className="d-block w-100"
          src={imagen2}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={imagen3}
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default Carousel1;