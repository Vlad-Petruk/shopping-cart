import { Link } from 'react-router-dom';
import styles from './Home.module.css'

function Home() {

  return (
    <div className={styles.mainContainer}>
      <div className={styles.info}>
        <p>Find Products That Matches Your Style</p>
        <p>Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.</p>
        <Link to="shop">
          <button className={styles.shopBtn}>Shop now</button>
          </Link>
        <div className={styles.sellNumbers}>
          <div className={styles.brands}>
            <p>200+</p>
            <p>International brands</p>
          </div>
          <div className={styles.products}>
            <p>2000+</p>
            <p>High-quality products</p>
          </div>
          <div className={styles.customers}>
            <p>30000+</p>
            <p>Happy customers</p>
          </div>
        </div>
      </div>
      <div className={styles.photoBox}>
        <img className={styles.img} src="/main-img.png" alt="" />
      </div>
    </div>
  );
}

export default Home;
