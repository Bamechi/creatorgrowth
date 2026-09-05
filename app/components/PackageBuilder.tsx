"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { PROGRAM_MIN, money } from "../config";

type Item = { id: string; name: string; price: number; note: string; publicRate?: number; pending?: boolean; event?: boolean; when?: string };
type Group = { key: string; label: string; blurb: string; hue: string; items: Item[] };

export const MAX_EVENTS = 4;
export const EVENT_RATE = 1500;

const groups: Group[] = [
  {
    key: "keys", label: "Access to 19Keys", blurb: "His time, his stage, his platform.", hue: "gold",
    items: [
      { id: "k1", name: "Private Consultation", price: 2500, note: "Filmed one-on-one. Strategy, brand, your next move." },
      { id: "k3", name: "Virtual Appearance", price: 1500, publicRate: 5000, note: "On your platform or his." },
      { id: "k4", name: "Panel or Fireside at Your Event", price: 14000, publicRate: 19000, note: "Travel separate." },
      { id: "k5", name: "Keynote at Your Event", price: 19000, publicRate: 25000, note: "One keynote is the whole Program. Travel separate." },
      { id: "k2", name: "Feature on High Level Conversations", price: 0, pending: true, note: "Approval pending. Ask in discovery." },
    ],
  },
  {
    key: "events", label: "Events", blurb: "Choose up to four. $1,500 each. Ethiopia is offered separately, at cost. Travel is yours.", hue: "teal",
    items: [
      { id: "e01", when: "Sep 2026", name: "Atlanta · New York", price: EVENT_RATE, event: true, note: "Peace on the Pond Mastermind. New York media run." },
      { id: "e02", when: "Oct 2026", name: "London · Netherlands", price: EVENT_RATE, event: true, note: "Black History Month. Masterminds and speaking." },
      { id: "e03", when: "Nov 2026", name: "Los Angeles", price: EVENT_RATE, event: true, note: "The Factory. Media day and the address." },
      { id: "e04", when: "Dec 2026", name: "Atlanta", price: EVENT_RATE, event: true, note: "Peace on the Pond Mastermind." },
      { id: "e05", when: "Feb 2027", name: "Los Angeles · Arizona", price: EVENT_RATE, event: true, note: "Wellness retreat. The real-estate stage." },
      { id: "e06", when: "Mar 2027", name: "Houston", price: EVENT_RATE, event: true, note: "Godbody Weekend Mastermind." },
      { id: "e07", when: "Apr 2027", name: "Atlanta", price: EVENT_RATE, event: true, note: "Peace on the Pond Mastermind." },
      { id: "e08", when: "May 2027", name: "Los Angeles", price: EVENT_RATE, event: true, note: "Flagship gathering." },
      { id: "e09", when: "Jun 2027", name: "Atlanta", price: EVENT_RATE, event: true, note: "Peace on the Pond Mastermind." },
      { id: "e10", when: "Jul 2027", name: "Toronto", price: EVENT_RATE, event: true, note: "Creator Growth Mastermind." },
      { id: "e11", when: "Aug 2027", name: "Atlanta", price: EVENT_RATE, event: true, note: "InvestFest week. Peace on the Pond Mastermind." },
      { id: "e12", when: "Sep 2027", name: "Atlanta", price: EVENT_RATE, event: true, note: "Peace on the Pond Mastermind." },
      { id: "e13", when: "Oct 2027", name: "London", price: EVENT_RATE, event: true, note: "Black History Month. Masterminds and speaking." },
      { id: "e14", when: "Nov 2027", name: "Los Angeles", price: EVENT_RATE, event: true, note: "Creator Growth Mastermind." },
      { id: "e15", when: "Dec 2027", name: "Atlanta", price: EVENT_RATE, event: true, note: "Peace on the Pond Mastermind." },
    ],
  },
  {
    key: "systems", label: "Systems, AI & Operations", blurb: "The machine behind the message.", hue: "gold",
    items: [
      { id: "s1", name: "Systems Consultation", price: 2500, note: "Our frameworks, customized." },
      { id: "s2", name: "Custom AI Agent", price: 3500, note: "Voice, content, or operations. Built and installed." },
      { id: "s3", name: "Editing Infrastructure · 90 days", price: 3000, note: "Managed editor pool. Weekly output." },
      { id: "s4", name: "AI Tools Deck + Training", price: 1000, note: "The stack and how to run it." },
      { id: "s5", name: "Management Services · 3 months", price: 5000, note: "Booking, operations, a team behind the brand." },
    ],
  },
  {
    key: "media", label: "Media & Community", blurb: "Your show. Your nation.", hue: "gold",
    items: [
      { id: "m1", name: "Podcast Launch · pilot season", price: 6000, note: "Concept, production, distribution." },
      { id: "m2", name: "Content System Install", price: 3500, note: "Clipping, distribution, cadence." },
      { id: "m3", name: "Private Room on Ziion + Marketing", price: 3000, note: "Your community home, promoted for twelve months." },
      { id: "m4", name: "Build Your Nation on Ziion", price: 4000, note: "Full community launch. Platform fees separate." },
    ],
  },
];

