import React, { useState } from 'react';
import './App.css'
import Products from './components/Products';
import NewProducts from './components/newProducts/NewProducts';

const productsData = [
  {
    id: 1,
    title: 'Product 1',
    amount: '$20.5',
    date: new Date(2021, 6, 18),
    description: 'First product'
  },
  {
    id: 2,
    title: 'Product 2',
    amount: '$200.5',
    date: new Date(2021, 6, 18),
    description: 'Second product'
  },
  {
    id: 3,
    title: 'Product 3',
    amount: '$60.5',
    date: new Date(2022, 7, 23),
    description: 'Third product'
  }
]

export default function App() {

  const [products, setProducts] = useState(productsData)
  const addProductHandler = (product) => {
    console.log('Inside App ', product)
    setProducts([product, ...products]);
  }
  return (
    <div className='App'>
      <NewProducts onAddProduct={addProductHandler} />
      <Products products={products} />
    </div>
  )
}