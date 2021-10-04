import { useState, useEffect } from "react";
import Img from "./ui/image";
import {
  Container,
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [sticky, setSticky] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
  });

  const handleScroll = () => {
    if (window.scrollY > 90) {
      setSticky(true);
    } else if (window.scrollY < 90) {
      setSticky(false);
    }
  };

  return (
    <>
      <div className={`header${sticky ? " sticky" : ""}`}>
        <Navbar light expand="md">
          <Container>
            <NavbarBrand href="/">
              <Img s="logo.png" a="Logo" c="logo" w={200} h={130} />
            </NavbarBrand>
            <Collapse isOpen={isOpen} navbar>
              <Nav className="m-auto" navbar>
                
                <NavItem>
                  <NavLink href="#" className="btn btn-warning">
                    ¡Descarga la app!
                  </NavLink>
                </NavItem>
                
              </Nav>
            </Collapse>
          </Container>
        </Navbar>
      </div>
    </>
  );
};

export default Header;
