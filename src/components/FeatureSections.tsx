export default function FeatureSections() {
  return (
    <>
      <section className="feature feature-first section">
        <div className="feature-media reveal">
          <img
            src="/images/deck/feature-1.jpg"
            alt="Thought Daughter cards and orange drinks on a café table"
          />
        </div>
        <div className="feature-copy">
          <p className="eyebrow">Table companion</p>
          <h2>
            For tables where
            <br />
            people <em>stay.</em>
          </h2>
          <ul className="situations">
            <li>Late dinners</li>
            <li>Third drinks</li>
            <li>Quiet mornings</li>
            <li>Old friends</li>
          </ul>
        </div>
      </section>

      <section className="feature feature-second section">
        <div className="feature-copy">
          <p className="eyebrow">No trivia, no scores</p>
          <h2>
            Skip the small talk.
            <br />
            <em>Start in the middle.</em>
          </h2>
          <p className="intro">
            Nobody needs another round of surface questions. Pick a card, read it out loud, and let the room go quiet for a second while everyone actually thinks.
          </p>
          <div className="keywords">
            <span>80 Linen Cards</span>
            <span>No Timer</span>
            <span>No Right Answers</span>
          </div>
        </div>
        <div className="feature-media reveal">
          <img
            src="/images/deck/feature-2.jpg"
            alt="A person holding Thought Daughter cards and a drink"
          />
        </div>
      </section>
    </>
  );
}
