import { useEffect, useState } from "react";
import {
  Modal,
  ModalBody,
} from "reactstrap";
import Img from "./ui/image";


const SendSMS = () => {
  const [showSendLinkButton, setShowLinkButton] = useState(0);
  const [phone, setPhone] = useState();
  const [success, setSuccess] = useState(false);
  const [fail, setFail] = useState(false);
  const [modal, setModal] = useState(false);

  const handleInput = (e) => {
    e.preventDefault();
    console.log("input value changed!");
    setShowLinkButton(e.currentTarget.value.length);
    setPhone(e.currentTarget.value);
  };

  const handleButton = async (e) => {
    e.preventDefault();
    console.log("button clicked!");
    setSuccess(false);
    setFail(false);

    fetch("https://sendsmsbgafunctionpremium.azurewebsites.net/api/sendsms", {
    //fetch("https://yolopagoapifunctions.azurewebsites.net/api/sendsms", {
      method: "POST",
      cache: "no-cache",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        cellphone: phone,
        smsvalue: "Pronto te estaremos enviando el link de la App!",
      }),
    })
      .then(function (res) {
        return res.json();
      })
      .then(function (data) {
        if (!data.errCode) {
          setSuccess(true);
        } else {
          setFail(true);
        }
        setModal(true);
      })
      .catch(() => {
        setFail(true);
      })
      .finally(toggle);

  };
  

  const toggle = () => setModal(!modal);

  return (
    <div className="sendsms">
      <p className="font-poppins bold gray">
        Ingresa tu número de celular para recibir el link de descarga
      </p>
      <div>
        <span>+591</span>
        <input
          type="number"
          placeholder="12345678"
          onChange={(e) => handleInput(e)}
        />
        <br />
        {showSendLinkButton > 0 && (
          <button onClick={(e) => handleButton(e)}>
            Recibir link de descarga
          </button>
        )}
        <br />
        {success !== false && (
          <Modal isOpen={modal} toogle={toggle}>
            <ModalBody onClick={toggle}>
              <Img s="success.png" c="success" />
              <h3>Su mensaje fue enviado!</h3>
            </ModalBody>
          </Modal>
        )}
        <br />
        {fail !== false && (
          <Modal isOpen={modal} toogle={toggle}>
            <ModalBody onClick={toggle}>
              <span className="fail"></span>
              <h3>Ocurrio un error, intente más tarde</h3>
            </ModalBody>
          </Modal>
        )}
      </div>
    </div>
  );
};

export default SendSMS;
