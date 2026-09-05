import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Creator Growth | The Challenge & The Program | 19Keys x High Lvl",
  description: "Turning a culture of consumers into a culture of creators. The two-week Creator Growth Challenge ($99) and the $19,000 Creator Growth Program — strategy, content, rooms, and systems curated by 19Keys.",
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
