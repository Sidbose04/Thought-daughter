export default function DriftStage() {
  return (
    <section className="drift" aria-label="A few questions to consider">
      <p className="eyebrow">A question has its own timing</p>
      <div className="drift-stage">
        <article className="drift-card drift-card-a" data-parallax="0.03">
          <div className="drift-card-inner">
            <p>Tell a story you haven&apos;t told in a while</p>
          </div>
        </article>
        <article className="drift-card drift-card-b" data-parallax="-0.01">
          <div className="drift-card-inner">
            <p>Share something you&apos;re quietly proud of</p>
          </div>
        </article>
        <article className="drift-card drift-card-c" data-parallax="0.02">
          <div className="drift-card-inner">
            <p>Turn a thought into a conversation</p>
          </div>
        </article>
      </div>
    </section>
  );
}
