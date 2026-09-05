import Image from "next/image";
import { ArrowMark, SiteFooter, SiteHeader } from "./components/SiteChrome";
import OpenChallenge from "./components/OpenChallenge";
import Counter from "./components/Counter";
import ChapterNav from "./components/ChapterNav";
import ChallengeModal from "./components/ChallengeModal";
import Cursor from "./components/Cursor";
import { CHALLENGE_DATES } from "./config";

const chapters = [
  { id: "top", label: "Open" },
  { id: "challenge", label: "Challenge" },
  { id: "doors", label: "Doors" },
  { id: "vanta", label: "Program" },
  { id: "calendar", label: "Calendar" },
  { id: "masterminds", label: "Masterminds" },
  { id: "19keys", label: "19Keys" },
];

const spec = [
  ["Dates", `${CHALLENGE_DATES.week1} · ${CHALLENGE_DATES.week2}`],
  ["Pace", "~3 hrs a day · yours"],
  ["Live", `${CHALLENGE_DATES.live} · daily with 19Keys`],
  ["Format", "Masterclasses · courses · challenges · recorded"],
  ["Entry", "An idea · a phone · an AI account"],
  ["Price", "$99 both weeks · $55 one"],
];

const outcomes = [
  ["01", "Your story, locked", "The positioning and the words that make people stop, follow, and buy."],
  ["02", "Your personal dossier", "The world bible every piece of content, every offer, and every pitch is built from."],
  ["03", "Your content machine", "Clipping, distribution, and a cadence that publishes while you sleep."],
  ["04", "Your first AI agents", "Built live in the room. Running inside your business the same day."],
  ["05", "Ten module booklets", "Every framework, yours to keep and run again."],
  ["06", "19Keys, every day", "Thirty minutes live at 4:44pm PST. Ten sessions. Ask him anything."],
  ["07", "High Level University", "One month inside Ziion, free, the day you finish."],
  ["08", "Your own nation", "The right to launch your community on Ziion — marketed and supported by us."],
  ["09", "A seat at the table", "Standouts are invited into the Creator Growth Program."],
];

const weeks = [
  ["Week 1", CHALLENGE_DATES.week1, "Mindset & Positioning", "Story. Communication. Positioning. A new module every day. You leave with your personal dossier."],
  ["Week 2", CHALLENGE_DATES.week2, "AI & Systems", "Content systems. AI agents. Frameworks you run the same day. Every module ships with a booklet."],
];

const gates = [
  ["Gate 1", "Finish Week 1", "Your personal dossier — the world bible everything after is built on."],
  ["Gate 2", "Finish Week 2", "Module booklets and working systems installed in your business."],
  ["Gate 3", "Finish everything", "One month of High Level University inside Ziion, free. The right to apply to launch your own community — marketed by us, backed by our support infrastructure."],
  ["The standouts", "Do the work. Get noticed.", "Select graduates who stand out are invited into the Creator Growth Program."],
];

const calendar: [string, string, string, string, string][] = [
  ["Sep", "2026", "Atlanta · New York", "Peace on the Pond Mastermind. New York media run.", "In motion"],
  ["Oct", "2026", "London · Netherlands", "Black History Month. Masterminds and speaking.", "In motion"],
  ["Nov", "2026", "Los Angeles", "The Factory. Media day and the address. Mastermind.", "In motion"],
  ["Dec", "2026", "Atlanta", "Peace on the Pond Mastermind.", "Mastermind"],
  ["Jan", "2027", "Ethiopia", "Eleven days with Chaka Bars. Jan 5–15. In-trip mastermind.", "Set"],
  ["Feb", "2027", "Los Angeles · Arizona", "Wellness retreat. The real-estate stage. Mastermind.", "Retreat"],
  ["Mar", "2027", "Houston", "Godbody Weekend Mastermind.", "Mastermind"],
  ["Apr", "2027", "Atlanta", "Peace on the Pond Mastermind.", "Mastermind"],
  ["May", "2027", "Los Angeles", "Flagship gathering. Mastermind.", "Flagship"],
  ["Jun", "2027", "Atlanta", "Peace on the Pond Mastermind.", "Mastermind"],
  ["Jul", "2027", "Toronto", "Creator Growth Mastermind.", "Mastermind"],
  ["Aug", "2027", "Atlanta", "InvestFest week. Peace on the Pond Mastermind.", "Annual"],
  ["Sep", "2027", "Atlanta", "Peace on the Pond Mastermind.", "Mastermind"],
  ["Oct", "2027", "London", "Black History Month. Masterminds and speaking.", "Mastermind"],
  ["Nov", "2027", "Los Angeles", "Creator Growth Mastermind.", "Mastermind"],
  ["Dec", "2027", "Atlanta", "Peace on the Pond Mastermind.", "Mastermind"],
];

