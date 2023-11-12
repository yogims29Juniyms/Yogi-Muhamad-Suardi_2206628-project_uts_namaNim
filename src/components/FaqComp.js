import React from "react";
import { Container, Row, Col, Accordion } from "react-bootstrap";

const FaqComp = () => {
  return (
    <div className="faq" id="faq">
      <Container>
        <Row className="mb-5">
          <Col>
            <h2 className="text-center fw-bold">Pertanyaan Terkait</h2>
            <p className="text-center">
              Cari tau apa yang belum kamu ketahui tentang saya
            </p>
          </Col>
        </Row>
        <Row className="row-cols-lg-2 row-cols-1 g-4">
          <Col>
            <Accordion>
              <Accordion.Item eventKey="0">
                <Accordion.Header>
                  Apa kamu sudah punya pacar ?
                </Accordion.Header>
                <Accordion.Body>
                  Kepo.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Col>
          <Col>
            <Accordion>
              <Accordion.Item eventKey="1">
                <Accordion.Header>
                  Susah ga belajar di Pendidikan Ilmu Komputer ?
                </Accordion.Header>
                <Accordion.Body>
                  Ya gitu lah susah si tapi kalo dijalanin mah enggak kuat 😭
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Col>
          <Col>
            <Accordion>
              <Accordion.Item eventKey="2">
                <Accordion.Header>Umur kamu berapa</Accordion.Header>
                <Accordion.Body>
                  Baca makanya tuh di bio kalo gak tau mah di Home klik ada.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Col>
          <Col>
            <Accordion>
              <Accordion.Item eventKey="3">
                <Accordion.Header>Apa cita-cita kamu</Accordion.Header>
                <Accordion.Body>
                Bebas si, asalkan jadi sukses aja dibidang apapun asal HALAL Aamiin
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default FaqComp;