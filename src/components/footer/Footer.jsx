
import React from 'react'
import "./footer.css"
import {Container, Row, Col, ListGroup, ListGroupItem} from 'reactstrap'

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
                            <h2 className='d-flex align-items-center gap-1 mb-4'>
                            <span><i class="ri-restaurant-2-line"></i></span> Chef Food
                            </h2>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Quidem exercitationem nobis qui obcaecati voluptas aspernatur!</p>
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

                    <Col lg='2' md='4' sm='6'>
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

                    <Col lg='4' md='4' sm='6'>
                        <h5 className="footer__link-title">
                            Contact
                        </h5>
                        <ListGroup>
                            <ListGroupItem className='link__item d-flex align-items-center gap-3'>
                                <i class="ri-map-pin-line"></i> Sylhet, Bangladesh {" "}
                            </ListGroupItem>

                            <ListGroupItem className='link__item d-flex align-items-center gap-3'>
                                <i class="ri-mail-line"></i> example@gmail.com {" "}
                            </ListGroupItem>

                            <ListGroupItem className='link__item d-flex align-items-center gap-3'>
                                <i class="ri-phone-line"></i> +xxx-xx-xxx-xxxx {" "}
                            </ListGroupItem>
                        </ListGroup>
                    </Col>
                </Row>
            </Container>
        </div>
    </footer>
  )
}

export default Footer