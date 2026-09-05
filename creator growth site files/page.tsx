import Image from "next/image";
import ApplyForm from "./ApplyForm";
import ChallengeSignup from "./ChallengeSignup";
import PackageBuilder from "./PackageBuilder";

const missionStats = [
  ["10,000", "creators in six months"],
  ["2 weeks", "the Challenge, fully recorded"],
  ["$99", "both weeks of the Challenge"],
  ["$19K", "the annual Program"],
];

const standard = [
  ["01", "A flagship show", "Media that carries your voice, on a schedule the culture can count on."],
  ["02", "An owned audience", "Email, text, and a community that belongs to you, wherever the algorithm goes."],
  ["03", "A brand", "Identity, trust, and a visual world people recognize before they read a word."],
  ["04", "A content system", "Clipping, distribution, and a cadence that runs whether you are in the room or on a plane."],
];

const ladder = [
  ["Free", "Content", "High Level Conversations, the socials, the Keyism book.", "https://19keys.com/hlc"],
  ["$99", "The Challenge", "Two weeks. Leave fully set up.", "#challenge"],
  ["$44/mo", "Ziion", "High Level University. Your owned audience, in one place.", "https://ziion.io/nations/high-lvl-nation"],
  ["$555", "Creator Day", "One filmed mastermind. Twenty seats.", "#calendar"],
  ["$19K", "The Program", "The inner circle. 19Keys as consultant and amplifier.", "#build"],
];

const weeks = [
  ["Week 1", "Mindset & Positioning", "Story, communication, positioning. A new module every day. You leave with your personal dossier — the world bible everything that follows is built on."],
  ["Week 2", "AI & Systems", "Content systems, AI agents, technical frameworks. Pure implementation you use the same day. Every module ships with a booklet."],
];

const challengeStack = [
  "Ten live modules, fully recorded",
  "A booklet for every Week 2 session",
  "Your personal dossier, built in Week 1",
  "One month of High Level University on Ziion",
  "Six sessions inside the AI creator program",
  "Priority application to the Creator Growth Program",
];

const capabilities = [
  ["01", "Narrative", "Position the idea so the market understands why it matters."],
  ["02", "Media", "Build a content engine that turns vision into consistent cultural signal — and launch and produce your own podcast alongside the 19Keys media team."],
  ["03", "Distribution", "Place the signal across the right platforms, rooms, and audiences."],
  ["04", "Management", "Install the operators, rhythm, and accountability behind the brand."],
  ["05", "AI Systems", "Move faster with your own custom AI agents — voice bots, content engines, and operations automations built for your business."],
  ["06", "Community", "Convert attention into an owned audience — launch your own community and membership platform inside Ziion: your content home and monetization engine."],
  ["07", "Access", "Create proximity to aligned creators, operators, and opportunities."],
  ["08", "19Keys", "Apply direct strategic perspective at the moments with highest leverage."],
];

const journey = [
  ["01", "Deep-Dive Research", "We study your brand, audience, offers, reach, risks, and untapped leverage before the first conversation."],
  ["02", "Paid Discovery", "Choose a filmed session virtually or in Los Angeles, or keep the conversation fully private. We surface the real objective beneath the obvious one."],
  ["03", "Your Growth Map", "Your goals are mapped against the full High Lvl ecosystem. The result is a precise plan built around your actual constraints."],
  ["04", "Partnership Design", "We set the scope, select the right capabilities, establish success measures, and place the right operators around you."],
  ["05", "Strategic Activation", "The work begins. 19Keys enters where his perspective, platform, or relationships create the greatest leverage."],
  ["06", "Build. Grow. Review.", "We execute, measure, refine, and compound what works. Your brand becomes an operating system."],
];

