'use client';
import { FaArrowUpLong } from 'react-icons/fa6';
import { useState } from 'react';
import Lightbox from 'yet-another-react-lightbox';
import { Thumbnails, Fullscreen, Counter } from 'yet-another-react-lightbox/plugins';
import 'yet-another-react-lightbox/styles.css';
import 'yet-another-react-lightbox/plugins/thumbnails.css';
import 'yet-another-react-lightbox/plugins/counter.css';
import classicTwo from '@public/manicure_classic.jpg';
import flowerShape from '@public/flower_shape_1.png';
import gellish from '@public/gel_nail.jpg';
import gelNail from '@public/manicure_gel.jpg';
import Image from 'next/image';
import MainButton from '@components/MainButton';
import nails17 from '@public/nail_gel.jpg';
import NailTwo from '@components/icons/NailTwo';
import NaiPolish from '@components/icons/NailPolish';
import parafinOne from '@public/parafin_hands.jpg';
import Pedicure from '@components/icons/Pedicure';
import pedicureImg from '@public/pedicure.jpg';
import nails1 from '@public/photo_manicure_1.png';
import nails10 from '@public/photo_manicure_10.png';
import nails101 from '@public/photo_manicure_6.png';
import nails11 from '@public/photo_manicure_11.png';
import nails12 from '@public/photo_manicure_12.png';
import nails13 from '@public/photo_manicure_13.png';
import nails14 from '@public/photo_pedicure_1.png';
import nails15 from '@public/photo_pedicure_2.png';
import nails2 from '@public/photo_manicure_2.png';
import nails4 from '@public/photo_manicure_4.png';
import nails5 from '@public/photo_manicure_5.png';
import nails9 from '@public/photo_manicure_3.png';
import styles from './manicure.module.css';
import slides from './manicureData';
import ManicureGallery from './ManicureGallery';

