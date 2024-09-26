import { useState } from "react";
import SideBar from "./SideBar";
import ProductBox from "./ProductBox";
import styles from "./Shop.module.css"


function Shop() {
  const [category, setCategory] = useState('');
  
  const handleCategorySelect = (selectedCategory) => {
    setCategory(selectedCategory);
  };

    return (
      <div className={styles.shop}>
        <SideBar onCategorySelect={handleCategorySelect} />
        <ProductBox category = {category} />
      </div>
    );
  }
  
  export default Shop;