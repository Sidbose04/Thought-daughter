"use client";
import Image from "next/image";

const CARD_FRONTS = [
  "/CARD DECK QUESTIONS 1.png",
  "/CARD DECK QUESTIONS 2.png",
  "/CARD DECK QUESTIONS 3.png",
  "/CARD DECK QUESTIONS 4.png",
  "/CARD DECK QUESTIONS 5.png",
  "/CARD DECK QUESTIONS 6.png",
];

export default function PromptGrid() {
  const toggleCard = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.currentTarget.classList.toggle("is-flipped");
  };

  return (
    <section className="questions section" id="questions">
      <div className="questions-heading">
        <p className="eyebrow">A glimpse inside</p>
        <h2>
          Turn a card.
          <br />
          <em>See what unfolds.</em>
        </h2>
        <p>Each question opens a door. Some lead outward; some, quietly, in.</p>
      </div>
      <div className="prompt-grid" aria-label="Sample questions">
        {CARD_FRONTS.map((src, idx) => (
          <button
            key={idx}
            type="button"
            className="prompt-card"
            onClick={toggleCard}
            aria-label={`Card ${idx + 1}`}
          >
            {/* Back face — shown by default */}
            <span className="card-back">
              <Image
                src="/Card.png"
                alt="Card back"
                fill
                sizes="(max-width: 768px) 45vw, 30vw"
                style={{ objectFit: "cover" }}
                priority={idx < 3}
              />
            </span>
            {/* Front face — revealed on flip */}
            <span className="card-front">
              <Image
                src={src}
                alt={`Question card ${idx + 1}`}
                fill
                sizes="(max-width: 768px) 45vw, 30vw"
                style={{ objectFit: "cover" }}
              />
            </span>
          </button>
        ))}
      </div>
      <p className="hint">Tap a card to reveal a question.</p>
    </section>
  );
}
