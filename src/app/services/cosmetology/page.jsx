import Image from 'next/image';
import { BsClockHistory } from 'react-icons/bs';
import flowerOneShape from '@public/flower_shape_2.png';
import flowerShape from '@public/flower_shape_1.png';
import IconBeauty from '@components/icons/IconBeauty';
import IconClean from '@components/icons/IconClean';
import IconEyebrowColoring from '@components/icons/IconEyebrowColoring';
import IconEyebrowCorrection from '@components/icons/IconEyebrowCorrection';
import IconEyebrowWax from '@components/icons/IconEyebrowWax';
import IconFace from '@components/icons/Face';
import IconLamination from '@components/icons/IconLamination';
import rose from '@public/flower_rose_shape_1.jpg';
import roses from '@public/flower_rose_shape_2.jpg';
import woman from '@public/face_care_2.png';
import styles from './cosmetology.module.css';

export const metadata = {
  title: 'Косметологія, догляд за віями та бровами у м.Сміла',
  description: 'Ультразвукова чистка обличчя, ламінування, фарбування, вій, брів, сміла',
};

export default function CosmetologyPage() {
  const cosmetologyDatas = [
    {
      id: 'efficiency',
      getIcon: () => <IconFace size={60} />,
      lable: 'Ефективність',
      text: 'Дбайливо очищає шкіру від поверхневих забруднень, ороговілих клітин,себорейного жиру, комедонів (чорних цяток)',
    },
    {
      id: 'duration',
      getIcon: () => <BsClockHistory size={60} color='#c28565' />,
      lable: 'Тривалість',
      text: 'Від 30 до 60 хвилин в залежності від стану шкіри та конкретних потреб клієнта.',
    },
    {
      id: 'collagen',
      getIcon: () => <IconBeauty size={60} />,
      lable: 'Вироблення колагену',
      text: 'Сприяє стимуляції вироблення колагену та еластину, що покращує тонус та текстуру шкіри',
    },
    {
      id: 'healthy-appearance',
      getIcon: () => <IconClean size={60} />,
      lable: 'Здоровий вигляд',
      text: "Забезпечувати м'якість, гладкість та оновлення шкіри обличчя, надаючи їй здоровий вигляд та природний сяйво.",
    },
  ];
  const browsDatas = [
    {
      id: 'lamination',
      getIcon: () => <IconLamination size={60} />,
      lable: 'Ламінування вій та брів',
      text: 'Це інноваційна процедура, спрямована на зміцнення, живлення та відновлення волосся в області очей. Використовуються спеціальні засоби, які вирівнюють структуру волосся, надаючи їм більш густий та здоровий вигляд. Результат - природно вигнуті, густіші та блискучі вії та брови, які виглядають доглянутими і привабливими навіть без макіяжу.',
    },
    {
      id: 'dyeing',
      getIcon: () => <IconEyebrowColoring size={60} />,
      lable: 'Фарбування брів та вій',
      text: 'Цей процес допомагає надати брівкам більш виразний вигляд, виправити недоліки форми та відтінку, а також зробити обличчя більш виразним.',
    },
    {
      id: 'eyebrow-wax-correction',
      getIcon: () => <IconEyebrowWax size={60} />,
      lable: 'Воскова корекція брів',
      text: ' Використовується спеціальний віск, який наносять на шкіру в області брів, а потім швидко видаляють разом з ним волосся. Цей метод дозволяє видалити більше волосся за один раз, що робить його швидшим та менш болісним порівняно з механічною корекцією.',
    },
    {
      id: 'mechanical-correction',
      getIcon: () => <IconEyebrowCorrection size={60} />,
      lable: 'Механічна корекція брів',
      text: ' Цей метод дозволяє більш детально контролювати форму та довжину брів за допомогою спеціальних інструментів, таких як пінцет або ножиці, а також видаляти окремі волоски для отримання більш точного результату.',
    },
  ];
  return (
    <>
      <section className={styles.bgWoman}>
        <div className='container'>
          <div>
            <h2 className={styles.cosmetologyTitle}>Ультразвукова чистка обличчя</h2>
            <ul className={styles.cosmetologyList}>
              {cosmetologyDatas.map((cosmetologyData) => (
                <li className={styles.cosmetologyItem} key={cosmetologyData.id}>
                  <div className={styles.iconWrapper}>{cosmetologyData.getIcon()}</div>
                  <div>
                    <h3 className={styles.cosmetologySubTitle}>{cosmetologyData.lable}</h3>
                    <p className={styles.cosmetologyText}>{cosmetologyData.text}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className={styles.cosmetologyShape}>
            <Image src={rose} alt='rose' />
          </div>
        </div>
      </section>
      <section className={styles.browsSection}>
        <div className='container'>
          <h2 className={styles.browsTitle}>Догляд за віями та бровами</h2>
          <div className={styles.browsBlock}>
            <ul className={styles.browsList}>
              {browsDatas.map((browsData) => (
                <li className={styles.browsItem} key={browsData.id}>
                  <div className={styles.browsWrapper}>
                    <div className={styles.browsIcon}>{browsData.getIcon()}</div>
                    <h3 className={styles.cosmetologySubTitle}>{browsData.lable}</h3>
                  </div>
                  <div>
                    <p className={styles.cosmetologyText}>{browsData.text}</p>
                  </div>
                </li>
              ))}
            </ul>
            <div className={styles.browsImgWrapper}>
              <Image src={woman} alt='woman' />
              <div className={styles.browsImgShape}>
                <Image src={flowerShape} alt='flower-shape' />
              </div>
              <div className={styles.browsShapeWrapper}>
                <Image src={flowerOneShape} alt='flower-shape' />
              </div>
              <div className={styles.browsShape}>
                <Image src={roses} alt='rose' />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
