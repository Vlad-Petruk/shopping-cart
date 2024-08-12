import styles from "./Product.module.css"

function Product ({title, price, img, rating}) {

    return (
        <div className={styles.productBox}>
            <p>{title}</p>
        </div>
    )
}

export default Product