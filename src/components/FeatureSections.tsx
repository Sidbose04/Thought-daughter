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
          <p className="eyebrow">Designed for company</p>
          <h2>
            For all the ways
            <br />
            we <em>gather.</em>
          </h2>
          <ul className="situations">
            <li>Dinner parties</li>
            <li>First dates</li>
            <li>Long friendships</li>
            <li>Solo reflection</li>
          </ul>
        </div>
      </section>

      <section className="feature feature-second section">
        <div className="feature-copy">
          <p className="eyebrow">Not another icebreaker</p>
          <h2>
            Less performance.
            <br />
            <em>More presence.</em>
          </h2>
          <p className="intro">
            The best stories arrive sideways. Thought Daughter makes room for
            curiosity, the kind that lets a conversation become its own place to
            stay.
          </p>
          <div className="keywords">
            <span>Depth</span>
            <span>Storytelling</span>
            <span>Curiosity</span>
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
