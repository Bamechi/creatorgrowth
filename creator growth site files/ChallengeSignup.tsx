"use client";

import { useState } from "react";
import { CHALLENGE_FULL, CHALLENGE_WEEK, postToSheet } from "./config";

export default function ChallengeSignup() {
  const [done, setDone] = useState(false);
  const [busy, setBusy] = useState(false);
  const [plan, setPlan] = useState<"full" | "week">("full");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    setBusy(true);
    await postToSheet({
      type: "challenge",
      firstName: String(data.get("first-name") || ""),
      lastName: "",
      email: String(data.get("email") || ""),
      phone: String(data.get("phone") || ""),
      brand: "Creator Growth Challenge",
      website: String(data.get("handle") || ""),
      vision: plan === "full" ? "Both weeks ($" + CHALLENGE_FULL + ")" : "One week ($" + CHALLENGE_WEEK + ")",
      investment: "",
      discovery: "challenge-waitlist",
      consent: "Yes",
    });
    setBusy(false);
    setDone(true);
  }

  if (done) {
    return (
      <div className="challenge-confirm">
        <p className="eyebrow">Seat reserved</p>
        <h3>You are on the founding list.</h3>
        <p>Dates, the Day 1 schedule, and your payment link arrive by email before the October cohort opens. Bring a notebook and a business worth building.</p>
      </div>
    );
  }

  return (
    <form className="challenge-form" onSubmit={handleSubmit}>
      <div className="challenge-plan" role="radiogroup" aria-label="Choose your challenge plan">
        <button
          type="button"
          className={`challenge-plan-option${plan === "full" ? " is-active" : ""}`}
          onClick={() => setPlan("full")}
          aria-pressed={plan === "full"}
        >
          <span>Both weeks</span>
          <b>${CHALLENGE_FULL}</b>
          <small>Positioning + AI &amp; systems · best value</small>
        </button>
        <button
          type="button"
          className={`challenge-plan-option${plan === "week" ? " is-active" : ""}`}
          onClick={() => setPlan("week")}
          aria-pressed={plan === "week"}
        >
          <span>One week</span>
          <b>${CHALLENGE_WEEK}</b>
          <small>Choose your week at registration</small>
        </button>
      </div>

      <div className="field-row">
        <label>First name<input type="text" name="first-name" autoComplete="given-name" required /></label>
        <label>Email<input type="email" name="email" autoComplete="email" required /></label>
      </div>
      <div className="field-row">
        <label>Phone<input type="tel" name="phone" autoComplete="tel" required /></label>
        <label>Instagram or primary handle<input type="text" name="handle" placeholder="@" /></label>
      </div>

      <button className="button button-gold" type="submit" disabled={busy}>
        {busy ? "Reserving…" : "Reserve my seat"} <span className="arrow-mark" aria-hidden="true">&#8599;</span>
      </button>
      <p className="form-note">Founding cohort · October 2026 · Registration closes when Day 1 begins. Payment link sent on approval.</p>
    </form>
  );
}
