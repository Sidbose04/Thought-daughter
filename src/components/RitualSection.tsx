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
          <p className="eyebrow">You've got mail</p>
          <h2 className="ritual-title">
            {/* Make room for
            <br />
            <em>the answer.</em> */}
            <em>Inside</em>: A little guide
            <br />
            to the <em>ritual</em>
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
              {/* {isRevealed ? "TAP TO CLOSE" : "TAP TO REVEAL"} */}
            </span>
            {/* <p className="reveal-caption">
              {activeTab === "ritual"
                ? "Inside: a little guide to the ritual"
                : "Inside: the Thought Daughter code"}
            </p> */}
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
                    <h3 className="card-top-tag">A Little Ritual</h3>
                    <div className="ritual-text-body">
                      <p>
                        Let the evening slow down
                        <br />
                        Pour yourself a glass of love, light a
                        <br />
                        Candle
                        <br />
                        Call someone you trust, or sit with yourself
                      </p>
                      <p>
                        Shuffle. pull a card
                        <br />
                        Read it slowly. Let it linger
                      </p>
                      <p>
                        Answer honestly, dramatically, with a story
                        <br />
                        or not at all
                      </p>
                      <p>
                        Ask someone else. Ask yourself
                        <br />
                        Go deeper, or let it go
                      </p>
                      <p>
                        Some questions are meant to be answered
                        <br />
                        Some are meant to wonder
                      </p>
                      <p className="ritual-closer">
                        Keep what finds a place in you. Let the rest
                        <br />
                        drift away.
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
                      <span>The</span>
                      <img
                        src="/images/thought-daughter-wordmark.png"
                        alt="Thought Daughter"
                        className="code-title-logo"
                      />
                      <span>Code</span>
                    </h3>
                    <div className="code-rules-list">
                      <p>Think outside the box – There are no right answers here</p>
                      <p>Dig deeper – Your first answer isn&apos;t always your real one</p>
                      <p>Don&apos;t overthink it – Or do. That&apos;s kind of the point</p>
                      <p>No judging – honest answers are welcome</p>
                      <p>Put your phone down – The conversation is happening here</p>
                      <p>Let silence happen – You don&apos;t have to fill every second</p>
                    </div>
                    <p className="code-closing-tag">
                      Take what resonates, leave what doesn&apos;t
                    </p>
                    <div className="code-social">
                      <p className="code-social-text">
                        If you&apos;d like to share, we&apos;d love to listen
                      </p>
                      <a
                        href="https://instagram.com/thethoughtdaughterdeck"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="code-social-link"
                      >
                        @thethoughtdaughterdeck
                      </a>
                    </div>
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
