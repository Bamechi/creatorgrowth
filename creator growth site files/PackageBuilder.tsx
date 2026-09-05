"use client";

import { useMemo, useState } from "react";
import { PROGRAM_MIN, money } from "./config";

type Item = {
  id: string;
  name: string;
  price: number;
  note: string;
  publicRate?: number;
};

type Group = { key: string; label: string; items: Item[] };

const groups: Group[] = [
  {
    key: "keys",
    label: "Access to 19Keys",
    items: [
      { id: "k1", name: "Private Strategy Consultation with 19Keys", price: 6000, note: "In person in Los Angeles or where the calendar lands. Filmed, so it doubles as your content." },
      { id: "k2", name: "Feature on High Level Conversations", price: 8000, publicRate: 12000, note: "In-person podcast or private video with 19Keys." },
      { id: "k3", name: "Virtual Appearance with 19Keys", price: 3500, publicRate: 5000, note: "Bring him onto your platform, or join his, virtually." },
      { id: "k4", name: "19Keys at Your Event — panel or fireside", price: 14000, publicRate: 19000, note: "Travel and lodging separate. Keynote by quote." },
    ],
  },
  {
    key: "events",
    label: "Events & rooms",
    items: [
      { id: "e1", name: "Creator Day seat", price: 555, note: "One filmed mastermind. Twenty seats. Atlanta or a partner city." },
      { id: "e2", name: "Creator Camp — three-day immersive", price: 2500, note: "Peace on the Pond, Atlanta. Day one energy, day two training, day three checking tape." },
      { id: "e3", name: "Los Angeles Media Day", price: 1500, note: "November at the Factory. Shoot, sessions, and the room." },
      { id: "e4", name: "London Mastermind", price: 2500, note: "October. Black History Month in the UK. Travel separate." },
    ],
  },
  {
    key: "systems",
    label: "Systems & AI",
    items: [
      { id: "s1", name: "Systems Consultation", price: 2500, note: "Our frameworks and templates, customized to your business." },
      { id: "s2", name: "Custom AI Agent", price: 3500, note: "A voice bot, content engine, or operations automation, built and installed." },
      { id: "s3", name: "Editing Infrastructure — 90 days", price: 3000, note: "A managed editor pool turning your raw footage into weekly output." },
      { id: "s4", name: "AI Tools Deck + Training", price: 1000, note: "The in-house stack and how to run it." },
    ],
  },
  {
    key: "media",
    label: "Media & community",
    items: [
      { id: "m1", name: "Podcast Launch — pilot season", price: 6000, note: "Concept, production, and distribution with High Lvl Media." },
      { id: "m2", name: "Content System Install", price: 3500, note: "Clipping, cross-platform distribution, and a publishing cadence." },
      { id: "m3", name: "Private Room on Ziion + Marketing Push", price: 3000, note: "Your community home, actively promoted by our team for twelve months." },
      { id: "m4", name: "Build Your Nation on Ziion", price: 4000, note: "A full community launch on the platform. Platform fees separate." },
    ],
  },
];

const presets: { key: string; label: string; tagline: string; ids: string[] }[] = [
  { key: "flagship", label: "The Flagship", tagline: "Access, the show, and the room.", ids: ["k1", "k2", "e2", "m3"] },
  { key: "stage", label: "The Stage", tagline: "19Keys on your stage, plus the consult.", ids: ["k4", "k1"] },
  { key: "builder", label: "The Builder", tagline: "Systems, media, and a seat in the room.", ids: ["s1", "s2", "s3", "m1", "m2", "e1"] },
];

const allItems = groups.flatMap((g) => g.items);

