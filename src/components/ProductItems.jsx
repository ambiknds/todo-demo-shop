import React, { useState } from 'react';
import './ProductItems.css';
import PurchaseDate from './PurchaseDate.jsx';
function ProductItems(props) {
  const [title, setTitle] = useState(props.title);
  // let title = props.title;
  const updateTitle = () => {
    setTitle('updated');
    console.log('user clicked');
  }
  return (
    <div className="product-item">
      <PurchaseDate date={props.date} />
      <div className="product-item-description">
        <h1>{title}</h1>
      </div>
      <div className="product-item-price">{props.amount}</div>

    </div>
  )
}
export default ProductItems;