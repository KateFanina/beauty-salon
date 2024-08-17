import About from '@components/About';
import { RiScissorsLine } from 'react-icons/ri';
import styles from './page.module.css';
import OurPoslugy from '@components/OurPoslugy';
import Team from '@components/Team';
import MainButton from '@components/MainButton';

export default function HomePage() {
  return (
    <main>
      <section className={styles.bgHero}>
        <div className={`container ${styles.heroBlock}`}>
          <div className={styles.heroStyle}>
            <p className={styles.subtitle}>
              <RiScissorsLine className={styles.scissors} size={22} />
              Довіртеся нашим експертам по догляду за волоссям
            </p>
            <h1 className={styles.heroTitle}>Догляд за зачіскою</h1>
            <p className={styles.heroText}>
              <RiScissorsLine className={styles.scissors} size={22} />
              Змініть свій образ з нашими талановитими стилістами
            </p>
            <MainButton label='Докладніше' path={'/services'} />
            <div></div>
          </div>
        </div>
      </section>
      <section>
        <About />
      </section>
      <section>
        <OurPoslugy />
      </section>
      <section>
        <Team />
      </section>
    </main>
  );
}
