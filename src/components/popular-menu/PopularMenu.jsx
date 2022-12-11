import React from 'react'
import {Container, Row, Col} from "reactstrap"
import { popularMenuFood } from "../../assets/fake-data/products"

const PopularMenu = () => {
  return <section>
    <Container>
        <Row>
            <Col lg='12' className='mb-5'>
                <h2>Popular food menu</h2>
            </Col>


            {
                popularMenuFood.map(item=>(
                    <Col lg='3' key={item.id}>
                        <div className="single__product">
                            <div className="product__img">
                                <img src ={item.imgUrl} alt="" />
                            </div>

                            <div className="product__content">
                                <div className="rating text-center">
                                    <span><i class="ri-star-s-fill"></i></span>
                                    <span><i class="ri-star-s-fill"></i></span>
                                    <span><i class="ri-star-s-fill"></i></span>
                                    <span><i class="ri-star-s-fill"></i></span>
                                    <span><i class="ri-star-s-fill"></i></span>
                                </div>

                                <h6>{item.title}</h6>

                                <div className='d-flex align-item-center justify-content-between'>
                                    <span className='price'>Price: $<span>{item.price}</span></span>
                                    <span><i class="ri-shopping-cart-line"></i></span>
                                </div>
                            </div>
                        </div>
                    </Col>
                ))
            }
        </Row>
    </Container>
  </section>
}

export default PopularMenu