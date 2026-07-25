import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Creator Growth Program | 19Keys x High Lvl",
  description: "A private growth partnership for established creators, founders, and culture-builders. Strategy, content, access, and systems curated by 19Keys.",
  icons: {
    icon: "/media/key-logo.png",
    shortcut: "/media/key-logo.png",
  },
};

export const viewport: Viewport = {
  themeColor: "#070707",
  colorScheme: "dark light",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
