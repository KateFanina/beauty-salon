import { CiLocationOn, CiPhone } from 'react-icons/ci';
import { SlClock } from 'react-icons/sl';
import Image from 'next/image';
import BackToTopButton from '@components/BackToTopButton';
import styles from './page.module.css';
import smileWoman from '@public/smiling_girl.png';
import salon from '@public/photo_salon.jpg';

export const metadata = {
  title: 'Контакти',
  description: 'контакти',
};

const Contacts = () => {
  const contactDatas = [
    {
      getIcon: () => <CiLocationOn />,
      id: 'adress',
      lable: 'Наша адреса',
      text: 'м. Сміла, ',
      desc: ' вулиця 40-річчя Перемоги, 6',
    },
    {
      getIcon: () => <CiPhone />,
      id: 'phone',
      lable: 'Телефон',
      text: '+380631736533',
    },
    {
      getIcon: () => <SlClock />,
      id: 'work-ours',
      lable: 'Години роботи',
      text: ' Вівторок - Неділя: 9.00-18.00',
      desc: ' Понеділок: вихідний',
    },
  ];
  return (
    <>
      <section className={styles.ourContacts}>
        <div className='container'>
          <div className={styles.contactUs}>
          <h4 className={styles.contactUsTitle}>Зв&apos;яжіться з нами</h4>
            <div>
              <Image src={smileWoman} alt='smile-woman' />
            </div>
          </div>
        </div>
      </section>
      <div className={styles.information}>
        <div className='container'>
          <div className={styles.infoBlock}>
            <ul className={styles.infoContainer}>
              <h2 className={styles.infoTitle}>Контактна інформація</h2>
              {contactDatas.map((contactData) => (
                <li className={styles.infoItem} key={contactData.id}>
                  <div className={styles.infoIcon}>{contactData.getIcon()}</div>
                  <div>
                    <h2 className={styles.infoItemTitle}>{contactData.lable}</h2>
                    <p className={styles.infoItemText}>{contactData.text}</p>
                    <p className={styles.infoItemText}>{contactData.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
            <div className={styles.infoMap}>
              <iframe
                src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2607.689009463816!2d31.89472!3d49.1874876!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d13ff66acf3a81%3A0xdfaf7d5f8cc64bd8!2z0LLRg9C70LjRhtGPIDQwLdGA0ZbRh9GH0Y8g0J_QtdGA0LXQvNC-0LPQuCwgNiwg0KHQvNGW0LvQsCwg0KfQtdGA0LrQsNGB0YzQutCwINC-0LHQu9Cw0YHRgtGMLCAyMDcwMA!5e0!3m2!1suk!2sua!4v1708513191187!5m2!1suk!2sua'
                style={{
                  width: '100%',
                  height: '600px',
                  top: '0px',
                  left: '0px',
                  border: 'none',
                }}
                loading='lazy'
                referrerPolicy='no-referrer-when-downgrade'
              ></iframe>
            </div>
          </div>
          <div className={styles.infoPhotoSalon}>
            <Image src={salon} alt='photo-salon' />
          </div>
        </div>
      </div>
      <BackToTopButton/>
    </>
  );
};

export default Contacts;
