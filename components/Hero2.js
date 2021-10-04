import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import Img from "./ui/image";

const Hero2 = () => {
  return (
    <section className="section position-relative hero2-section">
      <Container>
        <Row className="align-items-center">
          <Col lg={8}>
            <div className="pr-lg-5">
              <p className="font-monserrat text-primary font-weight-medium f-14 mb-4 text1">
                Sé parte de una nueva
                <br />
                generación ¡descarga Yolo!
              </p>
              <button onClick={(e) => handleButton(e)}>
                ¡Descarga la app!
              </button>
            </div>
          </Col>
          <Col lg={4}>
            <div className="mt-5 mt-lg-0">
              <Img s="manos.svg" c="img-fluid mx-auto d-block phones" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Hero2;