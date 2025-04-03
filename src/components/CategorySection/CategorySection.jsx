import React from 'react';
import './CategorySection.css';
import { useNavigate } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import Shirts from '../../assets/Shirts-Category.webp';
import Tshirts from '../../assets/Tshirts-Category.webp';
import Pants from '../../assets/Pants-Category.jpeg';
import Watches from '../../assets/Watches-Category.jpeg';
import { FiArrowRight } from 'react-icons/fi';

const categories = [
  { id: 1, name: 'Shirts', image: Shirts },
  { id: 2, name: 'T-shirts', image: Tshirts },
  { id: 3, name: 'Pants', image: Pants },
  { id: 4, name: 'Watches', image: Watches },
];

function CategorySection() {
  const navigate = useNavigate();

  const handleCategoryClick = (categoryName) => {
    localStorage.setItem('selectedCategory', categoryName);
    navigate('/shop');
  };

  return (
    <section className="category-section">
      <Container>
        <div className="section-header">
          <h2 className="section-head">Shop By Category</h2>
        </div>

        <Row className="g-4">
          {categories.map((category) => (
            <Col key={category.id} lg={3} md={6} className="category-col">
              <div 
                className="category-card"
                onClick={() => handleCategoryClick(category.name)}
              >
                <div className="image-container">
                  <img 
                    src={category.image} 
                    alt={category.name} 
                    className="category-image"
                    loading="lazy"
                  />
                  <div className="image-overlay"></div>
                </div>
                <div className="category-content">
                  <h3 className="category-title">{category.name}</h3>
                  <button className="shop-now-btn">
                    Shop Now <FiArrowRight className="arrow-icon" />
                  </button>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default CategorySection;