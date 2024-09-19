import { useState } from 'react';
import styles from "./Shop.module.css";


function SideBar({ onCategorySelect }) {
  const handleCategoryClick = (category) => {
    onCategorySelect(category);
  };

  return (
    <div className={styles.sideBar}>
      <div className={styles.categoriesBox}>
        <p>Categories</p>
        <div className={styles.categories}>
          <p onClick={() => handleCategoryClick('')}>All</p>
          <p onClick={() => handleCategoryClick('/category/electronics')}>Electronics</p>
          <p onClick={() => handleCategoryClick('/category/jewelery')}>Jewelery</p>
          <p onClick={() => handleCategoryClick('/category/men\'s clothing')}>Men&apos;s clothing</p>
          <p onClick={() => handleCategoryClick('/category/women\'s clothing')}>Woman&apos;s clothing</p>
        </div>
      </div>
    </div>
  );
}

export default SideBar;