const calendar: [string, string, string, string, string][] = [
  ["Sep", "2026", "New York", "A media run across the top podcasts.", "In motion"],
  ["Oct", "2026", "London · Netherlands", "Black History Month in the UK. European masterminds and speaking engagements.", "In motion"],
  ["Nov", "2026", "Los Angeles", "The Factory. Media day and the Black Media Summit address.", "In motion"],
  ["Dec", "2026", "Atlanta", "Creator Day at Peace on the Pond.", "Creator Day"],
  ["Jan", "2027", "Ethiopia", "Eleven days, Jan 5–15, with Chaka Bars. A private in-trip mastermind.", "Set"],
  ["Feb", "2027", "Los Angeles · Arizona", "Factory wellness retreat and the national real-estate stage.", "Retreat"],
  ["Mar", "2027", "Partner venue", "Creator Day. Twenty seats, filmed.", "Creator Day"],
  ["Apr", "2027", "Partner venue", "Creator Day. Twenty seats, filmed.", "Creator Day"],
  ["May", "2027", "Los Angeles", "Flagship gathering.", "Flagship"],
  ["Jun", "2027", "Partner venue", "Creator Day. Twenty seats, filmed.", "Creator Day"],
  ["Jul", "2027", "Partner venue", "Creator Day. Twenty seats, filmed.", "Creator Day"],
  ["Aug", "2027", "Atlanta", "InvestFest week. Estate residency, keynote, mastermind.", "Annual"],
];

const inclusions = [
  "Direct access to 19Keys at the moments of highest leverage",
  "A private partner mastermind series",
  "VIP access to speaking engagements and live rooms",
  "Access to 2 Creator Growth events",
  "Cost-only access to inner-circle trips",
  "A listed leadership profile in the ecosystem",
  "Your own private partner room",
];

const faqs = [
  ["What is the Creator Growth Challenge?", "A two-week, fully recorded intensive — three hours a day, five days a week. Week one is mindset and positioning. Week two is AI and systems. $99 for both weeks, $55 for one. October 2026 is the founding cohort."],
  ["Do I need the Challenge before the Program?", "Each stands on its own. The Challenge is the fastest way in for a creator getting set up. The Program is for a creator ready to invest $19,000 and move with the ecosystem now. Many will do both."],
  ["What does the $19,000 include?", "The $19,000 is a token you allocate across access to 19Keys, events, systems, and media using the builder above. Every partnership also includes the mastermind series, two Creator Growth events, inner-circle trips at cost, and your private room. Travel and lodging are separate."],
  ["Who is the Program built for?", "Established creators, founders, and culture-builders with a proven offer, meaningful traction, and the capacity to invest at least $19,000 in growth."],
  ["Will I work directly with 19Keys?", "Yes, at the moments where it creates the most leverage. Consultations are filmed and in person; features and appearances are allocated from your token. His direct involvement is placed, and it is real."],
  ["Can I join from outside Los Angeles?", "Yes. The Challenge is fully virtual. Discovery is available virtually worldwide or in person in LA. Events run on the calendar above, and the team meets partners where the travel schedule lands."],
  ["Why is there a paid discovery?", "The session includes pre-call research, a focused strategy conversation, and a first-look Growth Map. The fee protects the depth of the process and the quality of the room."],
  ["Is financing available?", "Yes. Qualified partners can finance their growth partnership. We walk through the options during your discovery session so the build can begin without paying the full amount up front."],
];

function ArrowMark() {
  return <span className="arrow-mark" aria-hidden="true">&#8599;</span>;
}