export default function PackageBuilder() {
  const [selected, setSelected] = useState<Set<string>>(new Set());

  const total = useMemo(
    () => allItems.filter((i) => selected.has(i.id)).reduce((sum, i) => sum + i.price, 0),
    [selected],
  );
  const publicValue = useMemo(
    () => allItems.filter((i) => selected.has(i.id)).reduce((sum, i) => sum + (i.publicRate ?? i.price), 0),
    [selected],
  );

  const unlocked = total >= PROGRAM_MIN;
  const gap = Math.max(PROGRAM_MIN - total, 0);
  const pct = Math.min((total / PROGRAM_MIN) * 100, 100);

  function toggle(id: string) {
    setSelected((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  }

  function applyPreset(ids: string[]) {
    setSelected(new Set(ids));
  }

  function handleApply() {
    const chosen = allItems.filter((i) => selected.has(i.id));
    const summary = chosen.map((i) => `${i.name} (${money(i.price)})`).join("; ") + ` — Total ${money(total)}`;
    if (typeof window !== "undefined") {
      window.dispatchEvent(new CustomEvent("cg:package", { detail: summary }));
      document.getElementById("apply")?.scrollIntoView({ behavior: "smooth" });
    }
  }

  return (
    <div className="builder">
      <div className="builder-presets">
        <span className="builder-presets-label">Start from a path</span>
        <div className="builder-presets-row">
          {presets.map((p) => (
            <button key={p.key} type="button" className="builder-preset" onClick={() => applyPreset(p.ids)}>
              <b>{p.label}</b>
              <span>{p.tagline}</span>
            </button>
          ))}
          <button type="button" className="builder-preset builder-preset-clear" onClick={() => setSelected(new Set())}>
            <b>Start blank</b>
            <span>Build it line by line.</span>
          </button>
        </div>
      </div>

      <div className="builder-layout">
        <div className="builder-groups">
          {groups.map((g) => (
            <section className="builder-group" key={g.key}>
              <h4>{g.label}</h4>
              <ul>
                {g.items.map((item) => {
                  const on = selected.has(item.id);
                  return (
                    <li key={item.id}>
                      <button
                        type="button"
                        className={`builder-item${on ? " is-on" : ""}`}
                        onClick={() => toggle(item.id)}
                        aria-pressed={on}
                      >
                        <span className="builder-check" aria-hidden="true">{on ? "\u2713" : "+"}</span>
                        <span className="builder-item-body">
                          <span className="builder-item-name">{item.name}</span>
                          <span className="builder-item-note">{item.note}</span>
                        </span>
                        <span className="builder-item-price">
                          {item.publicRate ? <s>{money(item.publicRate)}</s> : null}
                          <b>{money(item.price)}</b>
                        </span>
                      </button>
                    </li>
                  );
                })}
              </ul>
            </section>
          ))}
        </div>

        <aside className="builder-summary" aria-live="polite">
          <p className="eyebrow">Your partnership</p>
          <div className="builder-total">
            <span>{selected.size} {selected.size === 1 ? "selection" : "selections"}</span>
            <b>{money(total)}</b>
          </div>
          <div className="builder-bar" role="progressbar" aria-valuemin={0} aria-valuemax={PROGRAM_MIN} aria-valuenow={Math.min(total, PROGRAM_MIN)}>
            <span style={{ width: `${pct}%` }} />
          </div>
          {unlocked ? (
            <p className="builder-status is-unlocked">Program unlocked. Anything above {money(PROGRAM_MIN)} is applied to your Growth Map.</p>
          ) : (
            <p className="builder-status">Add {money(gap)} more to unlock the Creator Growth Program.</p>
          )}
          {publicValue > total ? (
            <p className="builder-anchor">Public rate for the same access: <s>{money(publicValue)}</s></p>
          ) : null}

          <ul className="builder-included">
            <li>Private partner mastermind series</li>
            <li>Two Creator Growth events</li>
            <li>Inner-circle trips at cost — Ethiopia, London</li>
            <li>VIP access to speaking engagements and live rooms</li>
            <li>Listed leadership profile in the ecosystem</li>
            <li>Financing available</li>
          </ul>

          <button type="button" className="button button-gold builder-cta" onClick={handleApply} disabled={selected.size === 0}>
            {unlocked ? "Apply with this package" : "Apply and finish the map together"} <span className="arrow-mark" aria-hidden="true">&#8599;</span>
          </button>
          <small>Program rates shown. Travel and lodging are separate. Final scope is confirmed in discovery.</small>
        </aside>
      </div>
    </div>
  );
}
