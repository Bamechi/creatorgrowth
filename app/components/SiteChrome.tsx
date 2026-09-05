import Image from "next/image";
import OpenChallenge from "./OpenChallenge";

export function ArrowMark() {
  return <span className="arrow-mark" aria-hidden="true">&#8599;</span>;
}

export function SiteHeader({ variant }: { variant: "home" | "program" }) {
  const home = variant === "home";
  return (
    <header className="site-header">
      <a className="brand-lockup" href={home ? "#top" : "/"} aria-label="Creator Growth home">
        <Image src="/media/key-logo.png" alt="19Keys key mark" width={480} height={600} priority />
        <span>19KEYS <b>×</b> HIGH LVL</span>
      </a>

      <nav className="desktop-nav index-nav" aria-label="Primary navigation">
        {home ? (
          <>
            <a href="#challenge"><i>01</i>Challenge</a>
            <a href="#calendar"><i>02</i>Calendar</a>
            <a href="#19keys"><i>03</i>19Keys</a>
            <a href="/program" className="nav-program">The Program <ArrowMark /></a>
          </>
        ) : (
          <>
            <a href="#build"><i>01</i>Build</a>
            <a href="#process"><i>02</i>Process</a>
            <a href="#discovery"><i>03</i>Discovery</a>
            <a href="/" className="nav-program">The Challenge <ArrowMark /></a>
          </>
        )}
      </nav>

      {home ? (
        <OpenChallenge className="header-cta">Join the Challenge <ArrowMark /></OpenChallenge>
      ) : (
        <a className="header-cta" href="#apply">Apply <ArrowMark /></a>
      )}

      <details className="mobile-nav">
        <summary aria-label="Open navigation">Menu</summary>
        <div>
          {home ? (
            <>
              <a href="#challenge">Challenge</a>
              <a href="#calendar">Calendar</a>
              <a href="#19keys">19Keys</a>
              <a href="/program">The Program</a>
            </>
          ) : (
            <>
              <a href="#build">Build</a>
              <a href="#process">Process</a>
              <a href="#discovery">Discovery</a>
              <a href="#apply">Apply</a>
              <a href="/">The Challenge</a>
            </>
          )}
        </div>
      </details>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer>
      <div className="footer-brand"><Image src="/media/key-logo.png" alt="" width={480} height={600} /><span>Creator Growth</span></div>
      <p>19KEYS × HIGH LVL</p>
      <div><a href="/#challenge">Challenge</a><a href="/program">The Program</a><a href="/#calendar">Calendar</a><a href="/program#apply">Apply</a></div>
      <small>From a culture of consumers to a culture of creators. Results depend on execution; outcomes vary.</small>
    </footer>
  );
}
