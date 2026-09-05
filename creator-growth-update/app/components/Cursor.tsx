"use client";

import { useEffect } from "react";

/** Gold dot with a trailing ring. Pointer devices only. */
export default function Cursor() {
  useEffect(() => {
    if (!window.matchMedia("(pointer: fine)").matches) return;
    const dot = document.createElement("div");
    const ring = document.createElement("div");
    dot.className = "cursor-dot";
    ring.className = "cursor-ring";
    document.body.append(dot, ring);
    document.body.classList.add("has-cursor");

    let x = 0, y = 0, rx = 0, ry = 0, raf = 0;
    const onMove = (e: MouseEvent) => {
      x = e.clientX; y = e.clientY;
      dot.style.transform = `translate(${x}px, ${y}px)`;
    };
    const loop = () => {
      rx += (x - rx) * 0.18; ry += (y - ry) * 0.18;
      ring.style.transform = `translate(${rx}px, ${ry}px)`;
      raf = requestAnimationFrame(loop);
    };
    const onOver = (e: MouseEvent) => {
      const t = e.target as HTMLElement;
      const interactive = t.closest("a, button, summary, [role=button]");
      ring.classList.toggle("is-hover", Boolean(interactive));
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("mouseover", onOver, { passive: true });
    raf = requestAnimationFrame(loop);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
      dot.remove(); ring.remove();
      document.body.classList.remove("has-cursor");
    };
  }, []);
  return null;
}
