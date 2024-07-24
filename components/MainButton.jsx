'use client';
import React from 'react';
import Link from 'next/link';
import styles from './MainButton.module.css';
import { IoIosArrowRoundForward } from 'react-icons/io';

const MainButton = ({ label, path, target }) => (
  <Link href={path} target={target} className={styles.heroBtn}>
    <span className={styles.caption}>{label}</span>
    <div className={styles.iconWrapper}>
      <IoIosArrowRoundForward size={25} />
    </div>
  </Link>
);

export default MainButton;
