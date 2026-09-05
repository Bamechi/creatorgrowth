"use client";

import { useEffect, useState } from "react";

type Chapter = { id: string; label: string };

/** Fixed vertical chapter index. Highlights the section in view. */
export default function ChapterNav({ chapters }: { chapters: Chapter[] }) {
  const [active, setActive] = useState(chapters[0]?.id);

  useEffect(() => {
    const els = chapters.map((c) => document.getElementById(c.id)).filter(Boolean) as HTMLElement[];
    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { threshold: [0.25, 0.5], rootMargin: "-20% 0px -40% 0px" },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [chapters]);

  return (
    <nav className="chapter-nav" aria-label="Chapters">
      {chapters.map((c, i) => (
        <a key={c.id} href={`#${c.id}`} className={active === c.id ? "is-active" : ""}>
          <i>{String(i).padStart(2, "0")}</i>
          <span>{c.label}</span>
        </a>
      ))}
    </nav>
  );
}
