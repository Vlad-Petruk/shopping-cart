import { useOutletContext } from "react-router-dom";
import styles from "./Shop.module.css";
import Product from "../Product/Product";
import Loading from "../Loading/Loading";
import { useState } from "react";

function ProductBox({ data, error, loading }) {
  const [cart, setCart, cartAmount, setCartAmount] = useOutletContext();
  const [searchTerm, setSearchTerm] = useState("");

  function addProduct(product) {
    setCart([...cart, product]);
    setCartAmount(cartAmount + 1); 
  }

  function isProductInCart(productId) {
    return cart.some(cartItem => cartItem.id === productId);
  }

  // Handle search input change
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  // Filter products based on search term
  const filteredProducts = data.filter(product =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) {
    return <div className={styles.loading}><Loading /></div>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <div className={styles.productBox}>
      <div className={styles.search}>
        <input
          type="text"
          className={styles.input}
          placeholder="Search for products..."
          value={searchTerm}
          onChange={handleSearchChange}
        />
        <div className={styles.quantity}>{filteredProducts.length} items</div>
      </div>
      <div className={styles.products}>
        {filteredProducts.map((product) => (
          <Product
            key={product.id}
            title={product.title}
            img={product.image}
            price={product.price}
            ratingRate={product.rating.rate}
            ratingCount={product.rating.count}
            checkInCart={() => isProductInCart(product.id)}
            handleClick={() => addProduct(product)}
          />
        ))}
      </div>
    </div>
  );
}

export default ProductBox;
