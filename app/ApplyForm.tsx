"use client";

import { useState } from "react";

/*
 * ONE VALUE TO SET AFTER YOU DEPLOY THE GOOGLE APPS SCRIPT:
 * Paste your Apps Script Web App URL below (ends in /exec).
 * Until it is set, the form still works — it simply skips the sheet write
 * and goes straight to the payment step, so the page never breaks.
 */
const SHEET_ENDPOINT = "https://script.google.com/macros/s/AKfycbw_oIZpxme-u2jr0zGvrDV5v3_o3M-sHZNVQVOq6DXS1IyY_xrRKDGS7uvseHTBlCMQ/exec";

const STRIPE_FILMED = "https://buy.stripe.com/aFa00kcmR2542Zfdsi1Fe0i";
const STRIPE_PRIVATE = "https://buy.stripe.com/fZu4gAbiNaBAbvL9c21Fe0j";

function ArrowMark() {
  return (
    <span className="arrow-mark" aria-hidden="true">
      &#8599;
    </span>
  );
}

export default function ApplyForm() {
  const [open, setOpen] = useState(false);
  const [choice, setChoice] = useState<"filmed" | "private">("filmed");
  const [submitting, setSubmitting] = useState(false);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);

    const payload = {
      firstName: String(data.get("first-name") || ""),
      lastName: String(data.get("last-name") || ""),
      email: String(data.get("email") || ""),
      phone: String(data.get("phone") || ""),
      brand: String(data.get("brand") || ""),
      website: String(data.get("website") || ""),
      vision: String(data.get("vision") || ""),
      investment: String(data.get("investment") || ""),
      discovery: String(data.get("discovery") || ""),
      consent: data.get("consent") ? "Yes" : "No",
    };

    setChoice(payload.discovery === "private" ? "private" : "filmed");
    setSubmitting(true);

    if (SHEET_ENDPOINT) {
      try {
        await fetch(SHEET_ENDPOINT, {
          method: "POST",
          mode: "no-cors",
          headers: { "Content-Type": "text/plain;charset=utf-8" },
          body: JSON.stringify(payload),
        });
      } catch {
        // Non-blocking: never trap the applicant on a network hiccup.
      }
    }

    setSubmitting(false);
    setOpen(true);
  }

  return (
    <>
      <form className="application-form reveal" onSubmit={handleSubmit}>
        <div className="field-row">
          <label>First name<input type="text" name="first-name" autoComplete="given-name" required /></label>
          <label>Last name<input type="text" name="last-name" autoComplete="family-name" required /></label>
        </div>
        <div className="field-row">
          <label>Email<input type="email" name="email" autoComplete="email" required /></label>
          <label>Phone<input type="tel" name="phone" autoComplete="tel" required /></label>
        </div>
        <label>Business / brand<input type="text" name="brand" required /></label>
        <label>Website or primary social link<input type="url" name="website" placeholder="https://" required /></label>
        <label>What are you building next?<textarea name="vision" rows={4} required /></label>
        <fieldset>
          <legend>Investment readiness</legend>
          <div className="radio-grid">
            <label><input type="radio" name="investment" value="19-30" required /><span>$19K - $30K</span></label>
            <label><input type="radio" name="investment" value="30-75" /><span>$30K - $75K</span></label>
            <label><input type="radio" name="investment" value="75-plus" /><span>$75K+</span></label>
          </div>
        </fieldset>
        <fieldset>
          <legend>Preferred discovery</legend>
          <div className="radio-grid two-up">
            <label><input type="radio" name="discovery" value="filmed" required /><span>Filmed · virtual or LA · $333</span></label>
            <label><input type="radio" name="discovery" value="private" /><span>Private · $555</span></label>
          </div>
        </fieldset>
        <label className="consent"><input type="checkbox" name="consent" required /><span>I understand Creator Growth partnerships begin at $19,000 and discovery sessions are paid.</span></label>
        <button className="button button-gold" type="submit" disabled={submitting}>
          {submitting ? "Submitting…" : "Submit application"} <ArrowMark />
        </button>
        <p className="form-note">Once you submit, choose and pay for your discovery session. Your booking calendar opens right after payment.</p>
      </form>

      {open && (
        <div className="discovery-modal" role="dialog" aria-modal="true" aria-labelledby="discovery-modal-title">
          <div className="discovery-modal-backdrop" onClick={() => setOpen(false)} />
          <div className="discovery-modal-card">
            <button className="discovery-modal-close" onClick={() => setOpen(false)} aria-label="Close">&#215;</button>
            <p className="eyebrow">Application received</p>
            <h3 id="discovery-modal-title">Secure your discovery session.</h3>
            <p className="discovery-modal-copy">Choose your session and complete payment. Your scheduling calendar opens immediately after checkout.</p>

            <div className="discovery-modal-options">
              <a
                className={`discovery-modal-option${choice === "filmed" ? " is-preferred" : ""}`}
                href={STRIPE_FILMED}
              >
                <span className="discovery-modal-tier">Filmed Discovery</span>
                <b>$333</b>
                <small>Virtual worldwide or in LA · filmed for the content ecosystem</small>
              </a>
              <a
                className={`discovery-modal-option${choice === "private" ? " is-preferred" : ""}`}
                href={STRIPE_PRIVATE}
              >
                <span className="discovery-modal-tier">Private Discovery</span>
                <b>$555</b>
                <small>Virtual or LA · fully private, no recording</small>
              </a>
            </div>

            <p className="discovery-modal-warning">
              Payment for your session must be made in full. Until payment clears, your scheduled meeting will not be held.
            </p>
          </div>
        </div>
      )}
    </>
  );
}
