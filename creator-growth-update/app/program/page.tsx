import type { Metadata } from "next";
import Image from "next/image";
import { ArrowMark, SiteFooter, SiteHeader } from "../components/SiteChrome";
import PackageBuilder from "../components/PackageBuilder";
import ChapterNav from "../components/ChapterNav";
import ChallengeModal from "../components/ChallengeModal";
import Cursor from "../components/Cursor";
import ApplyForm from "../ApplyForm";

export const metadata: Metadata = {
  title: "The Creator Growth Program | Vanta Black circle | 19Keys x High Lvl",
  description: "We do business together. Twelve months partnering with 19Keys and the High Lvl team — services, stages, masterminds, and a seat in the Vanta Black circle as we travel the world. $19,000, allocated a la carte.",
};

const chapters = [
  { id: "top", label: "Open" },
  { id: "paths", label: "Paths" },
  { id: "program", label: "Capabilities" },
  { id: "build", label: "Build" },
  { id: "process", label: "Process" },
  { id: "discovery", label: "Discovery" },
  { id: "apply", label: "Apply" },
];

const capabilities = [
  ["01", "Narrative", "Position the idea so the market understands why it matters."],
  ["02", "Media", "A content engine — and your own podcast, produced alongside the 19Keys media team."],
  ["03", "Distribution", "Place the signal across the right platforms, rooms, and audiences."],
  ["04", "Management", "The operators, rhythm, and accountability behind the brand."],
  ["05", "AI Systems", "Custom AI agents — voice, content, operations — built for your business."],
  ["06", "Community", "Your own community and membership platform inside Ziion."],
  ["07", "Access", "Proximity to aligned creators, operators, and opportunities."],
  ["08", "19Keys", "Direct strategic perspective at the moments with highest leverage."],
];

const journey = [
  ["01", "Deep-Dive Research", "We study your brand, audience, offers, reach, and leverage before the first conversation."],
  ["02", "Paid Discovery", "Filmed or private, virtual or in Los Angeles. We surface the real objective."],
  ["03", "Your Growth Map", "Your goals mapped against the full ecosystem. A plan built around your constraints."],
  ["04", "Partnership Design", "Scope, capabilities, success measures, and the operators around you."],
  ["05", "Strategic Activation", "The work begins. 19Keys enters where his perspective creates the greatest leverage."],
  ["06", "Build. Grow. Review.", "Execute, measure, refine, compound."],
];

const inclusions = [
  "Direct access to 19Keys at the moments of highest leverage",
  "A private partner mastermind series",
  "VIP access to speaking engagements and live rooms",
  "Up to four events from the twelve-month calendar — travel separate",
  "Ethiopia inner-circle trip, offered at cost",
  "A listed leadership profile in the ecosystem",
  "Your own private partner room",
];

const faqs = [
  ["What does the $19,000 include?", "The $19,000 is a token you allocate across access to 19Keys, up to four calendar events, systems, management, and media using the builder above. Every partnership also includes the mastermind series, the Ethiopia trip at cost, and your private room. Travel and lodging are separate and vary by event."],
  ["Who is the Program built for?", "Established creators, founders, and culture-builders with a proven offer, meaningful traction, and the capacity to invest at least $19,000 to do business with us for a year."],
  ["Will I work directly with 19Keys?", "Yes, at the moments where it creates the most leverage. Consultations are filmed and in person; appearances are allocated from your token."],
  ["Can I join from outside Los Angeles?", "Yes. Discovery is virtual worldwide or in person in LA. Events run on the calendar and the team meets partners where the travel schedule lands."],
  ["Why is there a paid discovery?", "Pre-call research, a focused strategy conversation, and a first-look Growth Map. The fee protects the depth of the process and the quality of the room."],
  ["Is financing available?", "Yes. Qualified partners can finance the partnership. We walk through the options in discovery."],
  ["Should I do the Challenge first?", "Each stands alone. The Challenge is where a creator gets set up. The Program is for a creator ready to do business with us now. Standout Challenge graduates are invited in."],
];

