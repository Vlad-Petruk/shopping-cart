import { useState, useContext, useMemo, useCallback } from "react";
import { Link } from "react-router-dom";
import { ShopContext } from "../../App";
import CartProduct from "./CartProduct";
import styles from "./Cart.module.css";

function Cart() {
  const {cartItems, setCartItems} = useContext(ShopContext);
  const [itemAmounts, setItemAmounts] = useState({});

  const totalSum = useMemo(() => {
    return cartItems.reduce((acc, product) => {
      const amount = itemAmounts[product.id] || 1;
      return acc + Math.round(product.price * 100) * amount;
    }, 0) / 100;
  }, [cartItems, itemAmounts]);

  const updateItemAmount = useCallback((id, newAmount) => {
    setItemAmounts((prevAmounts) => ({
      ...prevAmounts,
      [id]: newAmount,
    }));
  }, [setItemAmounts]);
  
  const deleteItem = useCallback((id) => {
    const updatedCart = cartItems.filter((product) => product.id !== id);
    setCartItems(updatedCart);
    setItemAmounts((prevAmounts) => {
      // eslint-disable-next-line no-unused-vars
      const { [id]: _, ...rest } = prevAmounts;
      return rest;
    });
  }, [cartItems, setCartItems, setItemAmounts]);
  
  const processBuying = () => {
    setCartItems([]);
    setItemAmounts({});
  }
  

  return (
    <div className={styles.cart}>
      {cartItems.length > 0 ? (
        <>
          <div className={styles.productsBox}>
            <div className={styles.h1}>YOUR CART</div>
            <div className={styles.products}>
              {cartItems.map((product) => (
                <CartProduct
                  key={product.id}
                  id={product.id}
                  title={product.title}
                  img={product.image}
                  price={product.price}
                  itemAmount={itemAmounts[product.id] || 1}
                  updateItemAmount={updateItemAmount}
                  deleteItem={() => deleteItem(product.id)}
                />
              ))}
            </div>
          </div>
          <div className={styles.sumBox}>
            <div className={styles.sum}>
              <p className={styles.h2}>Order Summary</p>
              <div className={styles.subtotal}>
                <p>Subtotal</p>
                <p className={styles.price}>${totalSum}</p>
              </div>
              <div className={styles.delivery}>
                <p>Delivery fee</p>
                <p className={styles.price}>$0</p>
              </div>
              <div className={styles.total}>
                <p>Total</p>
                <p className={styles.totalPrice}>${totalSum}</p>
              </div>
              <button onClick={processBuying} className={styles.buyBtn}>Buy</button>
            </div>
          </div>
        </>
      ) : (
        <div className={styles.empty}>
          <p>Your cart is empty</p>
          <Link to="/shop">
            <button className={styles.shopBtn}>Shop now</button>
          </Link>
        </div>
      )}
    </div>
  );
}

export default Cart;
