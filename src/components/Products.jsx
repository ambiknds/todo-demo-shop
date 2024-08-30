import ProductItems from "./ProductItems";
import './Products.css';
export default function Products(props) {
  return (
    <div className="products">
      {
        props.products.map((product) => {
          return (
            <ProductItems key={product.id} date={product.date} title={product.title} amount={product.amount} />
          )
        })
      }
    </div>
  )
}