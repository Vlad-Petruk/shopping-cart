import SideBar from "./SideBar";
import ProductBox from "./ProductBox";
import styles from "./Shop.module.css"

function Shop() {

    return (
      <div className={styles.shop}>
        <SideBar />
        <ProductBox />
      </div>
    );
  }
  
  export default Shop;