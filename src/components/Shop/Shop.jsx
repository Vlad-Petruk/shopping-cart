import { useState } from "react";
import SideBar from "./SideBar";
import ProductBox from "./ProductBox";
import styles from "./Shop.module.css"
import useFetch from "../../hooks/useFetch";

function Shop() {
  const [category, setCategory] = useState('');
  const { data, error, loading } = useFetch(category);

  const handleCategorySelect = (selectedCategory) => {
    setCategory(selectedCategory);
  };

    return (
      <div className={styles.shop}>
        <SideBar onCategorySelect={handleCategorySelect} />
        <ProductBox data={data} error={error} loading={loading} />
      </div>
    );
  }
  
  export default Shop;