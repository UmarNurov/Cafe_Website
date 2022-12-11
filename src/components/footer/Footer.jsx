
import React from 'react'
import "./footer.css"
import {Container, Row, Col} from 'reactstrap'

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
                </Row>
            </Container>
        </div>
    </footer>
  )
}

export default Footer