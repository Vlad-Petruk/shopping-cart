import styles from './Home.module.css'

function Home() {

  return (
    <div className={styles.mainContainer}>
      <div className={styles.info}>Info</div>
      <div className={styles.photoBox}>
        <img className={styles.img} src="/main-img.png" alt="" />
      </div>
    </div>
  );
}

export default Home;
