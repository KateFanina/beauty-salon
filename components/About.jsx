import styles from './About.module.css';
import Image from 'next/image';
import MainButton from './MainButton';
import manH from '@public/man_hairstyle.webp';
import womanHair from '@public/woman_hair.jpg';
import hairTools from '@public/hairdressing_tools.png';
import flower from '@public/flower_shape_5.png';

export default function About() {
  return (
    <div className={styles.aboutSection}>
      <div className='container'>
        <div className={styles.flowerImg}>
          <Image src={flower} alt='shape' />
        </div>
        <div className={styles.wrapper}>
          <div className={styles.imgWrapper}>
            <div className={styles.imgWrapperTwo}>
              <Image className={styles.aboutHaircut} src={womanHair} alt='woman-haircut' />
              <div className={styles.aboutHairWrapper}>
                <Image className={styles.aboutHaircutMan} src={manH} alt='man-haircut' />
              </div>
              <div className={styles.hairTool}>
                <Image src={hairTools} alt='hair-tools' />
              </div>
            </div>
          </div>
          <div className={styles.textWrapper}>
            <h2 className={styles.about}>Ласкаво просимо до нашої перукарні!</h2>
            <p className={styles.aboutDescription}>
              Ми прагнемо використовувати високоякісні засоби для догляду за волоссям, щоб
              гарантувати найкращий догляд за вашим волоссям. Від шампунів і кондиціонерів до
              засобів для укладання.
            </p>
            <MainButton label='Докладніше' path='/services/hairdressing' />
          </div>
        </div>
      </div>
    </div>
  );
}
