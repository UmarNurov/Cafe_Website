

import React, {useState, useEffect} from 'react'
import "./menu-pack.css"
import {Container, Row, Col} from "reactstrap"
import ProductCard from '../product-card/ProductCard'
import { breakfastProducts, firstFoodProducts, secondFoodProducts, mangalProducts, coffeeProducts } from '../../assets/fake-data/products'

const MenuPack = () => {

const [filter, setFilter] = useState('BREAKFAST')
const [products, setProducts] = useState(breakfastProducts)

useEffect(()=>{

    
    if(filter === 'BREAKFAST'){
        setProducts(breakfastProducts)
    }
    if(filter === 'FIRST-FOOD'){
        setProducts(firstFoodProducts)
    }
    if(filter === 'SECOND-FOOD'){
        setProducts(secondFoodProducts)
    }
    if(filter === 'MANGAL'){
        setProducts(mangalProducts)
    }
    if(filter === 'COFFEE'){
        setProducts(coffeeProducts)
    }


}, [filter])

  return (
    <section>
        <Container>
            <Row>
                <Col lg='12' className='text-center mb-4'>
                    <h3 className='menu__title'>Our Menu Pack</h3>
                </Col>
                <Col lg='12' className='text-center mb-5'>
                    <button className={`filter-btn ${filter === 'BREAKFAST' ? 'active__btn' : ''}`} onClick={()=>setFilter('BREAKFAST')}>Завтраки</button>
                    <button className={`filter-btn ${filter === 'FIRST-FOOD' ? 'active__btn' : ''}`} onClick={()=>setFilter('FIRST-FOOD')}>Первые блюда</button>
                    <button className={`filter-btn ${filter === 'SECOND-FOOD' ? 'active__btn' : ''}`} onClick={()=>setFilter('SECOND-FOOD')}>Вторые блюда</button>
                    <button className={`filter-btn ${filter === 'MANGAL' ? 'active__btn' : ''}`} onClick={()=>setFilter('MANGAL')}>Мангал</button>
                    <button className={`filter-btn ${filter === 'COFFEE' ? 'active__btn' : ''}`} onClick={()=>setFilter('COFFEE')}>Coffee</button>
                </Col>

                {
                    products.map(item=>(
                        <Col lg='3' md='4' sm='6' xs='6' key={item.id} className='mb-4'><ProductCard item={item} /></Col>
                        
                    ))
                }
            </Row>
        </Container>
    </section>
  )
}

export default MenuPack