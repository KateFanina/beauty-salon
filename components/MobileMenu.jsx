'use client';
import {React, useEffect} from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { RxHamburgerMenu } from 'react-icons/rx';
import logo from '@public/logo.png';
import styles from './MobileMenu.module.css';

const MobileMenu = () => {
  const mobileDatas = [
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

  useEffect(() => {
    const handleScroll = () => {
      const drawerContent = document.querySelector('.drawer-content');
      if (window.scrollY > 100) {
        drawerContent.classList.add(styles.fixedMenu);
      } else {
        drawerContent.classList.remove(styles.fixedMenu);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <>
      <div className='container'>
        <div className='drawer lg:hidden xl:hidden 2xl:hidden'>
          <input id='my-drawer' type='checkbox' className='drawer-toggle' />
          <div className='drawer-content py-2'>
            <label
              htmlFor='my-drawer'
              className='btn drawer-button flex  justify-end flex-nowrap  min-h-[3rem] bg-opacity-0 h-0 shadow-none'
            >
              <RxHamburgerMenu />
            </label>
          </div>
          <div className='drawer-side z-[700]'>
            <label
              htmlFor='my-drawer'
              aria-label='close sidebar'
              className='drawer-overlay'
            ></label>
            <div className={styles.mobileMenuWrapper}>
              <div className={styles.mobileLogo}>
                <Link href='/'>
                  <Image
                    className={styles.logo}
                    src={logo}
                    alt='logo'
                    width={180}
                    height={200}
                    onClick={() => {
                      document.getElementById('my-drawer').checked = false;
                    }}
                  />
                </Link>
              </div>
              <ul className='menu text-base mt-[30px] px-[24px] leading-[26px] p-4 bg-[#ffffff] text-base-content'>
                {mobileDatas.map((mobileData) => (
                  <li aria-label='close sidebar' key={mobileData.id}>
                    <Link
                      href={mobileData.link}
                      onClick={() => {
                        document.getElementById('my-drawer').checked = false;
                      }}
                    >
                      {mobileData.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileMenu;
