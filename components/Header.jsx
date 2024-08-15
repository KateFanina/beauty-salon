'use client';
import { useEffect } from 'react';
import { CiLocationOn, CiPhone } from 'react-icons/ci';
import { SlClock } from 'react-icons/sl';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { themeChange } from 'theme-change';
import MobileMenu from './MobileMenu';
import logo from '@public/logo.png';
import styles from './Header.module.css';

const Header = () => {
  const pathname = usePathname();

  useEffect(() => {
    themeChange(false);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const stickyNav = document.querySelector(`.${styles.stickyNav}`);
      if (window.scrollY > 100) {
        stickyNav.classList.add(styles.fixed);
      } else {
        stickyNav.classList.remove(styles.fixed);
      }
    };
  
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  

  const navDatas = [
    {
      id: 'home',
      link: '/',
      label: 'Головна',
    },
    {
      id: 'services',
      link: '/services',
      label: 'Послуги',
    },
    {
      id: 'price',
      link: '/price',
      label: 'Ціни',
    },
    {
      id: 'about',
      link: '/about',
      label: 'Про нас',
    },
    {
      id: 'contacts',
      link: '/contacts',
      label: 'Контакти',
    },
  ];

  return (
    <header>
      <div className={styles.stiky}>
        <ul className={`container ${styles.navList}`}>
          <li className={styles.navItem}>
            <CiLocationOn />
            <div className={styles.navInfo}>
              <span>Наша адреса:</span>
              <p> м. Сміла, вул. 40-річчя Перемоги, 6</p>
            </div>
          </li>
          <li className={styles.navItem}>
            <CiPhone />
            <div className={styles.navInfo}>
              <span>
                Наш телефон:
                <br />
              </span>
              <Link href='+380631736533'>+380631736533</Link>
            </div>
          </li>
          <li className={styles.navItem}>
            <SlClock />
            <div className={styles.navInfo}>
              <span>Години роботи:</span>
              <p>Вт - Нд: 9:00 - 18:00</p>
            </div>
          </li>
        </ul>
        <div className={styles.stickyNav}>
        <nav className={styles.navigation}>
          <div className={styles.logoBg}>
            <Link href='/'>
              <Image className={styles.logo} src={logo} alt='logo' width={180} height={200} />
            </Link>
          </div>
          <ul className={styles.navigationList}>
            {navDatas.map((navData) => (
              <li
                className={`${styles.navigationItem} ${
                  pathname === navData.link ? styles.active : ''
                }`}
                key={navData.id}
              >
                <Link
                  href={navData.link}
                  className={pathname === navData.link ? styles.active : ''}
                >
                  {navData.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        </div>
      </div>
      <MobileMenu />
    </header>
  );
};

export default Header;



