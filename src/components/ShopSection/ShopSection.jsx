import React, { useEffect, useState } from 'react';
import './ShopSection.css';
import products from '../../assets/assets';
import Item from '../ItemCard/Item';
import { Col, Container, Row } from 'react-bootstrap';

function ShopSection() {
  const[category , setCategory] = useState(localStorage.getItem('selectedCategory')||"Shirts")

  useEffect(
    () => {
      localStorage.setItem('selectedCategory' , category)
    } , [category]
  )

  const filteredProducts = products.filter((item) => {
    return item.category === category
  })

  return (
    <Container>
    <div className='shop-bar' 
    >
      <div className="bar-container">
      <button 
  onClick={() => setCategory("Shirts")} 
  className={category === 'Shirts' ? "shop-btn clicked-btn" : "shop-btn"}>
  Shirts
</button>

<button 
  onClick={() => setCategory("T-shirts")} 
  className={category === 'T-shirts' ? "shop-btn clicked-btn" : "shop-btn"}>
  TShirts
</button>

<button 
  onClick={() => setCategory("Pants")} 
  className={category === 'Pants' ? "shop-btn clicked-btn" : "shop-btn"}>
  Pants
</button>

<button 
  onClick={() => setCategory("Watches")} 
  className={category === 'Watches' ? "shop-btn clicked-btn" : "shop-btn"}>
  Watches
</button>

      </div>
      <div className="products-section">

      <Row className='justify-content-center new-collection-item'>
   { filteredProducts.map((item, index) => (
     <Col  md={3} >
     <Item key={index} id={item.id}  name={item.name} image={item.image} newPrice={item.newPrice} oldPrice = {item.oldPrice}   />
     </Col>
    ))}
    </Row>
  </div>
  
    </div>
    </Container>
  );
}

export default ShopSection;