const presets = [
  { key: "stage", label: "The Stage", tag: "One keynote. The whole Program.", ids: ["k5"] },
  { key: "flagship", label: "The Flagship", tag: "Consult · podcast · management · room · two events", ids: ["k1", "m1", "s5", "m3", "e03", "e04"] },
  { key: "builder", label: "The Builder", tag: "Systems · media · management · one event", ids: ["s1", "s2", "s3", "m2", "s5", "e04"] },
];

const allItems = groups.flatMap((g) => g.items);

function useTween(target: number) {
  const [v, setV] = useState(target);
  const from = useRef(target);
  useEffect(() => {
    const start = from.current, t0 = performance.now(), dur = 520;
    let raf = 0;
    const tick = (t: number) => {
      const p = Math.min((t - t0) / dur, 1), e = 1 - Math.pow(1 - p, 3);
      setV(Math.round(start + (target - start) * e));
      if (p < 1) raf = requestAnimationFrame(tick); else from.current = target;
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target]);
  return v;
}

export default function PackageBuilder() {
  const [selected, setSelected] = useState<Set<string>>(new Set());
  const [open, setOpen] = useState<string>("keys");
  const [showIncluded, setShowIncluded] = useState(false);
  const [note, setNote] = useState("");

  const chosen = useMemo(() => allItems.filter((i) => selected.has(i.id)), [selected]);
  const total = chosen.reduce((s, i) => s + i.price, 0);
  const publicValue = chosen.reduce((s, i) => s + (i.publicRate ?? i.price), 0);
  const eventCount = chosen.filter((i) => i.event).length;
  const shown = useTween(total);
  const unlocked = total >= PROGRAM_MIN;
  const pct = Math.min((total / PROGRAM_MIN) * 100, 100);

  function toggle(item: Item) {
    if (item.pending) return;
    setSelected((prev) => {
      const next = new Set(prev);
      if (next.has(item.id)) { next.delete(item.id); setNote(""); return next; }
      if (item.event && eventCount >= MAX_EVENTS) { setNote("Four events selected. Remove one to swap."); return prev; }
      next.add(item.id); setNote(""); return next;
    });
  }

  function subtotal(g: Group) { return g.items.filter((i) => selected.has(i.id)).reduce((s, i) => s + i.price, 0); }
  function count(g: Group) { return g.items.filter((i) => selected.has(i.id)).length; }

  function apply() {
    const summary = chosen.map((i) => `${i.name} (${money(i.price)})`).join("; ") + ` — Total ${money(total)}`;
    window.dispatchEvent(new CustomEvent("cg:package", { detail: summary }));
    document.getElementById("apply")?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <div className="pb">
      <div className="pb-presets">
        {presets.map((p) => (
          <button key={p.key} type="button" className="pb-preset glass" onClick={() => { setSelected(new Set(p.ids)); setNote(""); }}>
            <b>{p.label}</b><span>{p.tag}</span>
          </button>
        ))}
        <button type="button" className="pb-preset pb-preset-clear" onClick={() => { setSelected(new Set()); setNote(""); }}>
          <b>Blank</b><span>Line by line</span>
        </button>
      </div>

      <div className="pb-layout">
        <div className="pb-groups">
          {groups.map((g) => {
            const isOpen = open === g.key;
            const n = count(g);
            return (
              <section key={g.key} className={`pb-group glass${isOpen ? " is-open" : ""}`} data-hue={g.hue}>
                <button type="button" className="pb-group-head" onClick={() => setOpen(isOpen ? "" : g.key)} aria-expanded={isOpen}>
                  <span className="pb-group-title">
                    <b>{g.label}</b>
                    <small>{g.key === "events" ? `${eventCount} of ${MAX_EVENTS} · ${g.blurb}` : g.blurb}</small>
                  </span>
                  <span className="pb-group-meta">
                    {n > 0 ? <em>{n} · {money(subtotal(g))}</em> : null}
                    <i aria-hidden="true">{isOpen ? "−" : "+"}</i>
                  </span>
                </button>
                <div className="pb-group-body" hidden={!isOpen}>
                  {g.key === "events" && note ? <p className="pb-note">{note}</p> : null}
                  <ul>
                    {g.items.map((item) => {
                      const on = selected.has(item.id);
                      return (
                        <li key={item.id}>
                          <button type="button" className={`pb-item${on ? " is-on" : ""}${item.pending ? " is-pending" : ""}`} onClick={() => toggle(item)} aria-pressed={on} disabled={item.pending}>
                            <span className="pb-check" aria-hidden="true">{on ? "\u2713" : ""}</span>
                            <span className="pb-item-text">{item.when ? <em className="pb-when">{item.when}</em> : null}<b>{item.name}</b><small>{item.note}</small></span>
                            <span className="pb-item-price">
                              {item.pending ? <em>Pending</em> : <>{item.publicRate ? <s>{money(item.publicRate)}</s> : null}<b>{money(item.price)}</b></>}
                            </span>
                          </button>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </section>
            );
          })}
        </div>

        <aside className="pb-summary glass" aria-live="polite">
          <p className="eyebrow">Your partnership</p>
          <div className="pb-total"><b>{money(shown)}</b><span>{chosen.length} {chosen.length === 1 ? "item" : "items"} · {eventCount} {eventCount === 1 ? "event" : "events"}</span></div>
          <div className="pb-bar"><span style={{ width: `${pct}%` }} /></div>
          <p className={`pb-status${unlocked ? " is-unlocked" : ""}`}>
            {unlocked ? "Program unlocked." : `${money(PROGRAM_MIN - total)} to unlock the Program.`}
          </p>
          {publicValue > total ? <p className="pb-anchor">Public rate <s>{money(publicValue)}</s></p> : null}

          <button type="button" className="pb-included-toggle" onClick={() => setShowIncluded(!showIncluded)} aria-expanded={showIncluded}>
            Also included <i aria-hidden="true">{showIncluded ? "−" : "+"}</i>
          </button>
          {showIncluded ? (
            <ul className="pb-included">
              <li>Private partner mastermind series</li>
              <li>Ethiopia inner-circle trip, at cost</li>
              <li>VIP access to speaking engagements and live rooms</li>
              <li>Listed leadership profile</li>
              <li>Financing available</li>
            </ul>
          ) : null}

          <button type="button" className="button button-gold pb-cta" onClick={apply} disabled={chosen.length === 0}>
            {unlocked ? "Apply with this package" : "Apply and finish the map together"} <span className="arrow-mark" aria-hidden="true">&#8599;</span>
          </button>
          <small>Program rates. Travel and lodging separate. Scope confirmed in discovery.</small>
        </aside>
      </div>
    </div>
  );
}
