import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
const Banner = () => {
    return(
        <div className='container mt-4'>
            <Carousel>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuunuHIApcHrl0976Y3gQCwtywhY1YRgUDQg&usqp=CAU"
          alt="First slide"
          width="400"
          height="700"
        />
        <Carousel.Caption>
          <h3>Get the Biryani</h3>
          <p></p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ92EczjOLUqyGpeuPGGF0kp_ihQji4k9Xbrg&usqp=CAU"
          alt="First slide"
          width="400"
          height="700"
        />
        <Carousel.Caption>
          <h3>The Japanese Ramen</h3>
          <p></p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTT0cvagFUfoBnhl0_lPyxOVMA63taoL4Rmdg&usqp=CAU"
          alt="First slide"
          width="400"
          height="700"
        />
        <Carousel.Caption>
          <h3>Turkish Donner Kebab</h3>
          <p></p>
        </Carousel.Caption>
      </Carousel.Item>
      
    </Carousel>
        </div>
    );
}

export default Banner