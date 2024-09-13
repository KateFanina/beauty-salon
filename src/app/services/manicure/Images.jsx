import React from 'react';
import Image from 'next/image';
import styles from './manicure.module.css';

export default function Images(props) {
  const { manicureData, onClick } = props;
  const handleClickImage = (index) => {
    onClick(index);
  };

  return (
    <ul className={styles.nailWorkList}>
      {manicureData &&
        manicureData.map((slide, index) => (
          <li onClick={() => handleClickImage(index)} className={styles.nailWorkItem} key={index}>
            <Image src={slide.src} alt={slide.alt} width={300} height={300}/>
          </li>
        ))}
    </ul>
  );
}
