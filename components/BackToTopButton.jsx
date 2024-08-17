'use client';
import React, { useEffect, useState } from 'react';
import { IoArrowUp } from 'react-icons/io5';
import styles from './BackToTopButton.module.css';

const BackToTopButton = () => {
  const [scrollValue, setScrollValue] = useState(0);
  const [visible, setVisible] = useState(false);

  const calcScrollValue = () => {
    const pos = document.documentElement.scrollTop;
    const calcHeight =
      document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrollValue = Math.round((pos * 100) / calcHeight);
    setScrollValue(scrollValue);
    setVisible(pos > 100);
  };

  useEffect(() => {
    window.addEventListener('scroll', calcScrollValue);
    calcScrollValue();
    return () => {
      window.removeEventListener('scroll', calcScrollValue);
    };
  }, []);

  const handleClick = () => {
    document.documentElement.scrollTop = 0;
  };

  return (
    <div
      className={styles.buttonUp}
      style={{
        display: visible ? 'grid' : 'none',
        background: `conic-gradient(#c28565 ${scrollValue}%, #ffffff ${scrollValue}%)`,
      }}
      onClick={handleClick}
    >
      <div className={styles.arrowContainer}>
        <IoArrowUp />
      </div>
    </div>
  );
};

export default BackToTopButton;
