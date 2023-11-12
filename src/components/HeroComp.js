import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "animate.css/animate.min.css"; // Import animate.css
import ProfileImage from "../assets/img/gallery/gallery-9.png"; // Import foto profil

const HeroComp = () => {
  return (
    <div className="hero min-vh-100 w-100" id="Home">
      <Container>
        <Row className="align-items-center">
          <Col lg={6} className="order-lg-2 mb-3">
            {/* Foto Profil */}
            <img
              src={ProfileImage}
              alt="Profil"
              className="w-100 animate__animated animate__fadeInRight"
            />
          </Col>
          <Col lg={6} className="order-lg-1">
            <h1 className="text-white fs-1 animate__animated animate__fadeInDown">
              Yogi Muhamad Suardi
            </h1>
            <p className="text-white text-white-50 animate__animated animate__fadeInUp">
              Mahasiswa Semester 3 Jurusan Pendidikan Ilmu Komputer
            </p>
            <p className="text-white text-white-50 animate__animated animate__fadeInUp">
              Lakukan apa yang menurutmu baik dan percayalah pada proses meski dibuat sakit karena proses itu sendiri
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default HeroComp;
