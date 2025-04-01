import React from 'react'
import './CategorySection.css'
import Card from 'react-bootstrap/Card'
import Shirts from '../../assets/Shirts-Category.webp'

function CategorySection() {
  return (
    <div>
      <h2 className="category-head">Shop By Category</h2>

      <div className="category-card">
    <Card>
      <Card.Img variant='top' className='category-img' src={Shirts}/> 
      <h5 className='category-title'>Shirts</h5>
    </Card>
      </div>
    </div>
  )
}

export default CategorySection
