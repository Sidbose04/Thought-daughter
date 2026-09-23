"use client";

import { DECK_SPECS } from "@/data/questions";
import styles from "./AboutSection.module.css";

export default function AboutSection() {
  return (
    <section id="about" className={styles.about}>
      <p className={styles.eyebrow}>The Intention</p>

      <div className={styles.statementArea}>
        <p className={styles.statement}>
          Born from a desire for more reverence, less haste. A vessel for the
          questions we rarely dare to ask aloud.
        </p>

        <div className={styles.detail}>
          <p className={styles.detailIntro}>
            Thought Daughter is an ongoing publication devoted to slowness,
            interiority, and intimate connection. The cards were written in
            solitude across a winter season, tested gently among friends, and
            typeset with unwavering care.
          </p>

          <div className={styles.specsList}>
            {DECK_SPECS.map((spec) => (
              <div key={spec.label} className={styles.specRow}>
                <span className={styles.specLabel}>{spec.label}</span>
                <span className={styles.specValue}>{spec.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
