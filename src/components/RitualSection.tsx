"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import styles from "./RitualSection.module.css";

const RITUAL_STEPS = [
  { num: "01", text: "Dim the lights and set phones aside" },
  { num: "02", text: "Shuffle the deck without expectation" },
  { num: "03", text: "Draw a single card into the quiet" },
  { num: "04", text: "Hold the inquiry without rushing to answer" },
  { num: "05", text: "Listen as deeply as you wish to be heard" },
];

export default function RitualSection() {
  const listRef = useRef<(HTMLLIElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.inView);
          }
        });
      },
      { threshold: 0.15 }
    );

    listRef.current.forEach((item) => {
      if (item) observer.observe(item);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section id="ritual" className={styles.ritual}>
      <div className={styles.ritualImageWrapper}>
        <Image
          src="/images/deck/ritual.jpg"
          alt="Hands gently holding Thought Daughter cards"
          width={600}
          height={750}
          className={styles.ritualImage}
        />
      </div>

      <div className={styles.ritualCopy}>
        <p className={styles.eyebrow}>The Practice</p>
        <h2 className={styles.heading}>
          A quiet ritual for
          <br />
          <em>honest</em> presence.
        </h2>
        <p className={styles.intro}>
          Thought Daughter isn&apos;t a party game. It is a slow, tactile invitation to
          soften your defenses and explore the unspoken currents between friends,
          lovers, or yourself.
        </p>

        <ul className={styles.ritualList}>
          {RITUAL_STEPS.map((step, idx) => (
            <li
              key={step.num}
              ref={(el) => { listRef.current[idx] = el; }}
              className={styles.ritualItem}
              style={{ transitionDelay: `${idx * 0.12}s` }}
            >
              <span className={styles.stepNum}>{step.num}</span>
              <p className={styles.stepText}>{step.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
