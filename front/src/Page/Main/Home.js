import React from 'react'
import { Container } from 'react-bootstrap';
import BodySlides from '../../Components/BodySlides/BodySlides';

const Home = () => {
  return (
    <div style = {{
      padding : '100px'
    }}>
      <Container className="d-flex flex-column min-vh-50">
          <BodySlides />
      </Container>
    </div>
  )
}

export default Home