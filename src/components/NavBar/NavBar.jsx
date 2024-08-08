import { Link } from 'react-router-dom';
import styles from './NavBar.module.css';

function NavBar() {

    return (
      <>
        <div className={styles.navBar}>
          <div className={styles.logo}>DASHA.SHOP</div>
          <div className={styles.navElements}>
            <Link to="/">
              <div className={styles.home}>Home</div>
            </Link>
            <Link to="shop">
              <div className={styles.shop}>Shop</div>
            </Link>
            <Link to="cart">
            <div className={styles.cart}>
              <img className={styles.cartImg} src="/cart.png" alt="" />
            </div>
            </Link>
          </div>
        </div>
      </>
    );
  }
  
  export default NavBar;