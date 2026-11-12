import type { Metadata } from "next";
import "./globals.css";

// Fonts load in the browser from Google Fonts (same as the design mockup),
// so builds don't depend on reaching Google at build time.
const fontsHref =
  "https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,400;12..96,600;12..96,800&family=Inter:wght@400;500;600&family=Caveat:wght@600;700&family=JetBrains+Mono:wght@400;500&display=swap";

export const metadata: Metadata = {
  title: "Second Draft — production fixes for AI-built apps",
  description:
    "Your Lovable, Bolt, Replit or Cursor app works in the demo, then wobbles with real users. We fix the security holes, messy code and fragile deployments so you can launch for real.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Marks JS as available before paint so scroll-reveal content starts hidden only when it can be revealed. */}
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link rel="stylesheet" href={fontsHref} />
      </head>
      <body>{children}</body>
    </html>
  );
}
