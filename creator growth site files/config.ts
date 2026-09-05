// Shared configuration for the Creator Growth site.
// Live Google Apps Script intake endpoint (writes to the Creator Growth Applicants sheet).
export const SHEET_ENDPOINT =
  "https://script.google.com/macros/s/AKfycbw_oIZpxme-u2jr0zGvrDV5v3_o3M-sHZNVQVOq6DXS1IyY_xrRKDGS7uvseHTBlCMQ/exec";

// Discovery session checkout (Stripe Payment Links). Each redirects to Cal.com after payment.
export const STRIPE_FILMED = "https://buy.stripe.com/aFa00kcmR2542Zfdsi1Fe0i";
export const STRIPE_PRIVATE = "https://buy.stripe.com/fZu4gAbiNaBAbvL9c21Fe0j";

// Discovery booking calendar (surfaced only after Stripe payment).
export const CAL_DISCOVERY = "https://cal.com/19keys/creator-growth-discover-session";

// Program threshold: the token a partner allocates a la carte.
export const PROGRAM_MIN = 19000;

// Challenge pricing (from the Sept 5, 2026 session).
export const CHALLENGE_WEEK = 55;
export const CHALLENGE_FULL = 99;

// Fire-and-forget POST to the intake sheet. Never blocks the UI.
export async function postToSheet(payload: Record<string, string>) {
  if (!SHEET_ENDPOINT) return;
  try {
    await fetch(SHEET_ENDPOINT, {
      method: "POST",
      mode: "no-cors",
      headers: { "Content-Type": "text/plain;charset=utf-8" },
      body: JSON.stringify(payload),
    });
  } catch {
    // Intentionally silent: a network hiccup must never trap the visitor.
  }
}

export function money(n: number) {
  return "$" + n.toLocaleString("en-US");
}
