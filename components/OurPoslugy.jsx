import Link from 'next/link';
import IconHair from './icons/IconHair';
import styles from './OurPoslugy.module.css';
import IconManicure from './icons/Manicure';
import IconWaxing from './icons/Waxing';
import IconFace from './icons/Face';
import { IoIosArrowRoundForward } from 'react-icons/io';

const OurPoslugy = () => {
  const serviceDatas = [
    {
      id: 'hair',
      lable: 'Волосся',
      text: 'Стиль - це вибір, який обираєте Ви. Наші майстри реалізують кожну Вашу ідею на найвищому рівні.',
      link: '/services/hairdressing',
      getIcon: () => <IconHair size={60} />,
    },
    {
      id: 'nails',
      lable: 'Нігті',
      text: 'Кожен клієнт унікальний, і їхні уподобання щодо нігтів різні. Ми пропонуємо послуги відповідно до ваших конкретних потреб.',
      link: '/services/manicure',
      getIcon: () => <IconManicure size={60} />,
    },
    {
      id: 'face',
      lable: 'Обличчя',
      text: 'У нашому салоні краси ми прагнемо допомогти Вам виглядати та почувати себе краще, приділяючи увагу гігієні обличчя.',
      link: '/services/cosmetology',
      getIcon: () => <IconFace size={60} />,
    },
    {
      id: 'body',
      lable: 'Тіло',
      text: 'Мати шкіру красивою та неймовірно гладенькою протягом тривалого часу, допоможуть наші спеціалісти з епіляції.',
      link: '/services/epilation',
      getIcon: () => <IconWaxing size={60} />,
    },
  ];

  return (
    <div className={styles.serviceSection}>
      <div className='container'>
        <div className={styles.serviceBlock}>
          <h2 className={styles.serviceBlockTitle}>Наші послуги з догляду за красою</h2>
        </div>
        <div className={styles.serviceBlocks}>
          {serviceDatas.map((serviceData) => (
            <div className={styles.serviceBlockImg} key={serviceData.id}>
              <div className={styles.serviceCard}>
                <div className={styles.serviceIcon}>{serviceData.getIcon()}</div>
                <div className={styles.serviceCardShape}></div>
              </div>
              <div className={styles.serviceTitle}>
                <h3 className={styles.serviceTitleTwo}>{serviceData.lable}</h3>
                <p className={styles.serviceTitleDesc}>{serviceData.text}</p>
              </div>
              <Link href={serviceData.link} className={styles.heroBtn}>
                Більше
                <IoIosArrowRoundForward size={30} />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurPoslugy;
