import { useEffect, useState } from "react";
import { Container, Row, Col, Form, FormGroup, Label, Input } from "reactstrap";
import Img from "./ui/image";

export default function Feature(props) {
  const [titular, setTitular] = useState();
  const [cuentaDestino, setCuentaDestino] = useState();
  const [banco, setBanco] = useState();
  const [motivo, setMotivo] = useState();

  const handleTitular = (e) => {
    e.preventDefault();
    setTitular(e.currentTarget.value);
  };

  const handleCuentaDestino = (e) => {
    e.preventDefault();
    setCuentaDestino(e.currentTarget.value);
  };

  const handleBanco = (e) => {
    e.preventDefault();
    setBanco(e.currentTarget.value);
  };

  const handleMotivo = (e) => {
    e.preventDefault();
    setMotivo(e.currentTarget.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <section className="section feature-section" id="conoce-yolo">
      <span className="circle circle2">&nbsp;</span>
      <Container>
        <Row className="justify-content-center">
          <Col lg={12} md={12}>
            <div className="title text-center mb-5">
              <h3 className="font-weight-normal text-dark">
                ¡Empieza a disfrutar Yolo Pago!
              </h3>
            </div>

            <Form>
              <FormGroup>
                <Label for="titular">Títular</Label>
                <Input
                  type="text"
                  name="titular"
                  id="titular"
                  value={titular}
                  onChange={handleTitular}
                />
              </FormGroup>
              <FormGroup>
                <Label for="cuenta_destino">Cuenta Destino</Label>
                <Input
                  type="text"
                  name="cuenta_destino"
                  id="cuenta_destino"
                  value={cuentaDestino}
                  onChange={handleCuentaDestino}
                />
              </FormGroup>
              <FormGroup>
                <Label for="banco">Banco</Label>
                <Input
                  type="text"
                  name="banco"
                  id="banco"
                  value={banco}
                  onChange={handleBanco}
                />
              </FormGroup>
              <FormGroup>
                <Label for="motivo">Motivo</Label>
                <Input
                  type="text"
                  name="motivo"
                  id="motivo"
                  value={motivo}
                  onChange={handleMotivo}
                />
              </FormGroup>
              <br />
              <button onClick={handleSubmit}>Aceptar</button>
            </Form>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
