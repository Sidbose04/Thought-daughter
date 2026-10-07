"use client";

import { useState, useEffect } from "react";

export default function RitualSection() {
  const [activeTab, setActiveTab] = useState<"ritual" | "code">("ritual");
  const [isRevealed, setIsRevealed] = useState(false);

  // Dismiss when Escape is pressed
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isRevealed) {
        setIsRevealed(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isRevealed]);

  // Subtle interactive 3D tilt tracking for the revealed card
  const handleCardMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -5;
    const rotateY = ((x - centerX) / centerX) * 5;
    card.style.setProperty("--tilt-rx", `${rotateX.toFixed(2)}deg`);
    card.style.setProperty("--tilt-ry", `${rotateY.toFixed(2)}deg`);
  };

  const handleCardMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    e.currentTarget.style.setProperty("--tilt-rx", "0deg");
    e.currentTarget.style.setProperty("--tilt-ry", "0deg");
  };

  return (
    <section className="ritual-section" id="ritual" aria-label="A little ritual">
      {/* Full-screen click-anywhere backdrop overlay when popped */}
      {isRevealed && (
        <div
          className="ritual-backdrop"
          onClick={() => setIsRevealed(false)}
          aria-hidden="true"
        />
      )}

      <div className="ritual-grid">
        {/* Left Column: Heading and Guide Selectors */}
        <div className="ritual-left">
          <p className="eyebrow">You've got mail</p>
          <h2 className="ritual-title">
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
            <span className="reveal-tag" />
          </div>

          <div
            className={`envelope-stage ${isRevealed ? "is-revealed" : ""}`}
            onClick={(e) => {
              // If already revealed and clicked, toggle off
              setIsRevealed(!isRevealed);
            }}
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
              <div
                className={`revealed-card ${isRevealed ? "open" : ""}`}
                onClick={(e) => {
                  // Clicking the card itself lets you tuck it away or interact
                  e.stopPropagation();
                  setIsRevealed(false);
                }}
                onMouseMove={handleCardMouseMove}
                onMouseLeave={handleCardMouseLeave}
              >
                <div className="revealed-letter-wrapper">
                  <div className="card-shine-effect" />
                  <img
                    src={
                      activeTab === "ritual"
                        ? "/images/letters/letter1.png"
                        : "/images/letters/letter2.jpeg"
                    }
                    alt={
                      activeTab === "ritual"
                        ? "A Little Ritual Letter Guide"
                        : "The Thought Daughter Code Letter Guide"
                    }
                    className="revealed-letter-img"
                  />
                </div>
              </div>
            </div>

            <span className="envelope-action-hint">
              {isRevealed ? "Click anywhere to put away" : "Tap envelope to read"}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
