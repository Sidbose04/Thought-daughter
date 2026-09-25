export default function GallerySection() {
  return (
    <section className="gallery section" aria-label="Thought Daughter in the wild">
      <div className="gallery-top">
        <p className="eyebrow">In the wild</p>
        <h2>
          The table is where
          <br />
          it all <em>begins.</em>
        </h2>
      </div>
      <figure className="gallery-large reveal">
        <img
          src="/images/deck/gallery-large.jpg"
          alt="Thought Daughter deck at a small street café table"
        />
        <figcaption>Coffee in the afternoon, wine by ten. Keep a deck in your jacket pocket.</figcaption>
      </figure>
      <figure className="gallery-small reveal">
        <img
          src="/images/deck/gallery-small.jpg"
          alt="Cards scattered across a café table"
        />
      </figure>
    </section>
  );
}
