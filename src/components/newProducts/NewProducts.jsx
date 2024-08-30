import ProductsForm from './ProductsForm';
import './NewProducts.css';
export default function NewProducts(props){
  const saveProductDataHandler = (enteredProductData) => {
    props.onAddProduct(enteredProductData);
    console.log("Inside parent new Product ", enteredProductData);
  }
  return(
    <div className='new-product'>
      <ProductsForm onSaveProductData={saveProductDataHandler}/>
    </div>
  )
}