export default function ProgramPage() {
  return (
    <main>
      <Cursor />
      <ChallengeModal autoOpen={false} />
      <ChapterNav chapters={chapters} />
      <SiteHeader variant="program" />

      <section className="hero hero-program" id="top" aria-labelledby="hero-title">
        <Image className="hero-image" src="/media/suit-portrait.jpg" alt="19Keys portrait" width={1600} height={2000} priority sizes="(max-width: 900px) 100vw, 62vw" />
        <div className="hero-shade" />
        <div className="hero-grid" aria-hidden="true" />
        <div className="hero-content">
          <p className="eyebrow hero-eyebrow">The Creator Growth Program · Vanta Black circle · By application</p>
          <h1 id="hero-title"><span className="hero-title-main">The</span><span className="hero-title-signal" data-text="Program.">Program.</span></h1>
          <p className="hero-copy">We do business together. Twelve months partnering with 19Keys and the High Lvl team — placed on the services we run, seated at every mastermind, inside our Vanta Black circle as we travel the world. $19,000, allocated a la carte.</p>
          <div className="hero-actions">
            <a className="button button-light" href="#build">Build your partnership <ArrowMark /></a>
            <a className="text-link" href="#discovery">Book discovery <span aria-hidden="true">&#8595;</span></a>
          </div>
        </div>
        <div className="hero-status">
          <span><b>$19K</b> one token</span>
          <span><b>12</b> months</span>
          <span><b>Limited</b> Vanta Black seats</span>
        </div>
      </section>

      <section className="sec sec-dark section-pad" id="paths" aria-label="Two paths">
        <div className="sec-head reveal">
          <p className="eyebrow">01 · Two paths</p>
        </div>
        <div className="two-paths-grid reveal">
          <article className="glass">
            <span>Alone</span>
            <h3 className="h-display">Five years.</h3>
            <p className="copy">The show, the audience, the brand, the system — one hire and one expensive mistake at a time.</p>
          </article>
          <article className="glass is-with">
            <span>With us</span>
            <h3 className="h-display">Twelve months.</h3>
            <p className="copy">19Keys and the whole ecosystem coordinated around you, on a calendar already moving.</p>
          </article>
        </div>
      </section>

      <section className="program section-pad" id="program">
        <div className="section-intro reveal">
          <p className="eyebrow">02 · Eight capabilities</p>
          <h2>One partnership.<br />Eight capabilities.</h2>
          <p>Everything the High Lvl ecosystem can put behind you. Your Growth Map selects from it.</p>
        </div>
        <div className="capability-list">
          {capabilities.map(([n, t, c]) => (
            <article className="capability-row reveal" key={n}><span>{n}</span><h3>{t}</h3><p>{c}</p></article>
          ))}
        </div>
      </section>

      <section className="sec sec-build section-pad" id="build" aria-labelledby="build-title">
        <div className="sec-head reveal">
          <p className="eyebrow">03 · Build your partnership</p>
          <h2 id="build-title" className="h-display">Your $19,000<br />is a token.</h2>
        </div>
        <div className="anchor-row reveal">
          <div><b>$25,000</b><span>public rate, one keynote</span></div>
          <div className="is-gold"><b>$19,000</b><span>the entire Program</span></div>
          <div><b>4</b><span>events, your pick</span></div>
        </div>
        <PackageBuilder />
      </section>

      <section className="process section-pad" id="process">
        <div className="process-heading reveal">
          <p className="eyebrow">04 · How placement works</p>
          <h2>We arrive informed. Then we build around you.</h2>
        </div>
        <div className="journey-list">
          {journey.map(([n, t, c]) => (
            <article className="journey-step reveal" key={n}><span>{n}</span><h3>{t}</h3><p>{c}</p></article>
          ))}
        </div>
      </section>

      <section className="investment" id="discovery">
        <div className="investment-head section-pad reveal">
          <p className="eyebrow">05 · The standard</p>
          <h2>Partnerships begin at $19,000.</h2>
          <p>The first step is a paid discovery designed to produce value before a partnership is offered. <strong>Your discovery payment is credited toward your $19,000 package once you lock in your services.</strong></p>
        </div>
        <div className="inclusions section-pad reveal">
          <p className="eyebrow">What every partnership includes</p>
          <ul className="inclusions-list">{inclusions.map((i) => <li key={i}>{i}</li>)}</ul>
        </div>
        <div className="discovery-options section-pad">
          <article className="discovery-option reveal">
            <div className="option-top"><span>Option 01</span><b>$333</b></div>
            <h3>Filmed Discovery</h3>
            <p>Virtual from anywhere, or in Los Angeles. A filmed strategy session built around your next level.</p>
            <ul><li>Pre-session brand deep dive</li><li>Virtual worldwide or in-person in LA</li><li>One-hour strategy session</li><li>Filmed for the content ecosystem</li><li>Growth Map preview</li></ul>
            <a className="button button-dark" href="#apply">Request filmed session <ArrowMark /></a>
          </article>
          <article className="discovery-option discovery-private reveal">
            <div className="option-top"><span>Option 02</span><b>$555</b></div>
            <h3>Private Discovery</h3>
            <p>Private, virtual or in Los Angeles. The work stays between us.</p>
            <ul><li>Pre-session brand deep dive</li><li>Private virtual or LA session</li><li>One-hour strategy session</li><li>No recording or content use</li><li>Growth Map preview</li></ul>
            <a className="button button-light" href="#apply">Request private session <ArrowMark /></a>
          </article>
        </div>
        <p className="investment-note section-pad reveal">Your discovery fee is credited toward the $19,000 once services are locked in. Growth partnerships can be financed — ask in your discovery session.</p>
      </section>

      <section className="apply-section section-pad" id="apply">
        <div className="apply-intro reveal">
          <p className="eyebrow">06 · Application for placement</p>
          <h2>Show us what you are building.</h2>
          <p>A limited number of active partners. Reviewed for clarity of vision, traction, execution readiness, and fit.</p>
          <div className="fit-check">
            <span>Good fit</span>
            <ul><li>Established business or platform</li><li>Clear point of view and ambition</li><li>Ready for coordinated execution</li><li>$19K+ growth investment capacity</li></ul>
          </div>
        </div>
        <ApplyForm />
      </section>

      <section className="faq section-pad">
        <div className="faq-heading reveal">
          <p className="eyebrow">Before you apply</p>
          <h2>Clear standards.<br />No hidden doors.</h2>
        </div>
        <div className="faq-list">
          {faqs.map(([q, a], i) => (
            <details className="reveal" key={q} open={i === 0}><summary>{q}<span aria-hidden="true">+</span></summary><p>{a}</p></details>
          ))}
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
