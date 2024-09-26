import { useContext, useCallback } from "react";
import PropTypes from 'prop-types';
import styles from "./Shop.module.css";
import Product from "../Product/Product";
import Loading from "../Loading/Loading";
import { useState } from "react";
import { ShopContext } from "../../App";
import useProducts from "../../hooks/useProducts";

function ProductBox({category}) {
  const {cartItems, setCartItems} = useContext(ShopContext);
  const [searchTerm, setSearchTerm] = useState("");
  const { data, error, loading } = useProducts(category);

  const addProduct = useCallback((product) => {
    setCartItems((prevCartItems) => [...prevCartItems, product]);
  }, [setCartItems]);
  

  const isProductInCart = useCallback((productId) => {
    return cartItems.some(cartItem => cartItem.id === productId);
  },[cartItems])

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
            isInCart={isProductInCart(product.id)}
            handleClick={() => addProduct(product)}
          />
        ))}
      </div>
    </div>
  );
}

ProductBox.propTypes = {
  category: PropTypes.string.isRequired,
}

export default ProductBox;
