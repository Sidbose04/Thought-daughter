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
                src="/images/IMG_6414.JPG.jpeg"
                alt="Gathering with friends and Thought Daughter cards"
              />
            </div>
            <div className="feature-part-content">
              <h3 className="feature-part-heading">With your people</h3>
              <div className="keywords feature-tags">
                <span>Dinner with friends</span>
                <span>Date nights</span>
                <span>Weekend getaways</span>
                <span>Wine &amp; conversations</span>
              </div>
            </div>
          </div>
          <div className="feature-card-part">
            <div className="feature-part-image">
              <img
                src="/images/IMG_6405.JPG.jpeg"
                alt="Solo reflections with Thought Daughter cards"
              />
            </div>
            <div className="feature-part-content">
              <h3 className="feature-part-heading">With yourself</h3>
              <div className="keywords feature-tags">
                <span>Solo reflections</span>
                <span>Journaling sessions</span>
                <span>Slow mornings</span>
                <span>Quiet nights in</span>
              </div>
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
            src="/images/IMG_6417.JPG.jpeg"
            alt="A person holding Thought Daughter cards and a drink"
          />
        </div>
      </section>
    </>
  );
}
