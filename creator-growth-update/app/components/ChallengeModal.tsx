"use client";

import { useEffect, useState } from "react";
import ChallengeSignup from "./ChallengeSignup";

const KEY = "cg-challenge-popup";

/** Popup signup. Opens on the cg:open-challenge event, or once per session after 7s / 35% scroll. */
export default function ChallengeModal({ autoOpen = true }: { autoOpen?: boolean }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const show = () => setOpen(true);
    window.addEventListener("cg:open-challenge", show);

    let timer: number | undefined;
    let onScroll: (() => void) | undefined;
    if (autoOpen && !sessionStorage.getItem(KEY)) {
      const trigger = () => { sessionStorage.setItem(KEY, "1"); setOpen(true); cleanup(); };
      timer = window.setTimeout(trigger, 7000);
      onScroll = () => {
        const p = window.scrollY / Math.max(document.body.scrollHeight - window.innerHeight, 1);
        if (p > 0.35) trigger();
      };
      window.addEventListener("scroll", onScroll, { passive: true });
    }
    function cleanup() {
      if (timer) window.clearTimeout(timer);
      if (onScroll) window.removeEventListener("scroll", onScroll);
    }
    return () => { window.removeEventListener("cg:open-challenge", show); cleanup(); };
  }, [autoOpen]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setOpen(false); };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => { document.removeEventListener("keydown", onKey); document.body.style.overflow = ""; };
  }, [open]);

  if (!open) return null;

  return (
    <div className="popup" role="dialog" aria-modal="true" aria-labelledby="popup-title">
      <div className="popup-backdrop" onClick={() => setOpen(false)} />
      <div className="popup-card glass">
        <button className="popup-close" onClick={() => setOpen(false)} aria-label="Close">&#215;</button>
        <p className="eyebrow">The Creator Growth Challenge · Oct 5–9 · Oct 19–23</p>
        <h3 id="popup-title" className="h-mid">Two weeks.<br />Fully set up.</h3>
        <ul className="popup-facts">
          <li><b>2</b><span>weeks</span></li>
          <li><b>~3 hrs</b><span>a day, your pace</span></li>
          <li><b>4:44pm</b><span>PST daily live</span></li>
          <li><b>$99</b><span>both weeks</span></li>
        </ul>
        <ChallengeSignup />
      </div>
    </div>
  );
}
