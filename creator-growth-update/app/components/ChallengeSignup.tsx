"use client";

import { useState } from "react";
import { CHALLENGE_ENDPOINT, CHALLENGE_FULL, CHALLENGE_WEEK, INTERESTS, STRIPE_CHALLENGE_FULL, STRIPE_CHALLENGE_WEEK, postTo } from "../config";

export default function ChallengeSignup() {
  const [plan, setPlan] = useState<"full" | "week">("full");
  const [interests, setInterests] = useState<Set<string>>(new Set());
  const [fields, setFields] = useState({ name: "", email: "", phone: "", instagram: "" });
  const [busy, setBusy] = useState(false);

  const allOn = interests.size === INTERESTS.length;
  const valid = fields.name.trim() && /\S+@\S+\.\S+/.test(fields.email) && fields.phone.trim() && fields.instagram.trim() && interests.size > 0;

  function toggleInterest(i: string) {
    setInterests((prev) => { const n = new Set(prev); n.has(i) ? n.delete(i) : n.add(i); return n; });
  }
  function toggleAll() { setInterests(allOn ? new Set() : new Set(INTERESTS)); }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!valid || busy) return;
    setBusy(true);
    await postTo(CHALLENGE_ENDPOINT, {
      name: fields.name.trim(),
      email: fields.email.trim(),
      phone: fields.phone.trim(),
      instagram: fields.instagram.trim(),
      interests: Array.from(interests).join(", "),
      plan: plan === "full" ? `Both weeks ($${CHALLENGE_FULL})` : `One week ($${CHALLENGE_WEEK})`,
    });
    window.location.href = plan === "full" ? STRIPE_CHALLENGE_FULL : STRIPE_CHALLENGE_WEEK;
  }

  return (
    <form className="signup-form" onSubmit={handleSubmit} noValidate>
      <div className="plan-toggle" role="radiogroup" aria-label="Plan">
        <button type="button" className={plan === "full" ? "is-active" : ""} onClick={() => setPlan("full")} aria-pressed={plan === "full"}>
          <span>Both weeks</span><b>${CHALLENGE_FULL}</b>
        </button>
        <button type="button" className={plan === "week" ? "is-active" : ""} onClick={() => setPlan("week")} aria-pressed={plan === "week"}>
          <span>One week</span><b>${CHALLENGE_WEEK}</b>
        </button>
      </div>

      <div className="signup-fields">
        <input type="text" placeholder="Name" autoComplete="name" required aria-label="Name" value={fields.name} onChange={(e) => setFields({ ...fields, name: e.target.value })} />
        <input type="email" placeholder="Email" autoComplete="email" required aria-label="Email" value={fields.email} onChange={(e) => setFields({ ...fields, email: e.target.value })} />
        <input type="tel" placeholder="Phone" autoComplete="tel" required aria-label="Phone" value={fields.phone} onChange={(e) => setFields({ ...fields, phone: e.target.value })} />
        <input type="text" placeholder="@instagram" required aria-label="Instagram" value={fields.instagram} onChange={(e) => setFields({ ...fields, instagram: e.target.value })} />
      </div>

      <fieldset className="interest-set">
        <legend>What are you most interested in?</legend>
        <div className="interest-grid">
          {INTERESTS.map((i) => (
            <button key={i} type="button" className={`chip${interests.has(i) ? " is-on" : ""}`} onClick={() => toggleInterest(i)} aria-pressed={interests.has(i)}>{i}</button>
          ))}
          <button type="button" className={`chip chip-all${allOn ? " is-on" : ""}`} onClick={toggleAll} aria-pressed={allOn}>All of the above</button>
        </div>
      </fieldset>

      <button className="button button-gold signup-cta" type="submit" disabled={!valid || busy}>
        {busy ? "Opening checkout…" : `Reserve my seat · $${plan === "full" ? CHALLENGE_FULL : CHALLENGE_WEEK}`} <span className="arrow-mark" aria-hidden="true">&#8599;</span>
      </button>
      <small className="signup-note">{valid ? "Secure checkout opens next." : "Complete every field to reserve your seat."}</small>
    </form>
  );
}
