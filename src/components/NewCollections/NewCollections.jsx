import React from 'react'
import './NewCollections.css'
import pant1 from "../../assets/Product_Images/pant-1.jpeg"; 
import pant2 from "../../assets/Product_Images/pant-2.jpeg"; 
import shirt6 from "../../assets/Product_Images/shirt-6.avif"; 
import shirt4 from "../../assets/Product_Images/shirt-4.avif"; 
import tshirt1 from "../../assets/Product_Images/tshirt-1.jpeg"; 
import tshirt3 from "../../assets/Product_Images/tshirt-3.jpeg"; 
import watch1 from "../../assets/Product_Images/watch-1.avif"; 
import watch5 from "../../assets/Product_Images/watch-5.avif";
import Item from '../ItemCard/Item';
import { Container, Row, Col } from 'react-bootstrap';


function NewCollections() {

    const newCollections = [
        { id: 1, name: "Slim Fit Chinos", image: pant1, newPrice: 29.99, oldPrice: 39.99 },
        { id: 2, name: "Casual Denim Jeans", image: pant2, newPrice: 34.99, oldPrice: 44.99 },
        { id: 3, name: "Classic White Dress Shirt", image: shirt6, newPrice: 29.99, oldPrice: 39.99 },
        { id: 4, name: "Flannel Checkered Shirt", image: shirt4, newPrice: 26.99, oldPrice: 36.99 },
        { id: 5, name: "Vintage Graphic Tee", image: tshirt1, newPrice: 19.99, oldPrice: 24.99 },
        { id: 6, name: "Minimalist Cotton Tee", image: tshirt3, newPrice: 18.99, oldPrice: 23.99 },
        { id: 7, name: "Luxury Chrono Watch", image: watch1, newPrice: 99.99, oldPrice: 129.99 },
        { id: 8, name: "Sports Edition Watch", image: watch5, newPrice: 119.99, oldPrice: 149.99 }
      ];
      
     
  return (
    <Container className='new-collections'>
    <div >
       <h2 className="new-collection-head">New Collections</h2>
        <Row className='justify-content-center new-collection-item'>
        {
            newCollections.map((item , index) =>(
                <Col  md={3} >
                <Item key={index} id={item.id}  name={item.name} image={item.image} newPrice={item.newPrice} oldPrice = {item.oldPrice}   />
                </Col>
            ))
        }
        </Row>
     </div>
    
    
    </Container>
  )
}

export default NewCollections
