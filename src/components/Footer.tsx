"use client";

import { useState } from "react";
import styles from "./Footer.module.css";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [feedbackMsg, setFeedbackMsg] = useState("");

  const handleWaitlistSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes("@")) {
      setStatus("error");
      setFeedbackMsg("Please enter a valid email address.");
      return;
    }

    try {
      setStatus("loading");
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();
      if (res.ok) {
        setStatus("success");
        setFeedbackMsg(data.message || "You are on the reservation list.");
        setEmail("");
      } else {
        setStatus("error");
        setFeedbackMsg(data.error || "Unable to join at this time.");
      }
    } catch {
      setStatus("error");
      setFeedbackMsg("Connection error. Please try again.");
    }
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.waitlistColumn}>
        <p className={styles.footerTitle}>Stay close.</p>
        <p className={styles.footerSub}>
          Join our intimate dispatch to be notified when the first printing opens.
        </p>

        {status === "success" ? (
          <div className={styles.successBanner}>
            <p className={styles.successText}>{feedbackMsg}</p>
            <button
              type="button"
              className={styles.resetBtn}
              onClick={() => {
                setStatus("idle");
                setFeedbackMsg("");
              }}
            >
              Add another email
            </button>
          </div>
        ) : (
          <form onSubmit={handleWaitlistSubmit} className={styles.form}>
            <div className={styles.inputGroup}>
              <input
                type="email"
                placeholder="your.email@quietrooms.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={status === "loading"}
                className={styles.emailInput}
                required
              />
              <button
                type="submit"
                disabled={status === "loading"}
                className={styles.submitBtn}
              >
                {status === "loading" ? "Reserving..." : "Join Waiting List"}
                <span>↗</span>
              </button>
            </div>
            {status === "error" && (
              <p className={styles.errorMsg}>{feedbackMsg}</p>
            )}
          </form>
        )}
      </div>

      <div className={styles.linksColumn}>
        <div className={styles.footerLinks}>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noreferrer"
            className={styles.link}
          >
            Instagram
          </a>
          <a href="mailto:hello@thoughtdaughter.com" className={styles.link}>
            Email
          </a>
          <a
            href="https://wa.me/"
            target="_blank"
            rel="noreferrer"
            className={styles.link}
          >
            WhatsApp
          </a>
        </div>
      </div>

      <p className={styles.copyright}>© Thought Daughter · All rights reserved</p>
    </footer>
  );
}
