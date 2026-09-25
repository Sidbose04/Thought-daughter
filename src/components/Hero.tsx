export default function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <p className="eyebrow hero-eyebrow">A deck for unhurried conversation</p>
      <div className="hero-copy">
        <h1 id="hero-title">
          Questions worth
          <br />
          <em>lingering</em> with.
        </h1>
        <p>
          A deck designed for slow evenings, deeper conversations, and unexpected
          stories.
        </p>
        <a className="text-link" href="#ritual">
          Explore the ritual <span>↓</span>
        </a>
      </div>
      <div className="hero-product" aria-label="Thought Daughter card deck">
        <img
          src="/images/deck/hero-deck.jpg"
          alt="Thought Daughter deck held in a hand beside flowers"
        />
      </div>
      <p className="scroll-note">
        Scroll to linger <span>↓</span>
      </p>
    </section>
  );
}
