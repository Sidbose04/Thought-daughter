"use client";

import Image from "next/image";
import Link from "next/link";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <Link href="#top" className={styles.wordmarkLink} aria-label="Thought Daughter home">
        <Image
          src="/logo.png"
          alt="Thought Daughter"
          width={352}
          height={80}
          priority
          className={styles.wordmarkImg}
        />
      </Link>
      <nav className={styles.nav}>
        {/* <a href="#ritual" className={styles.navLink}>
          The Ritual
        </a> */}
        <a href="#questions" className={styles.navLink}>
          The Questions <span className={styles.arrow}>↘</span>
        </a>
        {/* <a href="#about" className={styles.navLink}>
          About
        </a> */}
      </nav>
    </header>
  );
}
