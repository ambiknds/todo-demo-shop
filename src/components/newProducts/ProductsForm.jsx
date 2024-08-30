import React, { useState } from 'react';
import './ProductsForm.css';
export default function ProductsForm(props) {
  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredAmount, setEnteredAmount] = useState('');
  const [enteredDate, setEnteredDate] = useState('');

  const titleChangeHandler = (e) => {
    setEnteredTitle(e.target.value);
    console.log(e.target.value);
  }
  const amountChangeHandler = (e) => {
    setEnteredAmount(e.target.value);
    console.log(e.target.value);
  }
  const dateChangeHandler = (e) => {
    setEnteredDate(e.target.value);
    console.log(e.target.value);
  }
  const submitHandler = (e) => {
    e.preventDefault();
    console.log('data Submit')
    const productsData = {
      id: Math.floor(Math.random() * 100),
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    }
    props.onSaveProductData(productsData);
    // console.log(productData);

    setEnteredAmount('');
    setEnteredDate('');
    setEnteredTitle('');
  }


  return (
    <form onSubmit={submitHandler}>
      <div className="new-product-control">
        <label>Title</label>
        <input type="text" onChange={titleChangeHandler} value={enteredTitle} />
      </div>
      <div className="new-product-control">
        <label>Amount</label>
        <input type="number" min="00.01" onChange={amountChangeHandler} value={enteredAmount} />
      </div>
      <div className="new-product-control">
        <label>Purchase Date</label>
        <input type="date" min="2020-01-01" onChange={dateChangeHandler} value={enteredDate} />
      </div>
      <div className="new-product-actions">
        <button type="submit">Add Product</button>
      </div>
    </form>
  )
}