import Image from 'next/image';
import styles from './services.module.css';
import MainButton from '@components/MainButton';
import cleaning from '@public/ultrasonic_cleaning.webp';
import flower from '@public/flower_shape_6.png';
import shape from '@public/flower_shape_4.png';
import flowerShape from '@public/flower_shape_2.png';
import nailImg from '@public/beauty_manicure.jpg';
import waxingGirl from '@public/skin_care_2.png';
import haircut from '@public/hairstyle.png';
import leaf_shape_1 from '@public/leaf_shape_1.png';
import leaves from '@public/leaf_shape_2.png';

export const metadata = {
  title: 'Наші послуги',
  description: 'перукарські послуги, нігті, нігтьові послуги,манікюр, педикюр, епіляція, шугаринг, косметологічні послуги, ламінування, вій, брів',
};

export default function Services() {

  return (
    <main>
      <section>
        <div className={`${styles.bgHair} ${styles.navList}`}>
          <div className='container'>
            <div div className={styles.haircutSection}>
              <div className={styles.wrap}>
                <div className={styles.hairTitle}>
                  <h2 className={styles.haircutTitle}>Перукарські Послуги</h2>
                  <p className={styles.haircutText}>
                    Зануртеся у світ краси та стилю з нашими перукарськими послугами, що
                    задовольнять найвибагливіші смаки та дозволять кожному клієнту відчути себе
                    особливим.
                  </p>
                </div>
                <MainButton label='Докладніше' path='/services/hairdressing' />
              </div>
              <div className={styles.wrapImg}>
                <Image className={styles.womanImg} src={haircut} alt='coloring-hair' />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.nailSection}>
        <div className='container'>
          <div className={styles.leafImg}>
            <Image src={leaf_shape_1} alt='shape' />
          </div>
          <div className={styles.leaves}>
            <Image src={leaves} alt='shape' />
          </div>
          <div className={styles.nailBlock}>
            <div className={styles.nailImageWrap}>
              <Image src={nailImg} alt='woman-with-manicure' className={styles.nailImage} />
            </div>
            <div className={styles.nailTitleBlock}>
              <h2 className={styles.haircutTitle}>Нігтьові послуги</h2>
              <p className={styles.nailTitle}>
                Наші нігтьові послуги - це докладна увага до деталей та найвища якість. Погляньте на
                світ з новим блиском завдяки нашому бездоганному манікюру та педикюру.
              </p>
              <MainButton label='Докладніше' path='/services/manicure' />
            </div>
          </div>
        </div>
      </section>
      <section className={styles.waxingSection}>
        <div className='container'>
          <div className={styles.waxingBlock}>
            <div className={styles.waxingText}>
              <h2 className={styles.haircutTitle}> Послуги епіляції</h2>
              <p className={styles.nailTitle}>
                Забудьте про непотрібне волосся з нашими професійними послугами шугарингу та
                воскової депіляції. Насолоджуйтеся гладкістю шкіри без неприємних відчуттів завдяки
                нашим дбайливим процедурам.
              </p>
              <MainButton label='Докладніше' path={'/services/epilation'} />
            </div>
            <div className={styles.waxingImg}>
              <Image src={waxingGirl} alt='body-care'/>
            </div>
          </div>
          <div className={styles.waxingShape}>
            <Image src={flower} alt='' />
          </div>
          <div className={styles.shape}>
            <Image src={shape} alt='' />
          </div>
        </div>
      </section>
      <section className={styles.cosmeticSection}>
        <div className='container'>
          <h2 className={styles.haircutTitleOne}> Косметологічні послуги </h2>
          <div className={styles.cosmeticBlock}>
            <div className={styles.waxingImg}>
              <Image src={cleaning} alt="ultrasonic-face-cleaning"/>
            </div>
            <div className={styles.cosmeticText}>
              <h2 className={styles.haircutTitleTwo}> Косметологічні послуги </h2>
              <p className={styles.nailTitle}>
                Дозвольте вашому обличчю знову засяяти здоров&apos;ям та свіжістю завдяки нашим
                ефективним процедурам чистки обличчя, а також насолоджуйтеся красою та виразністю
                вашого погляду завдяки нашим послугам ламінування та фарбування вій та брів.
                Досвідчені майстри забезпечать вам бездоганний результат та надійний догляд за
                вашими найвищими акцентами.
              </p>
              <MainButton label='Докладніше' path='/services/cosmetology' />
            </div>
          </div>
          <div className={styles.flowerShape}>
            <Image src={flowerShape} alt='' />
          </div>
        </div>
      </section>
    </main>
  );
}
