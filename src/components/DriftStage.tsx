export default function DriftStage() {
  return (
    <section className="drift" aria-label="A few questions to consider">
      <p className="eyebrow">A question has its own timing</p>
      <div className="drift-stage">
        <article className="drift-card drift-card-a" data-parallax="0.06">
          <span>01</span>
          <p>What is something you&apos;ve outgrown but still carry?</p>
        </article>
        <article className="drift-card drift-card-b" data-parallax="-0.04">
          <span>02</span>
          <p>What conversation are you avoiding?</p>
        </article>
        <article className="drift-card drift-card-c" data-parallax="0.09">
          <span>03</span>
          <p>What would your younger self be surprised to learn about you?</p>
        </article>
      </div>
    </section>
  );
}
