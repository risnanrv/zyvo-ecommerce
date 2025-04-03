import React from 'react'
import './Item.css'
import { useNavigate } from 'react-router-dom'
import { FaStar, FaRegStar, FaHeart, FaShoppingCart } from 'react-icons/fa'

function Item(props) {
  const navigate = useNavigate()
  
  // Calculate discount percentage if old price exists
  const discount = props.oldPrice 
    ? Math.round(((props.oldPrice - props.newPrice) / props.oldPrice) * 100)
    : 0

  return (
    <div className="item-card" onClick={() => navigate(`/product/${props.id}`)}>
      <div className="item-image-container">
        <img src={props.image} alt={props.name} className='item-image' />
        
        {/* Badges */}
        <div className="item-badges">
          {discount > 0 && (
            <span className="discount-badge">-{discount}%</span>
          )}
          {props.isNew && <span className="new-badge">New</span>}
        </div>
        
        {/* Quick actions */}
        <div className="item-actions">
          <button className="action-btn wishlist-btn" onClick={(e) => {
            e.stopPropagation()
           
          }}>
            <FaHeart />
          </button>
          <button className="action-btn cart-btn" onClick={(e) => {
            e.stopPropagation()
            
          }}>
            <FaShoppingCart />
          </button>
        </div>
      </div>
      
      <div className="item-details">
        <h3 className="item-name">{props.name}</h3>
        
        {/* Rating */}
        <div className="item-rating">
          {[...Array(5)].map((_, i) => (
            i < (props.rating || 0) ? <FaStar key={i} /> : <FaRegStar key={i} />
          ))}
          <span className="rating-count">({props.reviewCount || 0})</span>
        </div>
        
        {/* Pricing */}
        <div className="item-pricing">
          <span className="item-price">${props.newPrice}</span>
          {props.oldPrice && (
            <span className="item-old-price">${props.oldPrice}</span>
          )}
        </div>
      </div>
    </div>
  )
}

export default Item