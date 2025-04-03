import React, { useContext, useState } from 'react';
import './ProductDetails.css';
import products from '../../assets/assets';
import { useParams } from 'react-router-dom';
import { ShopContext } from '../../Context/ShopContext';

const ProductDetails = ({ product }) => {
  const [selectedSize, setSelectedSize] = useState('7');
  const [quantity, setQuantity] = useState(1);
  const [isWishlisted, setIsWishlisted] = useState(false);
  const { id } = useParams();
  const item = products.find((item) => item.id === parseInt(id));

  const {addToCart} = useContext(ShopContext) 

  // Sample product data with single image
  const sampleProduct = {
    id: 1,
    name: 'Premium Comfort Sneakers',
    price: 89.99,
    discountPrice: 69.99,
    description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt voluptatem necessitatibus dolorem consequatur vel enim incidunt corporis quos reiciendis deleniti.' ,
    sizes: ['US 7', 'US 8', 'US 9', 'US 10', 'US 11'],
    colors: ['Black', 'White', 'Navy'],
    stock: 15,
    rating: 4.8,
    reviews: 124,
    image: 'https://via.placeholder.com/800x800?text=Product+Image'
  };

  const currentProduct = product || sampleProduct;

  const handleSizeSelect = (size) => {
    setSelectedSize(size);
  };

  const handleQuantityChange = (change) => {
    const newQuantity = quantity + change;
    if (newQuantity > 0 && newQuantity <= currentProduct.stock) {
      setQuantity(newQuantity);
    }
  };


  
  return (
    <div className="product-details-container">
      <div className="product-image">
        <img src={item.image} alt={item.name} />
      </div>

      <div className="product-info">
        <h1 className="product-title">{item.name}</h1>
        
        <div className="product-rating">
          <div className="stars">
            {[...Array(5)].map((_, i) => (
              <span key={i} className={i < Math.floor(currentProduct.rating) ? 'filled' : ''}>★</span>
            ))}
          </div>
          <span className="rating-value">{currentProduct.rating}</span>
          <span className="review-count">({currentProduct.reviews} reviews)</span>
        </div>

        <div className="product-pricing">
          <span className="current-price">${item.oldPrice}</span>
          {item.oldPrice < item.newPrice && (
            <span className="original-price">${item.newPrice}</span>
          )}
          {item.oldPrice < item.newPrice && (
            <span className="discount-badge">
              {Math.round((1 - item.oldPrice / item.newPrice) * 100)}% OFF
            </span>
          )}
        </div>

        <p className="product-description">{currentProduct.description}</p>

        <div className="product-colors">
          <h3>Colors:</h3>
          <div className="color-options">
            {currentProduct.colors.map((color, index) => (
              <div 
                key={index} 
                className="color-option" 
                style={{ backgroundColor: color.toLowerCase() }}
                title={color}
              />
            ))}
          </div>
        </div>

        <div className="product-sizes">
          <h3>Available Sizes:</h3>
          <div className="size-options">
            {currentProduct.sizes.map((size, index) => (
              <button
                key={index}
                className={`size-option ${selectedSize === size ? 'selected' : ''}`}
                onClick={() => handleSizeSelect(size)}
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        <div className="stock-info">
          {currentProduct.stock > 0 ? (
            <span className="in-stock">In Stock ({currentProduct.stock} available)</span>
          ) : (
            <span className="out-of-stock">Out of Stock</span>
          )}
        </div>

        <div className="quantity-selector">
          <button onClick={() => handleQuantityChange(-1)}>-</button>
          <span>{quantity}</span>
          <button onClick={() => handleQuantityChange(1)}>+</button>
        </div>

        <div className="product-actions">
          <button className="add-to-cart" onClick={() => addToCart(item.id)}>
            Add to Cart
          </button>
          <button 
            className={`wishlist ${isWishlisted ? 'active' : ''}`}
            onClick={() => setIsWishlisted(!isWishlisted)}
          >
            {isWishlisted ? '❤️ Saved' : '♡ Save'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;