
import React from 'react'
import "./choose-us.css"
import {Container, Row, Col} from 'reactstrap'
import food6 from '../../assets/images/SecondFood/food6.png'

const ChooseUs = () => {
  return (
    <section>
        <Container>
            <Row>
                <Col lg='6' md='6' >
                    <img src={food6} alt="" className='w-100'/>
                </Col>

                <Col lg='6' md='6'>
                    <div className="choose__content">
                        <h4>Кто мы?</h4>
                        <h2>Взгляните на услуги, которые мы предлагаем вам</h2>
                        <p>Наш ресторан предлагает вам быстрое и лучшее обслуживание в комфортной обстановке. Также есть комната для караоке и банкетные залы, которые можно забронировать заранее и прийти с друзьями и гостями</p>

                        <div className="features mt-4">
                            <div className="feature1 d-flex align-items-center gap-5">
                                <div className="single__feature">
                                    <span><i class="ri-truck-line"></i></span>
                                    <h6>Доставка</h6>
                                    <p>По Москве и Московской <br></br>области</p>
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
                                    <h6>Безопасная оплата</h6>
                                    <p>Вы можете оплатить<br></br> наличными или картой.</p>
                                </div>
                                <div className="single__feature">
                                    <span className='feature__icon-4'><i class="ri-24-hours-line"></i></span>
                                    <h6>24/12 поддержка</h6>
                                    <p>Вы можете посетить наш ресторан в это время или заказать еду онлайн.</p>
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