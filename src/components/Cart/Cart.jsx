import { useState, useEffect } from "react";
import { useOutletContext, Link } from "react-router-dom";
import CartProduct from "./CartProduct";
import styles from "./Cart.module.css"

function Cart() {
  const [cart, setCart, cartAmount, setCartAmount] = useOutletContext(); 
  const [sum, setSum] = useState(0);

  useEffect(()=>{
    const totalSum = cart.reduce((acc, prod) => acc + prod.price, 0);
    setSum(totalSum);
  },[cart])
  
  const deleteItem = (id) => {
    const updatedCart = cart.filter((product) => product.id !== id);
    setCartAmount(cartAmount-1)
    setCart(updatedCart);
  };
 
  return (
    <div className={styles.cart}>
      {cart.length > 0 ? (
        <>
          <div className={styles.productsBox}>
            <div className={styles.h1}>YOUR CART</div>
            <div className={styles.products}>
              {cart.map((product) => (
                <CartProduct
                  key={product.id}
                  title={product.title}
                  img={product.image}
                  price={product.price}
                  deleteItem={() => deleteItem(product.id)}
                  setSum={setSum}
                />
              ))}
            </div>
          </div>
          <div className={styles.sumBox}>
            <div className={styles.sum}>
              <p className={styles.h2}>Order Summary</p>
              <div className={styles.subtotal}>
                <p>Subtotal</p>
                <p className={styles.price}>${sum}</p>
              </div>
              <div className={styles.delivery}>
                <p>Delivery fee</p>
                <p className={styles.price}>$0</p>
              </div>
              <div className={styles.total}>
                <p>Total</p>
                <p className={styles.totalPrice}>${sum}</p>
              </div>
              <button className={styles.buyBtn}>Buy</button>
            </div>
          </div>
        </>
      ) : (
        <div className={styles.empty}>
          <p>Your cart is empty</p>
          <Link to={'/shop'}>
            <button className={styles.shopBtn}>Shop now</button>
          </Link>
          </div>
      )}
    </div>
  );
}
  
  export default Cart;