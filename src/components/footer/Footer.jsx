
import React from 'react'
import "./footer.css"
import {Container, Row, Col, ListGroup, ListGroupItem} from 'reactstrap'
import logo from "../../../src/logo.png"

const footerQuickLinks = [
    {
        display: 'Terms & Conditions',
        url: '#',
    },
    {
        display: 'Privacy Policy',
        url: '#',
    },
    {
        display: 'Return & Refund',
        url: '#',
    },
    {
        display: 'Payment Method',
        url: '#',
    },
]

const footerLinks = [
    {
        display: 'About Us',
        url: '#',
    },
    {
        display: 'Menu',
        url: '#',
    },
    {
        display: 'Recipes',
        url: '#',
    },
    {
        display: 'Contact',
        url: '#',
    },
]

const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer__top">
            <Container>
                <Row>
                    <Col lg='4' md='4' sm='6'>
                        <div className="logo">
                            <h2 className='d-flex align-items-center gap-1'>
                                <img src={logo} alt="" /> 
                            </h2>
                        </div>
                        <p>Вам не обязательно ехать в Таджикистан, чтобы увидеть уникальность и изысканность таджикской кухни.

                        Посетив наш ресторан и заказав еду онлайн, вы почувствуете настоящий вкус таджикской кухни, приготовленной для вас с большой любовью!</p>
                    </Col>

                    <Col lg='2' md='4' sm='6'>
                        <h5 className="footer__link-title">
                            Info links
                        </h5>

                        <ListGroup>
                            {
                                footerQuickLinks.map((item, index)=><ListGroupItem className='link__item' key={index}>
                                <a href={item.url}>{item.display}</a>
                            </ListGroupItem>)
                            }
                            
                        </ListGroup>
                    </Col>

                    <Col lg='3' md='4' sm='6'>
                        <h5 className="footer__link-title">
                            Quick links
                        </h5>

                        <ListGroup>
                            {
                                footerLinks.map((item, index)=><ListGroupItem className='link__item' key={index}>
                                <a href={item.url}>{item.display}</a>
                            </ListGroupItem>)
                            }
                            
                        </ListGroup>
                    </Col>

                    <Col lg='3' md='4' sm='6'>
                        <h5 className="footer__link-title">
                            Contact
                        </h5>
                        <ListGroup>
                            <ListGroupItem className='link__item d-flex align-items-center gap-3'>
                                <i class="ri-map-pin-line"></i> Московская область, Котельники, мкр.Южный улюАсфальтовая дом 21 {" "}
                            </ListGroupItem>

                            <ListGroupItem className='link__item d-flex align-items-center gap-3'>
                                <i class="ri-mail-line"></i> cafe.hojiyon.@gmail.com {" "}
                            </ListGroupItem>

                            <ListGroupItem className='link__item d-flex align-items-center gap-3'>
                                <i class="ri-phone-line"></i> +7-(926)-238-90-00 {" "}
                            </ListGroupItem>
                        </ListGroup>
                    </Col>
                </Row>
            </Container>
        </div>
        <div className="footer__bottom">
            <Container>
                <Row>
                    <Col lg='12'>
                        <p>Copyrights 2022, developed by Umar Nurov. All rights reserved</p>
                    </Col>
                </Row>
            </Container>
        </div>
    </footer>
  )
}

export default Footer