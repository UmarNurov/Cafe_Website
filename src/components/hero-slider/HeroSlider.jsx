

import React from 'react'
import { Container } from 'reactstrap'
import Slider from  'react-slick'

import sliderData from  '../../assets/fake-data/slider'
import './slider.css'
import slider from '../../assets/fake-data/slider'

const HeroSlider = () => {
  return  <section>
    <Container>
        <Slider>
            {
                slider.Data.map(item => (
                    <div>
                        <div className="slider__wrapper">
                            <div className="slider_content w-50 ps-2">
                                <h2>{item.title}</h2>
                                <p>{item.desc}</p>
                            </div>

                            <div className="slider__img w-50">
                                <img src={item.imgUrl} alt="" className='w-100' />
                            </div>
                        </div>
                    </div>
                ))
            }
        </Slider>
    </Container>
  </section>
}

export default HeroSlider