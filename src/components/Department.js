import react from 'react';
import Carousel from 'react-bootstrap/Carousel'
import C1 from '../images/c1.jpeg'
import C2 from '../images/c2.jpg'
import C3 from '../images/c3.jpg'
import Faculty from './Faculty';
const Department = ()=>{
    return (
        <>
        <div className="container-fluid">
        <Carousel fade>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={C1}
      alt="First slide"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={C2}
      alt="Second slide"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={C3}
      alt="Third slide"
    />
  </Carousel.Item>
</Carousel>
</div>
    <Faculty/>
        </>
    )
}
export default Department;