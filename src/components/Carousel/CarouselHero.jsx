import Carousel from 'react-bootstrap/Carousel';
import './CarouselHero.css'
import CarouselImageOne from '../../assets/Caroseul-Img-1.webp';
import CarouselImageTwo from '../../assets/Caroseul-Img-2.webp';
import CarouselImageThree from '../../assets/Caroseul-Img-3.webp';

function CaroseulHero() {
  return (
    <Carousel className='carousel-section'>
      <Carousel.Item>
        <img src={CarouselImageOne} className='carousel-img' alt="Image" />
      </Carousel.Item>
      <Carousel.Item>
      <img src={CarouselImageTwo} className='carousel-img' alt="Image" />
      </Carousel.Item>
      <Carousel.Item>
      <img src={CarouselImageThree} className='carousel-img' alt="Image" />
      </Carousel.Item>
    </Carousel>
  );
}

export default CaroseulHero;