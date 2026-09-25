export default function RitualSection() {
  return (
    <section className="ritual section" id="ritual">
      <div className="ritual-image reveal">
        <img
          src="/images/deck/ritual.jpg"
          alt="Thought Daughter ritual instruction card"
        />
      </div>
      <div className="ritual-copy">
        <p className="eyebrow">A little ritual</p>
        <h2>
          Make room for
          <br />
          <em>the answer.</em>
        </h2>
        <p className="intro">
          There is no right way to begin. Just a small invitation to slow down and
          see where the question takes you.
        </p>
        <ol className="ritual-list">
          <li>
            <span>01</span> Pour a drink
          </li>
          <li>
            <span>02</span> Shuffle
          </li>
          <li>
            <span>03</span> Draw a card
          </li>
          <li>
            <span>04</span> Answer honestly
          </li>
          <li>
            <span>05</span> Stay with the question
          </li>
        </ol>
      </div>
    </section>
  );
}
