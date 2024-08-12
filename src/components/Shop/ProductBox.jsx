import styles from "./Shop.module.css";
import Product from "../Product/Product";
import Loading from "../Loading/Loading";

function ProductBox({ data, error, loading }) {
  if (loading) {
    return <div className={styles.loading}><Loading /></div> ;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <div className={styles.productBox}>
      {data.map((product) => (
        <Product
          key={product.id}
          title={product.title}
          img={product.image}
          price={product.price}
          ratingRate={product.rating.rate}
          ratingCount={product.rating.count}
        />
      ))}
    </div>
  );
}

export default ProductBox;