export default function Home() {
  return (
    <main>
      <Cursor />
      <ChallengeModal autoOpen />
      <ChapterNav chapters={chapters} />

      <div className="intro-gate" aria-hidden="true">
        <div className="intro-panel intro-panel-left" />
        <div className="intro-panel intro-panel-right" />
        <div className="intro-gate-content">
          <Image className="intro-key" src="/media/key-logo.png" alt="" width={480} height={600} priority />
          <span>19KEYS × HIGH LVL</span>
          <strong><i>Creator</i><i>Growth</i></strong>
        </div>
        <div className="intro-progress" />
      </div>

      <SiteHeader variant="home" />

      <section className="hero" id="top" aria-labelledby="hero-title">
        <Image className="hero-image" src="/media/hero-keys.jpg" alt="19Keys portrait" width={1600} height={2000} priority sizes="(max-width: 900px) 100vw, 62vw" />
        <div className="hero-shade" />
        <div className="hero-grid" aria-hidden="true" />
        <div className="hero-content">
          <p className="eyebrow hero-eyebrow">The Creator Growth Challenge · {CHALLENGE_DATES.week1} · {CHALLENGE_DATES.week2}</p>
          <h1 id="hero-title"><span className="hero-title-main">Creator</span><span className="hero-title-signal" data-text="Growth.">Growth.</span></h1>
          <p className="hero-copy">From a culture of consumers to a culture of creators. Two weeks to get you fully set up — with 19Keys live every day.</p>
          <div className="hero-actions">
            <OpenChallenge className="button button-light">Reserve my seat · $99 <ArrowMark /></OpenChallenge>
            <a className="text-link" href="/program">The Creator Growth Program <span aria-hidden="true">&#8599;</span></a>
          </div>
        </div>
        <div className="hero-status">
          <span><b>2 weeks</b> fully recorded</span>
          <span><b>4:44pm</b> PST daily live</span>
          <span><b>$99</b> both weeks</span>
        </div>
      </section>

      <div className="marquee" aria-label="Program outcomes">
        <div className="marquee-track">
          <div className="marquee-group">
            <span>Consumers become creators</span><i>/</i><span>Creators become businesses</span><i>/</i><span>Businesses become institutions</span><i>/</i>
            <span>Consumers become creators</span><i>/</i><span>Creators become businesses</span><i>/</i><span>Businesses become institutions</span><i>/</i>
          </div>
          <div className="marquee-group" aria-hidden="true">
            <span>Consumers become creators</span><i>/</i><span>Creators become businesses</span><i>/</i><span>Businesses become institutions</span><i>/</i>
            <span>Consumers become creators</span><i>/</i><span>Creators become businesses</span><i>/</i><span>Businesses become institutions</span><i>/</i>
          </div>
        </div>
      </div>

      <section className="sec sec-bone section-pad" id="challenge" aria-labelledby="challenge-title">
        <div className="sec-head reveal">
          <p className="eyebrow">01 · The Challenge</p>
          <h2 id="challenge-title" className="h-display">Two weeks.<br />Fully set up.</h2>
        </div>

        <p className="challenge-lead reveal">Two weeks that turn a consumer into a creator. Ten days of masterclasses, courses, and daily challenges — with 19Keys live every afternoon — that install the story, the systems, and the standard a creator-led business runs on. You arrive with an idea and a phone. You leave fully set up.</p>

        <dl className="spec-strip reveal">
          {spec.map(([k, v]) => (<div key={k}><dt>{k}</dt><dd>{v}</dd></div>))}
        </dl>

        <div className="week-grid">
          {weeks.map(([tag, dates, title, copy]) => (
            <article className="week-card reveal" key={tag}>
              <div className="week-top"><span>{tag}</span><em>{dates}</em></div>
              <h3 className="h-mid">{title}</h3>
              <p className="copy">{copy}</p>
            </article>
          ))}
        </div>

        <div className="outcomes reveal">
          <div className="outcomes-head">
            <p className="eyebrow">What you get</p>
            <h3 className="h-display outcomes-title">You walk in a consumer.<br />You walk out a creator.</h3>
          </div>
          <ol className="outcomes-list">
            {outcomes.map(([n, t, c]) => (
              <li key={n}><i>{n}</i><b>{t}</b><p>{c}</p></li>
            ))}
          </ol>
        </div>

        <div className="gates reveal">
          <div className="gates-head">
            <p className="eyebrow">Complete to unlock</p>
            <p className="gates-rule">Every module you finish opens the next door. The door stays shut until you do.</p>
          </div>
          <ol className="gates-list">
            {gates.map(([n, t, c]) => (
              <li key={n}><i>{n}</i><b>{t}</b><p>{c}</p></li>
            ))}
          </ol>
        </div>

        <div className="price-band reveal">
          <div className="price-band-left">
            <p className="eyebrow">Both weeks</p>
            <b className="price-big">$99</b>
            <small>or $55 for one week</small>
          </div>
          <div className="price-band-mid">
            <div className="stat-inline"><b><Counter to={10000} /></b><span>creators, the mission</span></div>
            <div className="stat-inline"><b><Counter to={6} /></b><span>months</span></div>
            <div className="stat-inline"><b>2</b><span>weeks to set up</span></div>
          </div>
          <div className="price-band-cta">
            <OpenChallenge className="button button-gold">Reserve my seat <ArrowMark /></OpenChallenge>
            <small>Founding cohort · Registration closes when Day 1 begins</small>
          </div>
        </div>
      </section>

      <section className="sec sec-dark section-pad" id="doors" aria-labelledby="doors-title">
        <div className="sec-head reveal">
          <p className="eyebrow">Two doors</p>
          <h2 id="doors-title" className="h-display">Start here.<br />Ascend there.</h2>
        </div>
        <div className="doors reveal">
          <a className="door glass door-challenge" href="#challenge">
            <i>01</i>
            <b>$99</b>
            <strong>The Creator Growth Challenge</strong>
            <span>Two weeks. Fully set up. Pass it, and the doors open — High Level University inside Ziion, your own community, and a look from the Program.</span>
            <em>Reserve a seat <span aria-hidden="true">&#8599;</span></em>
          </a>
          <a className="door glass door-vanta" href="/program">
            <i>02</i>
            <b>$19,000</b>
            <strong>The Creator Growth Program</strong>
            <span>We do business together. Twelve months on the services, the stages, and the masterminds the High Lvl ecosystem runs — with a seat in our Vanta Black circle as we travel the world.</span>
            <em>Enter the Program <span aria-hidden="true">&#8599;</span></em>
          </a>
        </div>
      </section>

      <section className="sec sec-vanta section-pad" id="vanta" aria-labelledby="vanta-title">
        <div className="vanta-layout">
          <div className="vanta-copy reveal">
            <p className="eyebrow">02 · The Creator Growth Program</p>
            <h2 id="vanta-title" className="h-display">We do business<br />together.</h2>
            <p className="vanta-mark">Vanta Black circle</p>
            <p className="vanta-lead">The Program is something else entirely. Twelve months partnering with 19Keys and the High Lvl team — placed on the services we run, seated at every mastermind on the calendar, and inside our Vanta Black circle as we travel the world for the experiences the top one percent build their years around.</p>
            <div className="vanta-stats">
              <div><b>$19,000</b><span>one token, allocated a la carte</span></div>
              <div><b>12</b><span>months</span></div>
              <div><b>4</b><span>events, your pick</span></div>
            </div>
            <a className="button button-light" href="/program">Enter the Program <ArrowMark /></a>
          </div>
          <figure className="vanta-image reveal">
            <Image src="/media/gold-room.jpg" alt="19Keys seated behind reflective gold objects" width={1245} height={1600} sizes="(max-width: 900px) 100vw, 45vw" />
          </figure>
        </div>
      </section>

      <section className="sec sec-dark section-pad" id="calendar" aria-labelledby="calendar-title">
        <div className="sec-head reveal">
          <p className="eyebrow">03 · The calendar</p>
          <h2 id="calendar-title" className="h-display">One High Lvl creator event.<br />Every month.</h2>
          <p className="sec-sub">Exclusive access for Creator Growth Program members. Every event is paired with a Creator Growth Mastermind. <a href="/program">Enter the Program <span aria-hidden="true">&#8599;</span></a></p>
        </div>
        <div className="month-grid">
          {calendar.map(([month, year, place, copy, tag]) => (
            <article className={`month-card glass reveal tag-${tag.toLowerCase().replace(/\s+/g, "-")}`} key={month + year}>
              <div className="month-top"><b>{month}</b><span>{year}</span></div>
              <h3>{place}</h3>
              <p>{copy}</p>
              <em>{tag}</em>
            </article>
          ))}
        </div>
        <p className="foot-note reveal">Members choose up to four. Travel is theirs. <em>Itinerary subject to change.</em></p>
      </section>

      <section className="sec sec-dark sec-masterminds section-pad" id="masterminds" aria-labelledby="mm-title">
        <div className="sec-head reveal">
          <p className="eyebrow">04 · The masterminds</p>
          <h2 id="mm-title" className="h-display">Get in the room.<br />Join the network.</h2>
          <p className="sec-sub">Program members sit in every Creator Growth Mastermind on the calendar — private working rooms led by 19Keys in Atlanta, Houston, Los Angeles, London, Toronto, and beyond. Twenty seats. Your business goes on the table and the room works it live. Then the network — the creators, founders, and operators at that table — stays with you all year.</p>
        </div>
        <div className="mm-layout mm-layout-single">
          <div className="gallery-grid mm-gallery">
            <figure className="reveal"><Image src="/media/conversation.jpg" alt="19Keys speaking onstage with a guest" width={1800} height={1200} sizes="(max-width: 900px) 100vw, 45vw" /><figcaption>Session I</figcaption></figure>
            <figure className="reveal"><Image src="/media/network.jpg" alt="19Keys with entrepreneurs and creators" width={1800} height={1357} sizes="(max-width: 760px) 100vw, 45vw" /><figcaption>The room</figcaption></figure>
            <figure className="reveal"><Image src="/media/partner.jpg" alt="19Keys with a creative industry leader" width={1800} height={1199} sizes="(max-width: 760px) 100vw, 45vw" /><figcaption>The network</figcaption></figure>
            <figure className="reveal"><Image src="/media/event.jpg" alt="19Keys at a live community event" width={1800} height={1198} sizes="(max-width: 900px) 100vw, 45vw" /><figcaption>The fire</figcaption></figure>
          </div>
        </div>
        <div className="mm-cta reveal">
          <p>The collective masterminds and the network behind them are reserved for Creator Growth Program members.</p>
          <a className="button button-light" href="/program">Enter the Program <ArrowMark /></a>
        </div>
      </section>

      <section className="authority" id="19keys">
        <div className="authority-photo">
          <Image src="/media/stage.jpg" alt="19Keys standing on the High Level Conversations stage" width={1440} height={1800} sizes="(max-width: 900px) 100vw, 45vw" />
        </div>
        <div className="authority-copy">
          <p className="eyebrow">05 · Curated by 19Keys</p>
          <h2>Built independently. Scaled culturally.</h2>
          <p className="lead-serif">Original ideas. Long-form conversations. Live rooms. A community that trusts the signal.</p>
          <p className="authority-line">Host of High Level Conversations. A leading voice across finance, technology, and culture. He knows the public platform and the private machinery behind it — because he built both.</p>
          <div className="proof-grid">
            <div><b>Nearly 1M</b><span>Instagram audience</span></div>
            <div><b>30,000+</b><span>creators inside Ziion</span></div>
            <div><b>300M+</b><span>views, High Level Conversations</span></div>
            <div><b>17 cities</b><span>worldwide</span></div>
          </div>
        </div>
      </section>

      <section className="final-cta">
        <Image src="/media/marquee.jpg" alt="The Gramercy Theatre marquee reading 19Keys sold out" width={1800} height={1200} sizes="100vw" />
        <div className="final-cta-shade" />
        <div className="final-cta-content">
          <p className="eyebrow">19Keys · Gramercy Theatre · Sold Out</p>
          <h2>Build what your vision deserves.</h2>
          <p className="final-cta-subcopy">Consumer. Creator. Institution.</p>
          <div className="hero-actions">
            <OpenChallenge className="button button-light">Reserve my seat <ArrowMark /></OpenChallenge>
            <a className="text-link" href="/program">The Creator Growth Program <span aria-hidden="true">&#8599;</span></a>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
