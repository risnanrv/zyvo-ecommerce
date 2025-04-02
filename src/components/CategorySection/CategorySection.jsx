import React from 'react';
import './CategorySection.css';
import { useNavigate } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Shirts from '../../assets/Shirts-Category.webp';
import Tshirts from '../../assets/Tshirts-Category.webp';
import Pants from '../../assets/Pants-Category.jpeg';
import Watches from '../../assets/Watches-Category.jpeg';
const categories = [
  { id: 1, name: 'Shirts', image: Shirts },
  { id: 2, name: 'T-shirts', image: Tshirts },
  { id: 3, name: 'Pants', image: Pants },
  { id: 4, name: 'Watches', image: Watches },
];

function CategorySection() {
  const navigate = useNavigate()

  const handleCategoryClick =(categoryName) => {
    localStorage.setItem('selectedCategory' , categoryName)
    navigate('/shop')
  }
  return (
    <Container className="category-section">
      <h2 className="category-head">Shop By Category</h2>

      <Row className="justify-content-center">
        {categories.map((category) => (
          <Col key={category.id} md={3} xs={6} className="d-flex justify-content-center">
            <Card className="category-card" onClick={()=> handleCategoryClick(category.name)}>
              <Card.Img variant="top" className="category-img" src={category.image} />
              <Card.Body>
                <h5 className="category-title">{category.name}</h5>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default CategorySection;
