import { useState } from "react";
import {
  Container,
  Row,
  Col,
  Popover,
  PopoverHeader,
  PopoverBody,
} from "reactstrap";
import Img from "./ui/image";
import { motion } from "framer-motion";
import SendSMS from "./SendSMS";

function abrirYoTeAsesoro() {}

const Yoli = () => {
  const [showModal, setShowModal] = useState(false);
  const [yoliFace, setYoliFace] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();

    !!window &&
      window.open(
        //"https://bancoganaderowc.ucontactcloud.com/webchatclient/#/?ip=bancoganaderowc.ucontactcloud.com&campaign=WebChatTest",
        "https://wa.me/59171033322",
        "webchat",
        "width=300,height=500"
      );
  };

  const handleModal = (e) => {
    e.preventDefault();
    setShowModal(!showModal);
  };

  const toggle = () => setShowModal(!showModal);
  const faceUp = () => setYoliFace(true);
  const faceDown = () => setYoliFace(false);

  return (
    <div
      className="yoli"
      onMouseEnter={faceUp}
      onMouseLeave={faceDown}
      onClick={handleClick}
    >
      {showModal !== false && (
        <Popover
          placement="top"
          isOpen={showModal}
          toogle={toggle}
          target=".yoli-modal-container"
        >
          <PopoverHeader toggle={toggle} charCode="X"></PopoverHeader>
          <PopoverBody>
            <SendSMS />
          </PopoverBody>
        </Popover>
      )}
      <div className="yoli-modal-container"></div>
      <div className="yoli-bubble">
        Hola, <b>Soy Yoli</b>
        <br />
        ¿Puedo aydarte en algo?
      </div>
      <div
        className="yoli-icon"
        style={{
          transform: `${
            yoliFace
              ? "translateX(-5px) scale(1.1,1.1)"
              : "translateX(-30px) translateY(16px) scale(1.5,1.5)"
          }`,
        }}
      >
        {yoliFace && <Img s="yoli-sombra.svg" />}
        {!yoliFace && <Img s="yoli-sleep.svg" />}
      </div>
    </div>
  );
};

const Footer = () => {
  const links = [
    { id: 1, title: "Conoce Yolo" },
    { id: 2, title: "Beneficios" },
    { id: 5, title: "Testimonios" },
    { id: 3, title: "Preguntas Frecuentes" },
  ];

  return (
    <>
      <section className="footer section">
        <Container>
          <Row>
            <Col lg={3}>
              <div className="mb-3">
                <Img s="logo-blanco.svg" c="logo" />
              </div>
            </Col>

            <Col lg={6}>
              <Row>
                {links.map((link, key) => (
                  <Col key={key} md={3}>
                    <h6 className="text-dark mb-3">{link.title}</h6>
                    <ul className="list-unstyled company-sub-menu">
                      {link?.child?.length > 0 &&
                        link?.child.map((fLink, key) => (
                          <li key={key}>
                            <a href={fLink.link}>{fLink.title}</a>
                          </li>
                        ))}
                    </ul>
                  </Col>
                ))}
              </Row>

              <Row>
                <Col md={12} className="logo-marketplaces">
                  <h3>Yolo Pago disponible en:</h3>
                  <Img s="Playstore-sin-bordes.svg" c="logo-market" />
                  <Img s="Apple-sin-bordes.svg" c="logo-market" />
                  <Img s="Huawei-sin-bordes.svg" c="logo-market" />
                </Col>
              </Row>
            </Col>

            <Col md={3}>
              <h6 className="text-dark mb-3">¿Tienes preguntas?</h6>
              <p className="text-muted f-14">
                <a href="https://wa.me/59171033322">+59171033322</a>
              </p>

              <p className="text-muted mt-3 mb-2">
                <Img s="facebook.svg" c="facebook" /> @YoloPagoApp
              </p>
            </Col>
          </Row>

          <Row className="mt-5">
            <Col md={12}>
              <div className="text-center text-muted">
                <p className="mb-0 f-15">
                  © Yolo Pago 2021. Todos los derechos reservados
                </p>
                <small>
                  Banco Ganadero S.A. Autorizado y fiscalizado por la ASFI
                </small>
              </div>
            </Col>
          </Row>
          <Yoli className="yoli" />
        </Container>
      </section>
    </>
  );
};

export default Footer;
