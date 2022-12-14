
import React from 'react'
import "./download.css"

import appImg from '../../assets/images/app.png'
import {Container, Row, Col} from 'reactstrap'

const Download = () => {
  return (
    <section>
        <Container className='app__container'>
            <Row>
                <Col lg='6' md='6'>
                    <div className="app__img">
                        <img src={appImg} alt="" />
                    </div>
                </Col>
                <Col lg='6' md='6'>
                    <div className="app__content">
                        <h5>Закажи еду онлайн прямо сейчас!</h5>
                        <h2 className='mb-4'>Никогда не голодай! Свяжитесь с нами чтобы заказать вкусную еду.</h2>
                        <p>Вы можете позвонить нам напрямую или связаться с нами через WhatsApp</p>
                        <div className="app_btn d-flex align-items-center gap-5 mt-4">
                            <button className="btn__apple d-flex align-items-center gap-3">
                                <i class="ri-phone-line"></i><a href="#">+7-(926)-238-900</a>
                            </button>

                            <button className="btn__google d-flex align-items-center gap-3">
                                <i class="ri-whatsapp-line"></i><a href="#">+7-(926)-238-900</a>
                            </button>
                        </div>
                    </div>
                </Col>

            </Row>
        </Container>
    </section>
  )
}

export default Download