"use client"
import Image from "next/image"
import Link from "next/link"
import styles from "../styles/Navbar.module.css";
import { useEffect, useState } from "react";
import { IoMdClose } from "react-icons/io";


const SCREEN_SIZE = 1055;

export default function Navbar() {
	const [isMobile, setIsMobile] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  function handleClick() {

		setIsOpen(!isOpen);
	}

	useEffect(() => {
		function checkScreenSize() {
			const windowWidth = window.innerWidth;
			if (windowWidth < SCREEN_SIZE) {
				setIsMobile(true);
				setIsOpen(false);
				return;
			}
			setIsMobile(false);
			setIsOpen(true);
		}

		checkScreenSize();

		window.addEventListener("resize", checkScreenSize);
	}, []);
  return (
    <header className={styles.header}>
      <nav className={styles.navbar}>
        <Link href="/">
          <Image
            src="/images/sinc-logo-black-outline.svg"
            alt="site logo"
            width={80}
            height={40}
            priority
          />
        </Link>
        {isOpen && <ul className={styles.navList}>
          <li className={styles.navList__item}>
            <Link className={styles.nav__link} href="#">About</Link>
          </li>
          <li className={styles.navList__item}>
          <Link className={styles.nav__link} href="#">SIP</Link>

          </li>
          <li className={styles.navList__item}>
          <Link className={styles.nav__link} href="#">Studio</Link>

          </li>
          <li className={styles.navList__item}>
          <Link className={styles.nav__link} href="#">SEEQ</Link>

          </li>
          <li className={styles.navList__item}>
          <Link className={styles.nav__link} href="#">Platforms</Link>

          </li>
          <li className={styles.navList__item}>
          <Link className={styles.nav__link} href="#">Initiatives</Link>

          </li>
          <li className={styles.navList__item}>
          <Link className={styles.nav__link} href="#">More</Link>

          </li>
          <li className={`${styles.navList__item} ${styles.navList__item__cta}`}>
            <Link className={`${styles.nav__link} ${styles.cta}`} href="">SINC With Us</Link>
          </li>
          <li className={styles.navList__item}>
            <Link className={`${styles.nav__link} ${styles.cta__alt}`} href="">Apply to SIP 1.0</Link>
          </li>

        </ul>}

       {isMobile && <button className={styles.hamburger} onClick={handleClick}>
          {isOpen ? <IoMdClose /> : <Image
            src="/images/menu.svg"
            alt="menu button"
            width={25}
            height={25}
            // fill
            className="logo"
          />}
        </button>}
      </nav>
    </header>
  )
}
