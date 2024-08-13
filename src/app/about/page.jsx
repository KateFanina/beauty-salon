import IconRose from '@components/icons/IconRose';
import IconLotus from '@components/icons/IconLotus';
import IconLotusTwo from '@components/icons/IconLotusTwo';
import IconFlower from '@components/icons/IconFlower';
import IconSacura from '@components/icons/IconSacura';
import IconSacuraTwo from '@components/icons/IconSacuraTwo';
import hairBg from '@public/about_us_bg.jpg';
import BackToTopButton from '@components/BackToTopButton';
import Image from 'next/image';
import styles from './about.module.css';

export const metadata = {
  title: 'Про нас',
  description:
    'Наш салон краси надає своїм клієнтам професійні послуги, де ціна відповідає якості.',
};

const AboutPage = () => {
  const aboutDatas = [
    {
      id: 'professional-services',
      getIcon: () => <IconRose size={40} />,
      title: 'Професійні послуги',
      text: 'Наш салон краси надає своїм клієнтам професійні послуги, де ціна відповідає якості.',
    },
    {
      id: 'know -our-business',
      getIcon: () => <IconLotusTwo size={40} />,
      title: 'Знаємо свою справу',
      text: 'Кожен майстер, не залежно чи це перукар, чи майстер манікюру-педикюру, майстер епіляції, косметолог – знає свою справу.',
    },
    {
      id: 'individual-approach',
      getIcon: () => <IconFlower size={40} />,
      title: 'Індивідуальний підхід',
      text: 'Наш індивідуальний підхід до клієнтів оцінить кожен, хто завітає до нас.',
    },
    {
      id: 'make-your-wishes-come-true',
      getIcon: () => <IconLotus size={40} />,
      title: 'Втілимо Ваші бажання',
      text: 'Звернувшись до нас, Ви можете бути впевнені в тому, що майстер зробить все можливе для втілення Вашого бажання і надасть послугу на найвищому рівні.',
    },
    {
      id: 'work-time',
      getIcon: () => <IconSacura size={40} />,
      title: 'Режим роботи',
      text: 'Ми завжди готові піти Вам назустріч і відрегулювати режим нашої роботи. Будь то відкриття в 7 ранку, або закриття в пізній вечір (для тих, хто дуже зайнятий).',
    },
    {
      id: 'great-experience',
      getIcon: () => <IconSacuraTwo size={40} />,
      title: 'Великий досвід',
      text: 'Завдяки великому досвіду нашої команди майстрів, ми знаємо, що від нас чекають наші клієнти і надамо їм можливість втілити свої бажання.',
    },
  ];
  return (
    <section className={styles.aboutUs}>
      <div className='container'>
        <div className={styles.aboutUshairBg}>
          <Image src={hairBg} alt='beauty-woman' />
        </div>
        <ul className={styles.aboutUsList}>
          {aboutDatas.map((aboutData) => (
            <li className={styles.aboutUsItem} key={aboutData.id}>
              <div className={styles.aboutTitleWrapper}>
                <div className={styles.aboutIconWrapper}>{aboutData.getIcon()}</div>
                <h2 className={styles.aboutUsTitle}>{aboutData.title}</h2>
              </div>
              <p className={styles.aboutUsText}>{aboutData.text}</p>
            </li>
          ))}
        </ul>
      </div>
      <BackToTopButton />
    </section>
  );
};

export default AboutPage;
