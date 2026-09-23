"use client";

import Image from "next/image";
import styles from "./FeatureSections.module.css";

const SITUATIONS = [
  "Late evening tea or natural wine by candle warmth",
  "Between two lovers rediscovering unspoken depths",
  "Solo journaling on Sunday mornings",
  "Intimate dinner tables of close, trusting friends",
];

const KEYWORDS = [
  "64 Inquiries",
  "Cotton-Linen Finish",
  "Blind Debossed",
  "Rigid Slipcase",
  "Heirloom Keepsake",
  "Unhurried",
];

export default function FeatureSections() {
  return (
    <>
      {/* Feature 1 */}
      <section className={`${styles.feature} ${styles.featureFirst}`}>
        <div className={styles.featureMedia}>
          <Image
            src="/images/deck/feature-1.jpg"
            alt="Thought Daughter card deck detailed craftsmanship"
            width={640}
            height={800}
            className={styles.mediaImg}
          />
        </div>

        <div className={styles.featureCopy}>
          <p className={styles.eyebrow}>Material & Form</p>
          <h2 className={styles.heading}>
            Printed on heavy
            <br />
            <em>linen paper</em> stock.
          </h2>
          <p className={styles.bodyText}>
            Every card is printed on 350gsm FSC-certified cotton-linen stock with
            a velvety tactile matte varnish. Sized to rest comfortably in two
            hands, built to withstand years of quiet contemplation.
          </p>

          <div className={styles.keywords}>
            {KEYWORDS.map((k) => (
              <span key={k} className={styles.pill}>
                {k}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Feature 2 */}
      <section className={`${styles.feature} ${styles.featureSecond}`}>
        <div className={styles.featureCopy}>
          <p className={styles.eyebrow}>Occasions of Mind</p>
          <h2 className={styles.heading}>
            Where conversation
            <br />
            <em>naturally</em> gathers.
          </h2>
          <p className={styles.bodyText}>
            Whether you draw one card at dusk or wander through several hours
            with another soul, the questions create a gentle sanctuary free from
            small talk and performative answers.
          </p>

          <ul className={styles.situations}>
            {SITUATIONS.map((s) => (
              <li key={s} className={styles.situationItem}>
                {s}
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.featureMedia}>
          <Image
            src="/images/deck/feature-2.jpg"
            alt="Open card deck on table with tea and ceramic"
            width={640}
            height={800}
            className={styles.mediaImg}
          />
        </div>
      </section>
    </>
  );
}
