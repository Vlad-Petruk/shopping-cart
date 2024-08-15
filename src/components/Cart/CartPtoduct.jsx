import styles from "./Cart.module.css"

function CartProduct ({title, img, price, deleteItem}) {

    return (
        <div className={styles.product}>
            <img src={img} alt="title" />
            <p>{title}</p>
            <p>{price}</p>
            <button onClick={deleteItem}>X</button>
        </div>
    )
}

export default CartProduct