import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "animate.css";

const ServiceComp = () => {
  const handleClick = () => {
    // Fungsi yang akan dijalankan saat elemen diklik
    // Di sini, Anda dapat menambahkan efek atau logika tambahan
    alert("Elemen diklik!");
  };

  return (
    <div
      className="services min-vh-100 d-flex align-items-center animate__animated animate__fadeIn"
      id="Services"
      onClick={handleClick} // Tambahkan onClick handler
    >
      <Container>
        <Row className="mb-5">
          <Col>
            <h1 className="text-center fw-bold" data-aos="fade-up">
              Contact Me
            </h1>
            <p
              className="text-center"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              Hubungi kontak dibawah ini untuk informasi lebih lanjut
            </p>
          </Col>
        </Row>
        <Row className="row-cols-lg-3 row-cols-md-2 row-cols-1 justify-content-center">
          <Col className="text-center py-4 px-3">
            <i class="fa-solid fa-graduation-cap fs-2 mb-3"></i>
            <h5 className="fw-bold">Pendidikan</h5>
            <p>Universitas Pendidikan Indonesia</p>
          </Col>
          <Col className="text-center py-4 px-3">
            <i class="fa-solid fa-location-dot fs-2 mb-3"></i>
            <h5 className="fw-bold">Alamat</h5>
            <p>Jl. Melong Cijerah, Cimahi Selatan</p>
          </Col>
          <Col className="text-center py-4 px-3">
            <i class="fa-solid fa-award fs-2 mb-3"></i>
            <h5 className="fw-bold">Nomor Telephone</h5>
            <p>081391209306</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ServiceComp;
