import { useState } from "react"
import { useOutletContext } from "react-router-dom";
import styles from "./Cart.module.css"

function CartProduct ({title, img, price, deleteItem, setSum}) {
    const [itemAmount, setItemAmount] = useState(1);

    function increase() {
        setItemAmount((amount) => amount + 1);
        setSum((sum) => (parseFloat(sum) + price).toFixed(2));
    }
    
    function decrease() {
        if (itemAmount > 1) {
            setItemAmount((amount) =>amount - 1);
            setSum((sum) => (parseFloat(sum) - price).toFixed(2));
        }
    }
    

    return (
        <div className={styles.product}>
            <img src={img} alt="title" />
            <div className={styles.middleBox}>
                <p className={styles.title}>{title}</p>
                <p className={styles.itemPrice}>${price}</p>
                
            </div>
            <div className={styles.btnSection}>
                <button className={styles.delete} onClick={deleteItem}>X</button>
                <div className={styles.plusMinusBox}>
                        <div onClick={decrease}>−</div>
                        <div className={styles.itemAmount}>{itemAmount}</div>
                        <div onClick={increase}>+</div>
                </div>
            </div>
           
        </div>
    )
}

export default CartProduct