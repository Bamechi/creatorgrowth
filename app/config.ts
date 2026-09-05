// Shared configuration for the Creator Growth site.

// Program applications → "Creator Growth Applicants" sheet (live).
export const SHEET_ENDPOINT =
  "https://script.google.com/macros/s/AKfycbw_oIZpxme-u2jr0zGvrDV5v3_o3M-sHZNVQVOq6DXS1IyY_xrRKDGS7uvseHTBlCMQ/exec";

// Challenge signups → "Creator Growth Intake Form" sheet.
export const CHALLENGE_ENDPOINT =
  "https://script.google.com/macros/s/AKfycbwZoWev9b-2rrNbwOXKcSBZsCbgIJ_-7dNXMOxAr0hn_raSZlJyl69Ug-cu8HRfotoD/exec";

// Challenge checkout (Stripe Payment Links).
export const STRIPE_CHALLENGE_FULL = "https://buy.stripe.com/bJe28s72x8tsarH4VM1Fe0l";
export const STRIPE_CHALLENGE_WEEK = "https://buy.stripe.com/eVq7sMgD7aBA8jzewm1Fe0m";

// Discovery checkout (Stripe Payment Links). Each redirects to Cal.com after payment.
export const STRIPE_FILMED = "https://buy.stripe.com/aFa00kcmR2542Zfdsi1Fe0i";
export const STRIPE_PRIVATE = "https://buy.stripe.com/fZu4gAbiNaBAbvL9c21Fe0j";
export const CAL_DISCOVERY = "https://cal.com/19keys/creator-growth-discover-session";

export const PROGRAM_MIN = 19000;
export const CHALLENGE_WEEK = 55;
export const CHALLENGE_FULL = 99;

export const CHALLENGE_DATES = { week1: "Oct 5–9", week2: "Oct 19–23", live: "4:44pm PST" };

export const INTERESTS = ["AI", "Content Creation", "Automation", "Podcast", "Speaking / Communication", "Operations", "Branding"];

export async function postTo(endpoint: string, payload: Record<string, string>) {
  if (!endpoint) return;
  try {
    await fetch(endpoint, { method: "POST", mode: "no-cors", headers: { "Content-Type": "text/plain;charset=utf-8" }, body: JSON.stringify(payload) });
  } catch {
    // Never trap the visitor on a network hiccup.
  }
}
export const postToSheet = (payload: Record<string, string>) => postTo(SHEET_ENDPOINT, payload);

export function money(n: number) {
  return "$" + n.toLocaleString("en-US");
}
