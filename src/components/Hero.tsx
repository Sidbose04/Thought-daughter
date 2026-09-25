export default function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero-copy">
        <h1 id="hero-title">
          Questions
          <br />
          worth
          <br />
          <em>lingering</em> with.
        </h1>
        <p>
          {/* A deck designed for slow evenings, deeper conversations, and unexpected
          stories. */}
          An 80-card conversation deck designed for slow evenings, deeper questions, and questions waiting to be told.
        </p>
        <a className="text-link" href="#ritual">
          Explore the ritual <span>↓</span>
        </a>
      </div>
      <div className="hero-product" aria-label="Thought Daughter card deck">
        <img
          src="/images/deck/Hero.png"
          alt="Thought Daughter deck held in a hand beside flowers"
        />
      </div>
      <p className="scroll-note">
        Scroll to linger <span>↓</span>
      </p>
    </section>
  );
}
