import styles from "./Shop.module.css"
import { useOutletContext } from "react-router-dom";
import Product from "../Product/Product";

function ProductBox() {
  const { data, error, loading, useFetch } = useOutletContext();
  useFetch('')

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }
    return (
      <div className={styles.productBox}>
        {console.log(data)}
        {data.map((product)=>(
          <Product key={product.id} title={product.title} img = {product.img} price={product.price} rating={product.rating} />
        ))}
      </div>
    );
  }
  
  export default ProductBox;