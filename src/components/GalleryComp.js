import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import AOS from "aos";
import "aos/dist/aos.css";

import Gallery1 from "../assets/img/gallery/gallery-1.png";
import Gallery2 from "../assets/img/gallery/gallery-2.png";
import Gallery3 from "../assets/img/gallery/gallery-3.png";
import Gallery4 from "../assets/img/gallery/gallery-4.png";
import Gallery5 from "../assets/img/gallery/gallery-5.png";
import Gallery6 from "../assets/img/gallery/gallery-6.png";


const GalleryComp = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  const images = [
    Gallery1, Gallery2, Gallery3, Gallery4,
    Gallery5, Gallery6
  ];

  return (
    <div className="gallery min-vh-100" id="Gallery">
      <Container>
        <Row className="row-cols-lg-3 row-cols-md-2 row-cols-1">
          {images.map((image, index) => (
            <Col
              key={index}
              data-aos="fade-up"
              data-aos-delay={(index + 1) * 200}
              className="animate__animated animate__slideInUp mb-3" // Tambahkan margin-bottom di sini
            >
              <div className="gallery-item">
                <p className="text-center">———————————————————————————————</p>
                <img src={image} alt={`Gallery ${index + 1}`} className="w-100" />
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default GalleryComp;
