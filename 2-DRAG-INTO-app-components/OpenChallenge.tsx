"use client";

type Props = { className?: string; children: React.ReactNode };

/** Any button that should open the Challenge signup popup. */
export default function OpenChallenge({ className = "button button-gold", children }: Props) {
  return (
    <button
      type="button"
      className={className}
      onClick={() => window.dispatchEvent(new CustomEvent("cg:open-challenge"))}
    >
      {children}
    </button>
  );
}
