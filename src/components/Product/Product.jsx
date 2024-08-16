import styles from "./Product.module.css";
import { Link } from "react-router-dom";

function Product ({title, price, img, ratingRate, ratingCount, handleClick, checkInCart}) {

    return (
        <div className={styles.productBox}>
            <div className={styles.imgBox}>
                <img src={img} alt={title} />
            </div>
                <p>{title}</p>
                <div className={styles.ratings}>
                    <img src="/star.png" alt="" />
                    <p className={styles.ratingRate}>{ratingRate}</p>
                    <p>({ratingCount})</p>
                </div>
                <div className={styles.priceAndBtn}>
                    <p className={styles.price}>${price}</p>
                    {checkInCart()? <Link to ="/cart"><p className={styles.inCart}>Product in cart✅</p></Link> : 
                    <button className={styles.btn} onClick={handleClick}><img className={styles.cartPng} src="/cart.png" alt="" />Add to cart</button>}
                    
                </div>
            
        </div>
    )
}

export default Product