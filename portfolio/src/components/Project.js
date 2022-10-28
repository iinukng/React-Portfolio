import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import img1 from '../assets/project.jpg'
import Card from "react-bootstrap/Card";

export const Project = () => {
  return (
    <div>
      <Carousel>
      <Carousel.Item>
        <img
          className="h-70 d-inline-block "
          src={img1}
          alt="First slide"
        />
        <div className="position-absolute top-50 start-50 translate-middle w-50">
        <Carousel.Caption>
        <Card.Link href="https://your-wellfit.herokuapp.com/">
          <Card.Title>Your-Wellfit</Card.Title>
              </Card.Link>
              <Card.Link href="https://github.com/jack123abc4/Your-Wellfit">
                View Repository
              </Card.Link>
        </Carousel.Caption>
        </div>
      </Carousel.Item>
   
    </Carousel>
    </div>
  )
}

export default Project;
