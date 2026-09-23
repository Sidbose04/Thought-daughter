"use client";

import Image from "next/image";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero} aria-labelledby="hero-title">
      <div className={styles.heroHalo} aria-hidden="true" />
      <p className={styles.heroEyebrow}>A deck for unhurried conversation</p>

      <div className={styles.heroCopy}>
        <h1 id="hero-title" className={styles.title}>
          Questions worth
          <br />
          <em className={styles.italicWord}>lingering</em> over.
        </h1>
        <p className={styles.description}>
          An 80-card conversation deck designed for slow evenings, deeper
          questions, and stories waiting to be told.
        </p>
        <a className={styles.textLink} href="#ritual">
          Explore the ritual <span className={styles.linkArrow}>↓</span>
        </a>
      </div>

      <div className={styles.heroProductWrapper} aria-label="Thought Daughter card deck">
        <div className={styles.heroProduct}>
          <Image
            src="/images/deck/hero-deck.jpg"
            alt="Thought Daughter card deck in fine linen paper"
            width={540}
            height={594}
            priority
            className={styles.productImg}
          />
          <div className={`${styles.floatCard} ${styles.cardOne}`}>
            <Image
              src="/images/cards/Card.png"
              alt="Thought Daughter card back"
              width={80}
              height={122}
              className={styles.miniCardImg}
            />
          </div>
          <div className={`${styles.floatCard} ${styles.cardTwo}`}>
            <Image
              src="/images/cards/CARD DECK QUESTIONS 1.png"
              alt="Sample inquiry prompt"
              width={80}
              height={122}
              className={styles.miniCardImg}
            />
          </div>
        </div>
      </div>

      <p className={styles.scrollNote}>
        Scroll to enter
        <span>↓</span>
      </p>
    </section>
  );
}
