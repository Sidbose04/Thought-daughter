"use client";

import { useState } from "react";

export default function RitualSection() {
  const [activeTab, setActiveTab] = useState<"ritual" | "code">("ritual");
  const [isRevealed, setIsRevealed] = useState(false);

  return (
    <section className="ritual-section" id="ritual" aria-label="A little ritual">
      <div className="ritual-grid">
        {/* Left Column: Heading and Guide Selectors */}
        <div className="ritual-left">
          <p className="eyebrow">A little ritual</p>
          <h2 className="ritual-title">
            Make room for
            <br />
            <em>the answer.</em>
          </h2>

          <div className="ritual-options" role="tablist" aria-label="Ritual guides">
            <button
              type="button"
              role="tab"
              aria-selected={activeTab === "ritual"}
              className={`ritual-tab-btn ${activeTab === "ritual" ? "active" : ""}`}
              onClick={() => {
                setActiveTab("ritual");
                setIsRevealed(false);
              }}
            >
              <span className="tab-indicator" />
              <span>THE RITUAL · How to begin</span>
            </button>

            <button
              type="button"
              role="tab"
              aria-selected={activeTab === "code"}
              className={`ritual-tab-btn ${activeTab === "code" ? "active" : ""}`}
              onClick={() => {
                setActiveTab("code");
                setIsRevealed(false);
              }}
            >
              <span className="tab-indicator" />
              <span>THE CODE · The rules</span>
            </button>
          </div>
        </div>

        {/* Right Column: Interactive Envelope Reveal */}
        <div className="ritual-right">
          <div className="reveal-meta">
            <span className="reveal-tag">
              {isRevealed ? "TAP TO CLOSE" : "TAP TO REVEAL"}
            </span>
            <p className="reveal-caption">
              {activeTab === "ritual"
                ? "Inside: a little guide to the ritual"
                : "Inside: the Thought Daughter code"}
            </p>
          </div>

          <div
            className={`envelope-stage ${isRevealed ? "is-revealed" : ""}`}
            onClick={() => setIsRevealed(!isRevealed)}
            role="button"
            tabIndex={0}
            aria-expanded={isRevealed}
            aria-label={isRevealed ? "Tuck card back into envelope" : "Reveal card from envelope"}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                setIsRevealed(!isRevealed);
              }
            }}
          >
            <div className="envelope-wrapper">
              {/* Base Envelope with Tucked Card */}
              <img
                src={
                  activeTab === "ritual"
                    ? "/images/envelopes/Envelop 2.png"
                    : "/images/envelopes/Envelop 3.png"
                }
                alt={
                  activeTab === "ritual"
                    ? "Lace envelope holding the Little Ritual guide"
                    : "Lace envelope holding the Thought Daughter Code guide"
                }
                className="envelope-img"
              />

              {/* Sliding Revealed Card (floats out on tap) */}
              <div className={`revealed-card ${isRevealed ? "open" : ""}`}>
                {activeTab === "ritual" ? (
                  <div className="revealed-inner ritual-card">
                    <span className="card-top-tag">A LITTLE RITUAL</span>
                    <div className="ritual-text-body">
                      <p>
                        Let the evening slow down.
                        <br />
                        Pour yourself a glass of love, light a candle.
                        <br />
                        Call someone you trust, or sit with yourself.
                      </p>
                      <p>
                        Shuffle. Pull a card.
                        <br />
                        Read it slowly. Let it linger.
                      </p>
                      <p>
                        Answer honestly, dramatically, with a story.
                        <br />
                        Or not at all.
                      </p>
                      <p>
                        Ask someone else. Ask yourself.
                        <br />
                        Go deeper, or let it go.
                      </p>
                      <p>
                        Some questions are meant to be answered.
                        <br />
                        Some are meant to wonder.
                      </p>
                      <p className="ritual-closer">
                        Keep what finds a place in you. Let the rest drift away.
                      </p>
                    </div>
                  </div>
                ) : (
                  <div className="revealed-inner code-card">
                    <img
                      src="/images/pegasus-emblem.png"
                      alt="Thought Daughter Pegasus"
                      className="pegasus-logo"
                    />
                    <h3 className="code-heading">
                      THE <em>Thought Daughter</em> CODE
                    </h3>
                    <ul className="code-rules-list">
                      <li>
                        <strong>Think outside the box.</strong> There are no right answers here
                      </li>
                      <li>
                        <strong>Dig deeper.</strong> Your first answer isn&apos;t always your real one
                      </li>
                      <li>
                        <strong>Don&apos;t overthink it.</strong> Or do. That&apos;s kind of the point
                      </li>
                      <li>
                        <strong>No judging.</strong> Honest answers are welcome
                      </li>
                      <li>
                        <strong>Put your phone down.</strong> The conversation is happening here
                      </li>
                      <li>
                        <strong>Let silence happen.</strong> You don&apos;t have to fill every second
                      </li>
                    </ul>
                    <p className="code-closing-tag">
                      Take what resonates, leave what doesn&apos;t
                    </p>
                    <p className="code-social">
                      If you&apos;d like to share, we&apos;d love to listen
                      <br />
                      <span>@thethoughtdaughterdeck</span>
                    </p>
                  </div>
                )}
              </div>
            </div>

            <span className="envelope-action-hint">
              {isRevealed ? "Tap to tuck card away" : "Tap envelope to read"}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
