"use client";

import { useEffect, useRef } from "react";
import styles from "./DriftStage.module.css";

export default function DriftStage() {
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.inView);
          }
        });
      },
      { threshold: 0.2 }
    );

    cardsRef.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className={styles.drift}>
      <p className={styles.eyebrow}>The Space Between Thoughts</p>
      <div className={styles.driftStage}>
        <div
          ref={(el) => { cardsRef.current[0] = el; }}
          className={`${styles.driftCard} ${styles.cardA}`}
        >
          <span>Card 14 · Reflection</span>
          <p>“What have you been carrying that was never yours to hold?”</p>
        </div>

        <div
          ref={(el) => { cardsRef.current[1] = el; }}
          className={`${styles.driftCard} ${styles.cardB}`}
        >
          <span>Card 29 · Intimacy</span>
          <p>“When did you last feel completely understood without speaking?”</p>
        </div>

        <div
          ref={(el) => { cardsRef.current[2] = el; }}
          className={`${styles.driftCard} ${styles.cardC}`}
        >
          <span>Card 52 · Becoming</span>
          <p>“Which chapter of your life are you finally ready to close?”</p>
        </div>
      </div>
    </section>
  );
}
