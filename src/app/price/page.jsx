import styles from '../price/price.module.css';

export const metadata = {
  title: 'Ціни салону краси у м.Сміла',
  description: 'ціни',
};

const PricePage = () => {
  return (
    <section className={styles.priceBg}>
      <div className={`container ${styles.heroBlock}`}>
        <div className={styles.priceStyle}>
          <h1 className={styles.priceTitle}>Сторінка на стадії заповнення...</h1>
        </div>
      </div>
    </section>
  );
};

export default PricePage;
