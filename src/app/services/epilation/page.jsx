import Image from 'next/image';
import styles from '../epilation/epilation.module.css';
import BackToTopButton from '@components/BackToTopButton';
import IconWax from '@components/icons/IconWax';
import IconLegs from '@components/icons/IconLegs';
import IconDepilation from '@components/icons/IconDepilation';
import IconClean from '@components/icons/IconClean';
import IconBody from '@components/icons/IconBody';
import beauty from '@public/beauty_woman.png';
import flowersShape from '@public/flower_shape_4.png';
import girl from '@public/body_care.png';
import epilation from '@public/skin_care.webp';
import bodyCare from '@public/body_care_2.webp';
import flowerShape from '@public/flower_shape_5.png';
import smallFlowerShape from '@public/flower_shape_7.png';
import bigFlowerShape from '@public/flower_shape_8.png';
import flower from '@public/flower_shape_6.png';

export const metadata = {
  title: 'Шугаринг, воскова епіляція у м.Сміла',
  description:
    'шугаринг, воскова епіляція, переваги, плюси, сміла, смілі',
};

export default function EpilationPage() {
  const waxDatas = [
    'Це ефективний та популярний метод видалення непотрібного волосся, який забезпечує гладкість шкіри на тривалий час.',
    'Цей процес полягає у нанесенні теплого або холодного воску на шкіру, що дозволяє видалити волосся з коренем. ',
  ];
  const sugaringDatas = [
    'Це натуральний метод видалення непотрібного волосся, який забезпечує гладкість шкіри та тривалий ефект.',
    'Головний складовий компонент - цукор, що робить цей метод безпечним для шкіри та менш алергенним порівняно з іншими методами видалення волосся. ',
    'Фактично, епіляція проводиться карамеллю, розігрітою та розм’якшеною до певної консистенції.',
    'Цукрова паста щільно охоплює навіть тонкі та короткі волоски і добре липне, тож ефект не змушує на себе чекати. В результаті – гладка та чиста шкіра.',
  ];
  const epilationDatas = [
    {
      id: 'smooth',
      getIcon: () => <IconLegs size={60} />,
      lable: 'Гладкість на тривалий час',
      text: 'Видаляючи волосся з коренем, епіляція дозволяє насолоджуватися гладкістю шкіри на тривалий час, порівняно порівняно з бритвою або кремами для депіляції.',
    },
    {
      id: 'less-thick-hair',
      getIcon: () => <IconBody size={60} />,
      lable: 'Тонше та менш густе волосся',
      text: 'Після регулярного проведення епіляції волосся стає тоншим та менш густим, що дозволяє зменшити його візуальну помітність.',
    },
    {
      id: 'less-irritable',
      getIcon: () => <IconDepilation size={60} />,
      lable: 'Відсутність вирощування гострих відростків',
      text: 'Епіляція може бути менш подразливою для шкіри, оскільки вона не залишає гострих кінчиків волосся, як бритва, тим самим зменшуючи ризик висипань чи почервонінь, що робить її довготривалішою альтернативою.',
    },
    {
      id: 'different-parts-of-the-body',
      getIcon: () => <IconClean size={60} />,
      lable: ' Bикористання на різних ділянках тіла',
      text: 'Шугаринг та воскова епіляція ефективно видаляє волосся на будь-яких ділянках тіла, включаючи обличчя, руки, ноги, зона бікіні та інші.',
    },
  ];
  return (
    <>
      <section className={styles.epilationSection}>
        <div className='container'>
          <div className={styles.waxBlock}>
          <div className={styles.smallFlower}>
            <Image src={smallFlowerShape} alt='flower-shape' />
          </div>
          <div className={styles.bigFlower}>
            <Image src={bigFlowerShape} alt='flower-shape' />
          </div>
          <div className={styles.smallerFlower}>
            <Image src={smallFlowerShape} alt='flower-shape' />
          </div>
            <div className={styles.bodyCareImg}>
              <Image src={epilation} alt='skin-care' />
            </div>
            <div className={styles.wax}>
              <h2 className={styles.epilationTitle}>Воскова депіляція</h2>
              {waxDatas.map((waxData, idx) => (
                <p className={styles.epilationText} key={`wax-${idx}`}>
                  {waxData}
                </p>
              ))}
            </div>
            <div className={styles.waxImg}>
              <Image src={epilation} alt='skin-care' />
            </div>
          </div>
          <div className={styles.shape}>
            <Image src={flowersShape} alt='' />
          </div>
        </div>
      </section>
      <section className={styles.sugaringSection}>
        <div className='container'>
          <div className={styles.sugaringBlock}>
          <div className={styles.flowersShapeBg}>
            <Image src={flower} alt='' />
          </div>
            <div className={styles.beautyImg}>
              <Image src={beauty} alt='' />
            </div>
            <div className={styles.bodyCareImg}>
              <Image src={bodyCare} alt='' />
            </div>
            <div className={styles.waxText}>
              <h2 className={styles.epilationTitle}>Шугаринг</h2>
              {sugaringDatas.map((sugaringData, idx) => (
                <p className={styles.epilationText} key={`su-${idx}`}>
                  {sugaringData}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className={styles.epilationsSection}>
        <div className='container'>
          <div className={styles.epilationTitleWrapper}>
            <div className={styles.iconWrapper}>
              <IconWax size={60} />
            </div>
            <h2 className={styles.epilationTitle}>Епіляція має такі переваги:</h2>
          </div>
          <div className={styles.epilationBlock}>
            <ul className={styles.epilationList}>
              {epilationDatas.map((epilationData) => (
                <li className={styles.epilationItem} key={epilationData.id}>
                  <div className={styles.iconWrapper}>{epilationData.getIcon()}</div>
                  <div>
                    <h3 className={styles.epilationSubtitle}>{epilationData.lable}</h3>
                    <p className={styles.epilationDesc}>{epilationData.text}</p>
                  </div>
                </li>
              ))}
            </ul>
            <div className={styles.sugaringImg}>
              <Image src={girl} alt='' />
            </div>
          </div>
          <div className={styles.flowerImg}>
            <Image src={flowerShape} alt='shape' />
          </div>
        </div>
      </section>
      <BackToTopButton />
    </>
  );
}
