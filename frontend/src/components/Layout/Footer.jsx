import React from 'react';

import { Container, Row, Col } from 'react-bootstrap';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';

import Input from 'components/Form/Input';

const Footer = () => {
    return (
        <footer className="footer">
            <Container>
                <Row className="footer-row">
                    <Col xs={12} md={3} className="footer-col">
                        <h2>About Us</h2>
                        <div className="footer-line">
                            <hr />
                        </div>
                        <p>
                            At the end of the day, going forward, a new normal that has evolved generation X is on the runway heading
                            towards a streamlined cloud solution.
                        </p>
                        <div className="footer-icons">
                            <div className="footer-icon">
                                <FaFacebookF />
                            </div>
                            <div className="footer-icon">
                                <FaTwitter />
                            </div>
                            <div className="footer-icon">
                                <FaLinkedinIn />
                            </div>
                            <div className="footer-icon">
                                <FaInstagram />
                            </div>
                        </div>
                    </Col>
                    <Col xs={12} md={3} className="footer-col">
                        <h2>Newsletter</h2>
                        <div className="footer-line">
                            <hr />
                        </div>
                        <p>Stay Updated with our latest news. We promise not to spam</p>
                        <div className="footer-form-group">
                            <form autoComplete="off" className="footer-form">
                                <Input name="email" type="email" placeholder="Your Email" required={true} />
                            </form>
                        </div>
                    </Col>
                    <Col xs={12} md={3} className="footer-col">
                        <h2>Contact Us</h2>
                        <div className="footer-line">
                            <hr />
                        </div>
                        <p>10, Mc Donald Avenue, Sunset Park, Newyork</p>
                        <p>+99 999 9999</p>
                        <p>info@yourdomain.com</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;