export default function Home() {
  return (
    <main>
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

      <header className="site-header">
        <a className="brand-lockup" href="#top" aria-label="Creator Growth home">
          <Image src="/media/key-logo.png" alt="19Keys key mark" width={480} height={600} priority />
          <span>19KEYS <b>×</b> HIGH LVL</span>
        </a>

        <nav className="desktop-nav index-nav" aria-label="Primary navigation">
          <a href="#challenge"><i>01</i>Challenge</a>
          <a href="#build"><i>02</i>Program</a>
          <a href="#calendar"><i>03</i>Calendar</a>
          <a href="#apply"><i>04</i>Apply</a>
        </nav>

        <a className="header-cta" href="#challenge">Join the Challenge <ArrowMark /></a>

        <details className="mobile-nav">
          <summary aria-label="Open navigation">Menu</summary>
          <div>
            <a href="#challenge">Challenge</a>
            <a href="#build">Program</a>
            <a href="#calendar">Calendar</a>
            <a href="#discovery">Discovery</a>
            <a href="#apply">Apply</a>
          </div>
        </details>
      </header>

      <section className="hero" id="top" aria-labelledby="hero-title">
        <Image className="hero-image" src="/media/hero-keys.jpg" alt="19Keys portrait" width={1600} height={2000} priority sizes="(max-width: 900px) 100vw, 62vw" />
        <div className="hero-shade" />
        <div className="hero-grid" aria-hidden="true" />
        <div className="hero-content">
          <p className="eyebrow hero-eyebrow">The mission · 10,000 creators · Six months</p>
          <h1 id="hero-title"><span className="hero-title-main">Creator</span><span className="hero-title-signal" data-text="Growth.">Growth.</span></h1>
          <p className="hero-copy">Every day you post, you build a platform someone else owns. We are turning a culture of consumers into a culture of creators — and giving those creators the systems, rooms, and access to become businesses. Start with the two-week Challenge. Graduate into the Program.</p>
          <div className="hero-actions">
            <a className="button button-light" href="#challenge">Join the Challenge · $99 <ArrowMark /></a>
            <a className="text-link" href="#build">Build your $19K partnership <span aria-hidden="true">&#8595;</span></a>
          </div>
        </div>
        <div className="hero-status">
          <span><b>10,000</b> creators, the mission</span>
          <span><b>October</b> founding cohort</span>
          <span><b>$19K</b> the Program</span>
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

      <section className="mission section-pad" id="mission" aria-labelledby="mission-title">
        <div className="mission-head reveal">
          <p className="eyebrow">00 · The mission</p>
          <h2 id="mission-title">Ten thousand creators.<br />Fully set up. Six months.</h2>
          <p className="lead-serif">A creator-led business has four things. Most creators are stuck inside the business with almost none of them. Creator Growth closes the gaps — with frameworks, resources, and a checklist that tells you when you are done.</p>
        </div>
        <div className="stat-row reveal">
          {missionStats.map(([value, label]) => (
            <div className="stat" key={label}><b>{value}</b><span>{label}</span></div>
          ))}
        </div>
        <div className="standard-grid">
          {standard.map(([number, title, copy]) => (
            <article className="standard-card reveal" key={number}>
              <span>{number}</span>
              <h3>{title}</h3>
              <p>{copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="manifesto section-pad reveal">
        <p className="eyebrow">The new category</p>
        <div className="manifesto-layout">
          <h2>The creator is the new entrepreneur.</h2>
          <div>
            <p className="lead-serif">Attention is an asset. Trust is infrastructure. Culture is distribution.</p>
            <p>The next generation of companies will be built by people who can move ideas, audiences, and capital at the same time. Creator Growth turns your personal gravity into an enterprise designed to compound.</p>
          </div>
        </div>
      </section>

      <section className="ladder section-pad" id="ladder" aria-labelledby="ladder-title">
        <div className="ladder-head reveal">
          <p className="eyebrow">The path</p>
          <h2 id="ladder-title">Small fish become big fish.</h2>
          <p>One ladder. Every rung points to the next. Enter where you are.</p>
        </div>
        <ol className="ladder-row reveal">
          {ladder.map(([price, name, copy, href]) => (
            <li key={name}>
              <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel={href.startsWith("http") ? "noreferrer" : undefined}>
                <b>{price}</b>
                <strong>{name}</strong>
                <span>{copy}</span>
              </a>
            </li>
          ))}
        </ol>
      </section>

      <section className="challenge" id="challenge" aria-labelledby="challenge-title">
        <div className="challenge-head section-pad reveal">
          <p className="eyebrow">01 · The Creator Growth Challenge · October 2026</p>
          <h2 id="challenge-title">Two weeks. Ten modules.<br />A creator who is fully set up.</h2>
          <p className="lead-serif">Three hours a day, five days a week, fully recorded. Week one builds who you are. Week two builds the machine.</p>
        </div>

        <div className="week-grid section-pad">
          {weeks.map(([tag, title, copy]) => (
            <article className="week-card reveal" key={tag}>
              <span>{tag}</span>
              <h3>{title}</h3>
              <p>{copy}</p>
            </article>
          ))}
        </div>

        <div className="challenge-body section-pad">
          <div className="challenge-stack reveal">
            <p className="eyebrow">What you leave with</p>
            <ul>
              {challengeStack.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p className="challenge-objection">Built for the creator with a small audience and a real ambition. You need an idea, a phone, and an AI account. Everything else is in the room.</p>
            <div className="challenge-price">
              <span>Both weeks</span>
              <b>$99</b>
              <small>or $55 for one week</small>
            </div>
          </div>
          <div className="challenge-signup reveal">
            <p className="eyebrow">Reserve your seat</p>
            <h3>The founding cohort opens in October.</h3>
            <ChallengeSignup />
          </div>
        </div>
      </section>

      <section className="tension" aria-label="The growth problem">
        <div className="tension-image-wrap">
          <Image src="/media/mindset-portrait.jpg" alt="19Keys looking directly into camera" width={1200} height={1500} sizes="(max-width: 900px) 100vw, 50vw" />
          <p>Mindset creates the vision.<br />Infrastructure carries it.</p>
        </div>
        <div className="tension-copy">
          <p className="eyebrow">Where growth stalls</p>
          <h2>Vision without infrastructure stays potential.</h2>
          <p>You have the business. You have the point of view. You may already have the audience. The constraint is the system behind the signal: the right message, production cadence, team, technology, distribution, and rooms.</p>
          <p className="pullquote">Your next level needs coordinated execution. That is what the Program is.</p>
        </div>
      </section>

      <section className="authority" id="19keys">
        <div className="authority-photo">
          <Image src="/media/stage.jpg" alt="19Keys standing on the High Level Conversations stage" width={1440} height={1800} sizes="(max-width: 900px) 100vw, 45vw" />
        </div>
        <div className="authority-copy">
          <p className="eyebrow">Curated by 19Keys</p>
          <h2>Built independently. Scaled culturally.</h2>
          <p className="lead-serif">19Keys built authority the hard way: through original ideas, long-form conversations, live rooms, products, and a community that trusts the signal.</p>
          <p>As host of High Level Conversations and a leading voice across financial literacy, technology, metaphysics, and culture, he understands both sides of modern influence: the public platform and the private machinery that sustains it.</p>
          <div className="proof-grid">
            <div><b>Nearly 1M</b><span>Instagram audience</span></div>
            <div><b>30,000+</b><span>creators inside Ziion</span></div>
            <div><b>300M+</b><span>views, High Level Conversations</span></div>
            <div><b>17 cities</b><span>worldwide</span></div>
          </div>
        </div>
      </section>

      <section className="program section-pad" id="program">
        <div className="section-intro reveal">
          <p className="eyebrow">02 · The Creator Growth Program · $19,000 annual</p>
          <h2>One partnership.<br />Eight capabilities.</h2>
          <p>Every partnership is assembled around the outcome. Below is everything the ecosystem can put behind you. Your Growth Map selects from it.</p>
        </div>

        <div className="capability-list">
          {capabilities.map(([number, title, copy]) => (
            <article className="capability-row reveal" key={number}>
              <span>{number}</span>
              <h3>{title}</h3>
              <p>{copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="two-paths section-pad reveal" aria-label="Two paths">
        <p className="eyebrow">Two paths</p>
        <div className="two-paths-grid">
          <article>
            <span>Alone</span>
            <h3>Five years.</h3>
            <p>The show, the audience, the brand, the system — one hire and one expensive mistake at a time.</p>
          </article>
          <article className="is-with">
            <span>With us</span>
            <h3>Twelve months.</h3>
            <p>19Keys and the whole ecosystem coordinated around you, on a calendar that is already moving.</p>
          </article>
        </div>
      </section>

      <section className="build section-pad" id="build" aria-labelledby="build-title">
        <div className="build-head reveal">
          <p className="eyebrow">Build your partnership</p>
          <h2 id="build-title">Your $19,000 is a token.<br />Spend it on what you actually need.</h2>
          <p className="lead-serif">The public rate for a single 19Keys keynote is $25,000. The Program puts the entire ecosystem behind you for a year — and lets you allocate the investment across access, events, systems, and media. Pick a path or build line by line. Reach $19,000 and the Program is yours.</p>
        </div>
        <PackageBuilder />
      </section>

      <section className="image-statement">
        <Image src="/media/gold-room.jpg" alt="19Keys seated behind reflective gold objects" width={1245} height={1600} sizes="(max-width: 900px) 100vw, 50vw" />
        <div>
          <p className="eyebrow">The principle</p>
          <h2>Build the machine behind the message.</h2>
          <p>When brand, content, operations, technology, and access move as one system, growth stops depending on luck.</p>
        </div>
      </section>

      <section className="process section-pad" id="process">
        <div className="process-heading reveal">
          <p className="eyebrow">How placement works</p>
          <h2>We arrive informed. Then we build around you.</h2>
        </div>
        <div className="journey-list">
          {journey.map(([number, title, copy]) => (
            <article className="journey-step reveal" key={number}>
              <span>{number}</span>
              <h3>{title}</h3>
              <p>{copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="proof-gallery section-pad" aria-labelledby="proof-title">
        <div className="proof-gallery-heading reveal">
          <p className="eyebrow">Proof of proximity</p>
          <h2 id="proof-title">The rooms are real.</h2>
          <p>Creator Growth is connected to an active media, production, community, and relationship ecosystem. The program is where those assets become coordinated around your next chapter.</p>
        </div>
        <div className="gallery-grid">
          <figure className="gallery-wide gallery-conversation reveal"><Image src="/media/conversation.jpg" alt="19Keys speaking onstage with a guest" width={1800} height={1200} sizes="(max-width: 900px) 100vw, 90vw" /><figcaption>Ideas that move rooms</figcaption></figure>
          <figure className="reveal"><Image src="/media/network.jpg" alt="19Keys with entrepreneurs and creators" width={1800} height={1357} sizes="(max-width: 760px) 100vw, 45vw" /><figcaption>Relationships with range</figcaption></figure>
          <figure className="reveal"><Image src="/media/partner.jpg" alt="19Keys with a creative industry leader" width={1800} height={1199} sizes="(max-width: 760px) 100vw, 45vw" /><figcaption>Culture meets enterprise</figcaption></figure>
          <figure className="gallery-wide gallery-event reveal"><Image src="/media/event.jpg" alt="19Keys at a live community event" width={1800} height={1198} sizes="(max-width: 900px) 100vw, 90vw" /><figcaption>Built for the public stage</figcaption></figure>
        </div>
      </section>

      <section className="calendar section-pad" id="calendar" aria-labelledby="calendar-title">
        <div className="calendar-heading reveal">
          <p className="eyebrow">03 · The calendar · Twelve months</p>
          <h2 id="calendar-title">You are not joining a program.<br />You are stepping into a calendar.</h2>
          <p>One High Lvl event every month. Partners choose which rooms their token covers. Here is where we are headed.</p>
        </div>
        <div className="month-grid">
          {calendar.map(([month, year, place, copy, tag]) => (
            <article className={`month-card reveal tag-${tag.toLowerCase().replace(/\s+/g, "-")}`} key={month + year}>
              <div className="month-top"><b>{month}</b><span>{year}</span></div>
              <h3>{place}</h3>
              <p>{copy}</p>
              <em>{tag}</em>
            </article>
          ))}
        </div>
        <p className="calendar-foot reveal">Partner access to select rooms is built into your Growth Map. Inner-circle trips are offered at cost. <em>Itinerary planned and subject to change.</em></p>
      </section>

      <section className="masterclass section-pad" id="masterclass" aria-labelledby="masterclass-title">
        <div className="masterclass-tile reveal" aria-hidden="true">
          <span className="masterclass-play">&#9654;</span>
          <span className="masterclass-label">Trailer · In production</span>
        </div>
        <div className="masterclass-copy reveal">
          <p className="eyebrow">The Masterclass</p>
          <h2 id="masterclass-title">The Creator Growth Masterclass. Coming soon.</h2>
          <p>A filmed masterclass and the Challenge trailer are in production now. Reserve a Challenge seat and you see them first.</p>
          <a className="button button-light" href="#challenge">Reserve a seat <ArrowMark /></a>
        </div>
      </section>

      <section className="investment" id="discovery">
        <div className="investment-head section-pad reveal">
          <p className="eyebrow">The standard</p>
          <h2>Partnerships begin at $19,000.</h2>
          <p>Final investment is determined by your Growth Map, the capabilities selected, and the intensity of execution. The first step is a paid discovery designed to produce value before a partnership is offered.</p>
        </div>

        <div className="inclusions section-pad reveal">
          <p className="eyebrow">What every partnership includes</p>
          <ul className="inclusions-list">
            {inclusions.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="discovery-options section-pad">
          <article className="discovery-option reveal">
            <div className="option-top"><span>Option 01</span><b>$333</b></div>
            <h3>Filmed Discovery</h3>
            <p>Join virtually from anywhere, or come to the High Lvl facility in Los Angeles, for a filmed strategy session built around your story, goals, and next level.</p>
            <ul>
              <li>Pre-session brand deep dive</li>
              <li>Virtual worldwide or in-person in LA</li>
              <li>One-hour strategy session</li>
              <li>Filmed for the content ecosystem</li>
              <li>Growth Map preview</li>
            </ul>
            <a className="button button-dark" href="#apply">Request filmed session <ArrowMark /></a>
          </article>
          <article className="discovery-option discovery-private reveal">
            <div className="option-top"><span>Option 02</span><b>$555</b></div>
            <h3>Private Discovery</h3>
            <p>Meet privately from anywhere in the world, or request an unfilmed session in Los Angeles. The work stays between us.</p>
            <ul>
              <li>Pre-session brand deep dive</li>
              <li>Private virtual or LA session</li>
              <li>One-hour strategy session</li>
              <li>No recording or content use</li>
              <li>Growth Map preview</li>
            </ul>
            <a className="button button-light" href="#apply">Request private session <ArrowMark /></a>
          </article>
        </div>
        <p className="investment-note section-pad reveal">Growth partnerships can be financed. Ask about financing options during your discovery session.</p>
      </section>

      <section className="apply-section section-pad" id="apply">
        <div className="apply-intro reveal">
          <p className="eyebrow">04 · Application for placement</p>
          <h2>Show us what you are building.</h2>
          <p>Creator Growth accepts a limited number of active partners. Applications are reviewed for clarity of vision, existing traction, execution readiness, and fit with the High Lvl ecosystem.</p>
          <div className="fit-check">
            <span>Good fit</span>
            <ul>
              <li>Established business or platform</li>
              <li>Clear point of view and ambition</li>
              <li>Ready for coordinated execution</li>
              <li>$19K+ growth investment capacity</li>
            </ul>
          </div>
        </div>

        <ApplyForm />
      </section>

      <section className="faq section-pad">
        <div className="faq-heading reveal">
          <p className="eyebrow">Before you commit</p>
          <h2>Clear standards.<br />No hidden doors.</h2>
        </div>
        <div className="faq-list">
          {faqs.map(([question, answer], index) => (
            <details className="reveal" key={question} open={index === 0}>
              <summary>{question}<span aria-hidden="true">+</span></summary>
              <p>{answer}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="final-cta">
        <Image src="/media/marquee.jpg" alt="The Gramercy Theatre marquee reading 19Keys sold out" width={1800} height={1200} sizes="100vw" />
        <div className="final-cta-shade" />
        <div className="final-cta-content">
          <p className="eyebrow">19Keys · Gramercy Theatre · Sold Out</p>
          <h2>Build what your vision deserves.</h2>
          <p className="final-cta-subcopy">From consumer to creator to institution.</p>
          <div className="hero-actions">
            <a className="button button-light" href="#challenge">Join the Challenge <ArrowMark /></a>
            <a className="text-link" href="#apply">Apply to the Program <span aria-hidden="true">&#8599;</span></a>
          </div>
        </div>
      </section>

      <footer>
        <div className="footer-brand"><Image src="/media/key-logo.png" alt="" width={480} height={600} /><span>Creator Growth</span></div>
        <p>19KEYS × HIGH LVL</p>
        <div><a href="#challenge">Challenge</a><a href="#build">Program</a><a href="#calendar">Calendar</a><a href="#apply">Apply</a></div>
        <small>From a culture of consumers to a culture of creators. Results depend on execution; outcomes vary by partner.</small>
      </footer>
    </main>
  );
}
