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
  
  const contactDatas = [
    {
      getIcon: () => <CiLocationOn />,
      id: 'adress',
      lable: 'Наша адреса',
      text: 'м. Сміла, вулиця 40-річчя Перемоги, 6',
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
      text: 'Вт - Нд: 9:00 - 18:00'
    },
  ];

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
              {contactDatas.map((contactData) => (
                <li className={styles.navItem} key={contactData.id}>
                  {contactData.getIcon()}
                  <div className={styles.navInfo}>
                  <span>{contactData.lable}<br/></span>
                  {contactData.id !== "phone" && (
                  <p>{contactData.text}</p>
                  )}
                   {contactData.id === 'phone' && (
                      <a className={styles.media} href={`tel:${contactData.text}`}>
                        {contactData.text}
                      </a>
                    )}
                  </div>
                </li>
              ))}
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



