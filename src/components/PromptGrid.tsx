"use client";

const QUESTIONS = [
  "When did you last feel completely understood?",
  "What are you learning to forgive in yourself?",
  "Which ordinary moment do you wish you could revisit?",
  "What is a beautiful thing you noticed recently?",
  "What do you want more of in your life right now?",
  "What does feeling at home mean to you?",
  "What are you still becoming?",
  "What is something you know only because you lived it?",
  "When do you feel most like yourself?",
  "What would you tell the version of you from one year ago?",
  "What is worth taking your time with?",
  "What kind of memory would you like to make next?",
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
          Turn the card.
          <br />
          <em>See what stays.</em>
        </h2>
        <p>Each question opens a door. Some lead outward; some, quietly, in.</p>
      </div>
      <div className="prompt-grid" aria-label="Sample questions">
        {QUESTIONS.map((q, idx) => (
          <button
            key={idx}
            type="button"
            className="prompt-card"
            onClick={toggleCard}
          >
            <span className="card-back">
              A thought
              <br />
              to keep
            </span>
            <span className="card-front">{q}</span>
          </button>
        ))}
      </div>
      <p className="hint">Hover or tap a card to reveal a question.</p>
    </section>
  );
}
