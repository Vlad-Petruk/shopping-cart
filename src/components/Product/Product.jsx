import styles from "./Product.module.css"

function Product ({title, price, img, ratingRate, ratingCount}) {

    return (
        <div className={styles.productBox}>
            <div className={styles.imgBox}>
                <img src={img} alt={title} />
            </div>
                <p>{title}</p>
                <div className={styles.ratings}>
                    <p>{ratingRate}</p>
                    <p>{ratingCount}</p>
                </div>
                <p className={styles.price}>${price}</p>
            
        </div>
    )
}

export default Product