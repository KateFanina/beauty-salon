import Image from 'next/image';
import { FaScissors } from 'react-icons/fa6';
import IconHairDye from '@components/icons/IconHairDye';
import IconBackHair from '@components/icons/IconBackHair';
import IconChild from '@components/icons/IconChild';
import IconLongHair from '@components/icons/IconLongHair';
import IconShortHair from '@components/icons/IconShortHair';
import IconWomenHaircut from '@components/icons/IconWomenHaircut';
import IconManHaircutting from '@components/icons/IconManHair';
import IconHair from '@components/icons/IconHair';
import shapeFlower from '@public/flower_shape_4.png';
import dyed_hair from '@public/dyed_hair.jpg';
import dyed_hairs from '@public/dyed_hair_2.jpg';
import menHaircut from '@public/men_haircut.png';
import kidsHaircut from '@public/kids_haircut.png';
import shortAndLongtHaircut from '@public/short__long_haircut.png';
import creativeHaircut from '@public/creative_haircut.png';
import classicHaircut from '@public/classic_haircut.png';
import trandyHaircut from '@public/trandy_haircut.png';
import styles from './hairdressing.module.css';
import BackToTopButton from '@components/BackToTopButton';


export const metadata = {
  title: 'Стрижки та фарбування волосся у м.Сміла',
  description:
    'стрижки, чоловічі, жіночі, дитячі, коротке, довге, волосся, нестандартні, модні, фарбування, мелірування, колорування, лікування, сміла',
};

export default function HairdressingPage() {
  const haircutDatas = [
    {
      getImg: () => <Image src={menHaircut} alt='man-haircut' />,
      id: 'men-haircut',
      getIcon: () => <IconManHaircutting size={40} />,
      lable: 'Стильні та зручні чоловічі',
    },
    {
      // getImg: () => <Image src={womanHaircut} alt='woman-haircut' />,
      getImg: () => <Image src={trandyHaircut} alt='woman-haircut' />,
      id: 'women-haircut',
      getIcon: () => <IconWomenHaircut size={40} />,
      lable: 'Модні та оригінальні жіночі',
    },
    {
      getImg: () => <Image src={kidsHaircut} alt='girl-haircut' />,
      id: 'children-haircut',
      getIcon: () => <IconChild size={40} />,
      lable: 'Професійні дитячі',
    },
    {
      getImg: () => <Image src={classicHaircut} alt='classic-haircut' />,
      id: 'classic-haircut',
      getIcon: () => <IconLongHair size={40} />,
      lable: 'Класичні та креативні',
    },
    {
      getImg: () => <Image src={shortAndLongtHaircut} alt='long-hair-haircut' />,
      id: 'short-haircut',
      getIcon: () => <IconBackHair size={40} />,
      lable: 'На коротке та довге волосся',
    },
    {
      getImg: () => <Image src={creativeHaircut} alt='short-haircut' />,
      id: 'asymmetrical-haircut',
      getIcon: () => <IconShortHair size={40} />,
      lable: 'Асиметричні та нестандартні',
    },
  ];
  const hairDatas = [
    {
      id: 'classic-hair-coloring',
      getIcon: () => <IconHair size={40} />,
      lable: 'Класичне',
    },
    {
      id: 'balayage-hair-coloring',
      getIcon: () => <IconHair size={40} />,
      lable: 'Балаяж',
    },
    {
      id: 'ombre-hair-coloring',
      getIcon: () => <IconHair size={40} />,
      lable: 'Омбре',
    },
    {
      id: 'hair-toning',
      getIcon: () => <IconHair size={40} />,
      lable: 'Тонування волосся',
    },
    {
      id: 'hair-highlighting',
      getIcon: () => <IconHair size={40} />,
      lable: 'Мелірування',
    },
    {
      id: 'hair-coloring',
      getIcon: () => <IconHair size={40} />,
      lable: 'Колорування',
    },
    {
      id: 'hair-polishing',
      getIcon: () => <IconHair size={40} />,
      lable: 'Полірування',
    },
    {
      id: 'hair-discoloring',
      getIcon: () => <IconHair size={40} />,
      lable: 'Знебарвлення волосся',
    },
    {
      id: 'hair-care',
      getIcon: () => <IconHair size={40} />,
      lable: 'Догляд та лікування волосся',
    },
  ];
  return (
    <>
      <section className={styles.bgHair}>
        <div className='container'>
          <div div className={styles.haircutSection}>
            <div className={styles.hairCutBlock}>
              <div className={styles.hairTitle}>
                <FaScissors className={styles.scissors} size={30} color={'#c28565'} />
                <h2 className={styles.haircutTitle}>Стрижки</h2>
              </div>
              <ul>
                {haircutDatas.map((haircutData) => (
                  <li className={styles.haircutItem} key={haircutData.id}>
                    <div className={styles.iconWrapper}>{haircutData.getIcon()}
                    </div>
                    <div className={styles.hairSubTitle} >
                    <p className={styles.hairText}>{haircutData.lable} </p>
                    </div>
                    <div className={styles.imageWrapper}>
                  {haircutData.getImg()}
                </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className={styles.ourHaircuts}>
          <div className='container'>
            <div className={styles.dyeingBlock}>
              <div>
                <div className={styles.hairTitle}>
                  <div className={styles.dyeingIcon}>
                    <IconHairDye size={60} />
                  </div>
                  <h2 className={styles.haircutTitle}>Фарбування волосся</h2>
                </div>
                <div className={styles.hairImg}>
                <Image src={dyed_hairs} alt='hair-dyeing' />
              </div>
                <ul>
                  {hairDatas.map((hairData) => (
                    <li className={styles.hairItem} key={hairData.id}>
                      <div className={styles.iconHairWrapper}>{hairData.getIcon()}</div>
                      <p className={styles.hairText}>{hairData.lable}</p>
                    </li>
                  ))}
                </ul>
              </div>
              <div className={styles.hairStyleImg}>
                <Image src={dyed_hair} alt='hair-dyeing' />
              </div>
              <div className={styles.shapeFlower}>
                <Image src={shapeFlower} alt='' />
              </div>
            </div>
          </div>
        </div>
      </section>
      <BackToTopButton />
    </>
  );
}