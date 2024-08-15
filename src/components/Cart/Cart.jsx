import { useOutletContext } from "react-router-dom";
import CartProduct from "./CartPtoduct";
import styles from "./Cart.module.css"

function Cart() {
  const [cart, setCart, cartAmount, setCartAmount] = useOutletContext();

// There must be conditional rendering based on cart
    return (
      <div className={styles.cart}>
        <div className={styles.productsBox}>
          <div className={styles.h1}>YOUR CART</div>
          <div className={styles.products}>
          {cart.map((product) => (
          <CartProduct
            key={product.id}
            title={product.title}
            img={product.image}
            price={product.price}
            // deleteItem = {}
          />
      ))}
          </div>
        </div>
        <div className={styles.sumBox}>
          <div className={styles.sum}>
            <p className={styles.h2}>Order Summary</p>
            <div className={styles.subtotal}>
              <p>Subtotal</p>
              <p className={styles.price}>price</p>
            </div>
            <div className={styles.delivery}>
              <p>Delivery fee</p>
              <p className={styles.price}>$0</p>
            </div>
            <div className={styles.total}>
              <p>Total</p>
              <p className={styles.totalPrice}>$0</p>
            </div>
            <button className={styles.buyBtn}>Buy</button>
          </div>
        </div>
      </div>
    );
  }
  
  export default Cart;