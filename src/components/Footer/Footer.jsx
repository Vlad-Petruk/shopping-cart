import styles from './Footer.module.css';
import { Link } from 'react-router-dom';

function Footer() {

    return (
      <>
        <div className={styles.footer}>
          <div className={styles.infoAndLinks}>
            <div className={styles.info}>
              <h1>DASHA.SHOP</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, quisquam molestiae? Dignissimos, excepturi ipsum ipsam architecto alias vero voluptatem asperiores necessitatibus autem at voluptates veniam facilis obcaecati libero nobis eum. Eum, nesciunt nam fugit odio veritatis qui natus illum? Labore quisquam nobis eius quibusdam cupiditate sequi cumque veniam, recusandae, laudantium, tenetur ut magnam excepturi. Sequi vel repellat pariatur dolores atque.</p>
            </div>
            <div className={styles.links}>
              <h2>Usefull links</h2>
              <Link to="/">
                <p>Home</p>
              </Link>
              <Link to="/shop">
                <p>Shop</p> 
              </Link>
              <Link to="/cart">
                <p>Cart</p>
              </Link>
              <a href='https://github.com/Vlad-Petruk/shopping-cart'>Repository</a>
            </div>
          </div>
          <div className={styles.madeBy}>
            <div className={styles.years}>DASHA.SHOP © 2000-2024. All Rigths Reserved</div>
            <div className={styles.made}>Project made by <a href="https://github.com/Vlad-Petruk">Vlad Petruk</a>, inspired by <a href="https://bio.link/viads">Viads</a> using Fake Store API</div>
          </div>
        </div>
      </>
    );
  }
  
  export default Footer;