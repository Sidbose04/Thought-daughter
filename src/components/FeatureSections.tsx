export default function FeatureSections() {
  return (
    <>
      <section className="feature feature-first section">
        <div className="feature-top">
          <p className="eyebrow">Designed for company</p>
          <h2>
            For all the ways
            <br />
            we <em>gather.</em>
          </h2>
        </div>
        <div className="feature-dual-media reveal">
          <div className="feature-card-part">
            <div className="feature-part-image">
              <img
                src="/images/WhatsApp Image 2026-09-22 at 18.01.55.jpeg"
                alt="Solo play with Thought Daughter cards"
              />
            </div>
          </div>
          <div className="feature-card-part">
            <div className="feature-part-image">
              <img
                src="/images/deck/feature-1.jpg"
                alt="Group play with Thought Daughter cards at a café table"
              />
            </div>
          </div>
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
            The best stories arrive sideways. Thought Daughter makes room for curiosity, the kind that lets a conversation become its own place to stay.
          </p>
          <div className="keywords">
            <span>Depth</span>
            <span>Story telling</span>
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
