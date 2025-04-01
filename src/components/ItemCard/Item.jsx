import React from 'react'
import './Item.css'
function Item(props) {
  return (
    <div className="item">

        <div className="item-card">
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
