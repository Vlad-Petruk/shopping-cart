import PropTypes from 'prop-types';
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
        <button className={styles.delete} onClick={deleteItem}>&times;</button>
        <div className={styles.plusMinusBox}>
          <div onClick={decrease}>−</div>
          <div className={styles.itemAmount}>{itemAmount}</div>
          <div onClick={increase}>+</div>
        </div>
      </div>
    </div>
  );
}

CartProduct.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  itemAmount: PropTypes.number.isRequired,
  updateItemAmount: PropTypes.func.isRequired,
  deleteItem: PropTypes.func.isRequired,
};

export default CartProduct;
