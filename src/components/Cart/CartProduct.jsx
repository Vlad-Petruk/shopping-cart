import styles from "./Cart.module.css";

function CartProduct({ id, title, img, price, itemAmount, updateItemAmount, deleteItem }) {
  
  const increase = () => {
    updateItemAmount(id, itemAmount + 1);
  };

  const decrease = () => {
    if (itemAmount > 1) {
      updateItemAmount(id, itemAmount - 1);
    }
  };

  return (
    <div className={styles.product}>
      <img src={img} alt={title} />
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
  );
}

export default CartProduct;
