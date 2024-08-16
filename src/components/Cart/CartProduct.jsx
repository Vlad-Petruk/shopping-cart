import styles from "./Cart.module.css"

function CartProduct ({title, img, price, deleteItem}) {
    

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
                        <div>−</div>
                        <div className={styles.itemAmount}>0</div>
                        <div>+</div>
                </div>
            </div>
           
        </div>
    )
}

export default CartProduct