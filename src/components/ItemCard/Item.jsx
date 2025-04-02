import React from 'react'
import './Item.css'
import { useNavigate } from 'react-router-dom'
function Item(props) {
  const navigate = useNavigate()
  return (
    <div className="item">

<div className="item-card" onClick={() => navigate(`/product/${props.id}`)}>
        <img src={props.image} alt="Product-Image" className='item-img' />
        <p>{props.name}</p>
        <div className="item-prices">
            <div className="item-new-price">
            {props.newPrice}
            </div>
            <div className="item-old-price">
            {props.oldPrice}
            </div>
        </div>
        </div>

        


    </div>
  )
}

export default Item
