import Layout from "../components/Layout";
import Header from "../components/Header";
import Hero2 from "../components/Hero2";
import Feature from "../components/Feature";
import Footer from "../components/Footer";
import SendSMS from "../components/SendSMS";
import {
  Row,
  Col,
} from "reactstrap";

const Index = () => {
  return (
    <Layout pageTitle="Descarga Yolo Pago | La aplicación más simple para enviar y recibir dinero">
      <Header />
      <Feature />
      <Hero2 />

      <Row className="justify-content-center">
        <Col lg={12} md={12}>
          <div className="title text-center mb-5">
            <h3 className="font-monserrat text-primary font-weight-medium f-14 mb-4 text1">
              ¡Yolo Pago es para todos!
            </h3>
            <SendSMS />
          </div>
        </Col>
      </Row>

      <Footer />
    </Layout>
  );
};

export default Index;