export default function ManicurePage() {
  const [index, setIndex] = useState(-1);

  const nailDatas = [
    {
      getImg: () => <Image src={classicTwo} alt='classic-manicure' />,
      id: 'manicure',
      text: 'Він включає обрізання, формування та полірування нігтів, а також догляд за кутикулою для природного та охайного вигляду.',
      lable: 'Класичний манікюр',
    },
    {
      getImg: () => <Image src={gelNail} alt='gel-nail' />,
      id: 'gelNail',
      text: 'Це тривалий вид манікюру, який дозволяє зберегти бездоганний вигляд нігтів на тривалий час без пошкоджень або сколів.',
      lable: 'Гель лак',
    },
    {
      getImg: () => <Image src={gellish} alt='nail-design' />,
      id: 'gellish',
      text: 'Від класичних акцентних кольорів до складних візерунків та абстрактних малюнків — ми пропонуємо широкий вибір дизайнів, щоб задовольнити усі ваші бажання та створити унікальний образ.',
      lable: 'Дизайн нігтів',
    },
    {
      getImg: () => <Image src={parafinOne} alt='paraffin-therapy' />,
      id: 'parafinOne',
      text: "Даруйте своїм рукам розкішну м'якість та зволоження з нашою професійною парафінотерапією. Насолоджуйтеся відчуттям комфорту та догляду, які ваші руки заслуговують.",
      lable: 'Парафінотерапія',
    },
    {
      getImg: () => <Image src={pedicureImg} alt='pedicure' />,
      id: 'pedicure',
      text: "Наші майстри дбайливо доглянуть за вашими нігтями та стопами, забезпечуючи гарний вигляд та здоров'я вашої шкіри.",
      lable: 'Педикюр',
    },
    {
      getImg: () => <Image src={nails17} alt='pedicure' />,
      id: 'strengthening',
      text: 'Укріплення нігтів гелем або акрилом - процедура, яка дозволяє зміцнити нігтьові пластини які стають міцнішими і менш схильними до ламання або розшарування',
      lable: 'Укріплення',
    },
  ];
  const photoDatas = [
    {
      getImg: () => <Image src={nails1} alt='photo-manicure' />,
      id: 'manicure',
    },
    {
      getImg: () => <Image src={nails2} alt='nail-design' />,
      id: 'design',
    },
    {
      getImg: () => <Image src={nails9} alt='nail-design-abstraction' />,
      id: 'abstraction',
    },
    {
      getImg: () => <Image src={nails4} alt='nail-design-delicate' />,
      id: 'delicate',
    },
    {
      getImg: () => <Image src={nails5} alt='nail-design-pink' />,
      id: 'pink0',
    },
    {
      getImg: () => <Image src={nails101} alt='nail-design-sea-​​wave' />,
      id: 'sea',
    },
    {
      getImg: () => <Image src={nails10} alt='nail-design-strict' />,
      id: 'strict',
    },
    {
      getImg: () => <Image src={nails11} alt='nail-design-classic' />,
      id: 'classic',
    },
    {
      getImg: () => <Image src={nails12} alt='nail-design-bright' />,
      id: 'bright',
    },
    {
      getImg: () => <Image src={nails13} alt='nail-design-zebra' />,
      id: 'zebra',
    },
    {
      getImg: () => <Image src={nails14} alt='pedicure-design-pink' />,
      id: 'pink',
    },
    {
      getImg: () => <Image src={nails15} alt='pedicure-design-black-and-white' />,
      id: 'black',
    },
  ];

  console.log({ index });
  
  return (
    <>
      <section className={styles.nailBg}>
        <div className='container'>
          <div className={styles.heroTitleWrapper}>
            <h1 className={styles.heroTitle}>Майстерність нігтів, яка сяє</h1>
          </div>
        </div>
      </section>
      <section className={styles.nailServices}>
        <div className='container'>
          <div className={styles.flowerImgShape}>
            <Image src={flowerShape} alt='shape' />
          </div>
          <h2 className={styles.nailTitle}>Професійні послуги краси нігтів</h2>
          <ul className={styles.nailList}>
            {nailDatas.map((nailData) => (
              <li className={styles.nailItem} key={nailData.id}>
                <div className={styles.overlayBlock}>
                  {nailData.getImg()}
                  <p className={styles.overlay}>{nailData.text}</p>
                </div>
                <div className={styles.nailItemTitleWrapper}>
                  <h2 className={styles.nailItemTitle}>{nailData.lable}</h2>
                  <FaArrowUpLong size={18} />
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <section className={styles.nailBlockBg}>
        <div className='container'>
          <div className={styles.nailTitleBlock}>
            <div className={styles.nailTextBlock}>
              <h2 className={styles.title}>Будьте красивішими та стильнішими</h2>
              <p className={styles.nailText}>
                Ми надаємо пріоритет чистоті та комфорту наших клієнтів, забезпечуючи гігієнічну та
                розслаблюючу атмосферу під час вашого візиту. Наш салон дотримується суворих
                протоколів санітарної обробки та всіх наших інструментів.
              </p>
              <ul>
                <li className={styles.naillItem}>
                  <div className={styles.nailIcon}>
                    <NailTwo size={60} />
                  </div>
                  <p className={styles.naillItemText}>
                    Якщо ви бажаєте класичний французький манікюр, або складний нейл-арт. Все це
                    можливо зробити у нашому салоні
                  </p>
                </li>
                <li className={styles.naillItem}>
                  <div className={styles.nailIcon}>
                    <Pedicure size={60} />
                  </div>
                  <p className={styles.naillItemText}>
                    Відчуйте легкість та комфорт завдяки нашим послугам педикюру та насолоджуйтеся
                    неймовірним виглядом ваших ступнів.
                  </p>
                </li>
                <li className={styles.naillItem}>
                  <div className={styles.nailIcon}>
                    <NaiPolish size={60} />
                  </div>
                  <p className={styles.naillItemText}>
                    Ми використовуємо лише високоякісні лаки для нігтів, гель та інші засоби для
                    нігтів від перевірених брендів.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.nailWorkBlock}>
        <div className='container'>
          <h1 className={styles.galleryTitle}>Галерея </h1>
          <ul className={styles.nailWorkList}>
            {photoDatas.map((photoData, index) => (
              <li
                onClick={() => setIndex(index)}
                className={styles.nailWorkItem}
                key={photoData.id}
              >
                {photoData.getImg()}
              </li>
            ))}
          </ul>
          {index >= 0 && (
            <Lightbox
              plugins={[Thumbnails, Fullscreen, Counter]}
              index={index}
              open={index >= 0}
              close={() => setIndex(-1)}
              slides={slides}
              render={{ slide: ManicureGallery, offset: index }}
            />
          )}
          <div className={styles.naiButtonWrapper}>
            <MainButton
              label='Більше'
              path='https://www.instagram.com/brows_nails_n.k/'
              target='_blank'
            />
          </div>
        </div>
      </section>
    </>
  );
}
