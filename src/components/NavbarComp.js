// NavbarComp.jsx
import React, { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";

const NavbarComp = () => {
  const [changeColor, setChangeColor] = useState(false);

  const changeBackgroundColor = () => {
    if (window.scrollY > 680) {
      setChangeColor(true);
    } else {
      setChangeColor(false);
    }
  };

  useEffect(() => {
    changeBackgroundColor();

    const handleScroll = () => {
      changeBackgroundColor();
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); 

  return (
    <div className="sticky-top">
      <Navbar variant="dark" expand="lg" className={changeColor ? "color-active" : ""}>
        <Container>
          <Navbar.Brand href="#Home" className="fw-bold fs-4"> Home</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto text-center">
              <Nav.Link href="#Home" className="mx-2"> </Nav.Link>
              <Nav.Link href="#Gallery" className="mx-2">Portofolio</Nav.Link>
              <Nav.Link href="#Services" className="mx-2">Contact</Nav.Link>
              <Nav.Link href="#faq" className="mx-2">faq</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavbarComp;
