"use client";

import { useState } from "react";
import Image from "next/image";
import { QUESTION_CARDS, QuestionCard } from "@/data/questions";
import styles from "./PromptGrid.module.css";

export default function PromptGrid() {
  const [flippedCards, setFlippedCards] = useState<Record<number, boolean>>({});

  const toggleCard = (id: number) => {
    setFlippedCards((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <section id="questions" className={styles.questions}>
      <div className={styles.headingArea}>
        <p className={styles.eyebrow}>Sample Inquiries</p>
        <h2 className={styles.title}>
          Questions that linger
          <br />
          <em>long after</em> spoken.
        </h2>
        <p className={styles.subtitle}>
          Tap any card to turn it over and reflect on the inquiry. Each of the
          64 cards opens a doorway to genuine revelation.
        </p>
      </div>

      <div className={styles.promptGrid}>
        {QUESTION_CARDS.map((card: QuestionCard, index: number) => {
          const isFlipped = !!flippedCards[card.id];

          return (
            <button
              key={card.id}
              type="button"
              className={`${styles.promptCard} ${isFlipped ? styles.isFlipped : ""}`}
              onClick={() => toggleCard(card.id)}
              aria-label={`Inquiry card ${card.frontNum}: ${card.theme}. Click to flip.`}
            >
              {/* Back Face (Envelope / card back with subtle prompt preview) */}
              <span className={styles.cardBack}>
                <Image
                  src={card.backImage}
                  alt={`Card ${card.frontNum} back`}
                  width={340}
                  height={212}
                  className={styles.cardImage}
                />
                <span className={styles.cardBackBadge}>Inquiry {card.frontNum}</span>
              </span>

              {/* Front Face (Revealed prompt interior) */}
              <span
                className={`${styles.cardFront} ${
                  index >= 1 ? styles.cardFrontShifted : ""
                }`}
              >
                <Image
                  src={card.frontImage}
                  alt={`Inquiry ${card.frontNum}: ${card.theme}`}
                  width={340}
                  height={212}
                  className={styles.cardImage}
                />
              </span>
            </button>
          );
        })}
      </div>

      <p className={styles.hint}>
        Touch or click to reveal inquiry · 64 cards in the complete edition
      </p>
    </section>
  );
}
