import React from "react";
import "./Footer.css";


import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import { Link } from "react-router-dom";

const Footer = () => {
  const year = new Date().getFullYear()
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg="4">
            <div className="logo ">
              
              <div>
                <h1 className="text-white" >ShopBD</h1>
              </div>
              </div>
              <p className="footer_text mt-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
                quaerat perferendis laboriosam quia officia quod, commodi totam
                maiores voluptate cumque?
              </p>
          </Col>

          <Col lg="3">
            <div className="footer_quick-links">
              <h4 className="quick_links-title">Top Category</h4>

              <ListGroup>
                <ListGroupItem className="ps-0 border-0">
                  <Link to="#"> Mobile Phones</Link>
                </ListGroupItem>

                <ListGroupItem className="ps-0 border-0">
                  <Link to="#"> Modern Sofa</Link>
                </ListGroupItem>

                <ListGroupItem className="ps-0 border-0">
                  <Link to="#"> Arm Chair</Link>
                </ListGroupItem>

                <ListGroupItem className="ps-0 border-0">
                  <Link to="#">Smart Watch</Link>
                </ListGroupItem>
              </ListGroup>
            </div>
          </Col>
          <Col lg="2">
            <div className="footer_quick-links">
              <h4 className="quick_links-title">Useful Links</h4>

              <ListGroup>
                <ListGroupItem className="ps-0 border-0">
                  <Link to="/shop"> Shop</Link>
                </ListGroupItem>

                <ListGroupItem className="ps-0 border-0">
                  <Link to="/cart"> Cart</Link>
                </ListGroupItem>

                <ListGroupItem className="ps-0 border-0">
                  <Link to="/login"> Login</Link>
                </ListGroupItem>

                <ListGroupItem className="ps-0 border-0">
                  <Link to="#">Privacy Policy</Link>
                </ListGroupItem>
              </ListGroup>
            </div>
          </Col>
          <Col lg="3">
            
            <div className="footer_quick-links">
              <h4 className="quick_links-title">Contact</h4>

              <ListGroup className="footer_contact">
                <ListGroupItem className="ps-0 border-0 align-items-center d-flex gap-2">
                  <span>
                    <i className="ri-map-pin-line"></i>
                  </span>
                  <p>Basundhara R/A, Dhaka</p>
                </ListGroupItem>

                <ListGroupItem className="ps-0 border-0 align-items-center d-flex gap-2">
                  <span>
                    <i className="ri-phone-line"></i>
                  </span>
                  <p>016777773333</p>
                </ListGroupItem>

                <ListGroupItem className="ps-0 border-0 align-items-center d-flex gap-2">
                  <span>
                    <i className="ri-mail-line"></i>
                  </span>
                  <p>******@gmail.com</p>
                </ListGroupItem>
              </ListGroup>
            </div>
          </Col>

          <Col lg="12">
          <p className="footer_copyright">Copyright {year} By Tasimul Hasan Mahi. All right reserved.</p></Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
