import styles from './Footer.module.css';
import { CiLocationOn, CiPhone } from 'react-icons/ci';
import { SlClock } from 'react-icons/sl';

const Footer = () => {
  return (
    <footer>
      <div className={styles.footerBg}>
        <div className='container'>
          <div>
            <address>
              <ul className={styles.adressList}>
                <li className={styles.adressItem}>
                  <CiLocationOn />
                  <p className={styles.adressText}> м. Сміла, вул. 40-річчя Перемоги, 6</p>
                </li>
                <li className={styles.adressItem}>
                  <CiPhone />
                  <a className={styles.media} href='tel:+380631736533'>
                    +380631736533
                  </a>
                </li>
                <li className={styles.adressItem}>
                  <SlClock />
                  <p>Вт - Нд: 9:00 - 18:00</p>
                </li>
              </ul>
            </address>
          </div>
          <h2 className={styles.media}>Beauty Salon 2024</h2>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
