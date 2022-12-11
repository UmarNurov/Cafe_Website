
import React from 'react'
import "./choose-us.css"
import {Container, Row, Col} from 'reactstrap'
import pastaImg from '../../assets/images/pasta.png'

const ChooseUs = () => {
  return (
    <section>
        <Container>
            <Row>
                <Col lg='6' >
                    <img src={pastaImg} alt="" className='w-100'/>
                </Col>

                <Col lg='6'>
                    <div className="choose__content">
                        <h4>Who we are?</h4>
                        <h2>Take a look at the services we offer you</h2>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum omnis, animi ipsa distinctio laboriosam voluptates.</p>

                        <div className="features mt-4">
                            <div className="feature1 d-flex align-items-center gap-5">
                                <div className="single__feature">
                                    <span><i class="ri-truck-line"></i></span>
                                    <h6>Free Home Delivery</h6>
                                    <p>Lorem ipsum dolor sit amet.</p>
                                </div>
                                <div className="single__feature">
                                    <span className='feature__icon-two'><i class="ri-money-dollar-circle-line"></i></span>
                                    <h6>Return & Refund</h6>
                                    <p>Lorem ipsum dolor sit amet.</p>
                                </div>
                            </div>

                            <div className="feature1 mt-3 d-flex align-items-center gap-5">
                                <div className="single__feature">
                                    <span className='feature__icon-3'><i class="ri-secure-payment-line"></i></span>
                                    <h6>Secure Payment</h6>
                                    <p>Lorem ipsum dolor sit amet.</p>
                                </div>
                                <div className="single__feature">
                                    <span className='feature__icon-4'><i class="ri-24-hours-line"></i></span>
                                    <h6>24/7 hours support</h6>
                                    <p>Lorem ipsum dolor sit amet.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default ChooseUs