import styles from "./Shop.module.css"

function SideBar() {

    return (
      <div className={styles.sideBar}>
        <div className={styles.categoriesBox}>
          <p>Categories</p>
          <div className={styles.categories}>
            <p>Electronics</p>
            <p>Jewelery</p>
            <p>Men&#39;s clothing</p>
            <p>Woman&#39;s clothing</p>
          </div>
        </div>
      </div>
    );
  }
  
  export default SideBar;