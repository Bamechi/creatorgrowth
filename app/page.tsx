import Image from "next/image";

const capabilities = [
  ["01", "Narrative", "Position the idea so the market understands why it matters."],
  ["02", "Media", "Build a content engine that turns vision into consistent cultural signal."],
  ["03", "Distribution", "Place the signal across the right platforms, rooms, and audiences."],
  ["04", "Management", "Install the operators, rhythm, and accountability behind the brand."],
  ["05", "AI Systems", "Automate the repetitive work and increase the speed of execution."],
  ["06", "Community", "Convert attention into an owned audience with identity and belonging."],
  ["07", "Access", "Create proximity to aligned creators, operators, and opportunities."],
  ["08", "19Keys", "Apply direct strategic perspective at the moments with highest leverage."],
];

const journey = [
  ["01", "Deep-Dive Research", "We study your brand, audience, offers, reach, risks, and untapped leverage before the first conversation."],
  ["02", "Paid Discovery", "Choose a filmed session virtually or in Los Angeles, or keep the conversation fully private. We surface the real objective beneath the obvious one."],
  ["03", "Your Growth Map", "Your goals are mapped against the full High Lvl ecosystem. The result is a precise plan built around your actual constraints."],
  ["04", "Partnership Design", "We set the scope, select the right capabilities, establish success measures, and place the right operators around you."],
  ["05", "Strategic Activation", "The work begins. 19Keys enters where his perspective, platform, or relationships create the greatest leverage."],
  ["06", "Build. Grow. Review.", "We execute, measure, refine, and compound what works. Your brand becomes an operating system, not a series of campaigns."],
];

const faqs = [
  ["Who is this built for?", "Established creators, founders, and culture-builders with a proven offer, meaningful traction, and the capacity to invest at least $19,000 in growth."],
  ["Is this coaching or a course?", "It is a custom growth partnership. Strategy is paired with implementation through the people and capabilities selected for your Growth Map."],
  ["What does the $19,000 include?", "That is the entry point for a custom engagement. Final scope is set after discovery and depends on which capabilities, production resources, and operators your plan requires."],
  ["Will I work directly with 19Keys?", "19Keys is the curator and strategic center of the program. His direct involvement is placed at the moments where it can create the most leverage for your partnership."],
  ["Can I join from outside Los Angeles?", "Yes. The $333 filmed discovery is available virtually worldwide or in person at the High Lvl facility in Los Angeles. Private discovery can also happen virtually."],
  ["Why is there a paid discovery?", "The session includes pre-call research, a focused strategy conversation, and a first-look Growth Map. The fee protects the depth of the process and the quality of the room."],
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
        <a className="brand-lockup" href="#top" aria-label="Creator Growth Program home">
          <Image src="/media/key-logo.png" alt="19Keys key mark" width={480} height={600} priority />
          <span>19KEYS <b>×</b> HIGH LVL</span>
        </a>

        <nav className="desktop-nav" aria-label="Primary navigation">
          <a href="#program">Program</a>
          <a href="#process">Process</a>
          <a href="#19keys">19Keys</a>
          <a href="#discovery">Discovery</a>
        </nav>

        <a className="header-cta" href="#apply">Apply now <ArrowMark /></a>

        <details className="mobile-nav">
          <summary aria-label="Open navigation">Menu</summary>
          <div>
            <a href="#program">Program</a>
            <a href="#process">Process</a>
            <a href="#19keys">19Keys</a>
            <a href="#discovery">Discovery</a>
            <a href="#apply">Apply now</a>
          </div>
        </details>
      </header>

      <section className="hero" id="top" aria-labelledby="hero-title">
        <Image className="hero-image" src="/media/hero-keys.jpg" alt="19Keys portrait" width={1600} height={2000} priority sizes="(max-width: 900px) 100vw, 62vw" />
        <div className="hero-shade" />
        <div className="hero-grid" aria-hidden="true" />
        <div className="hero-content">
          <p className="eyebrow hero-eyebrow">Private growth partnership · By application</p>
          <h1 id="hero-title"><span className="hero-title-main">Creator</span><span className="hero-title-signal" data-text="Growth.">Growth.</span></h1>
          <p className="hero-copy">You already have the vision. We build the strategy, content, rooms, and systems around it. One partnership. Every capability. Curated by 19Keys.</p>
          <div className="hero-actions">
            <a className="button button-light" href="#apply">Apply for placement <ArrowMark /></a>
            <a className="text-link" href="#program">Enter the program <span aria-hidden="true">&#8595;</span></a>
          </div>
        </div>
        <div className="hero-status">
          <span><b>$19K+</b> starting investment</span>
          <span><b>LA + virtual</b> discovery</span>
          <span><b>Limited</b> active partners</span>
        </div>
      </section>

      <div className="marquee" aria-label="Program outcomes">
        <div className="marquee-track">
          <div className="marquee-group">
            <span>Own the audience</span><i>/</i><span>Build the platform</span><i>/</i><span>Engineer the business</span><i>/</i>
          </div>
          <div className="marquee-group" aria-hidden="true">
            <span>Own the audience</span><i>/</i><span>Build the platform</span><i>/</i><span>Engineer the business</span><i>/</i>
          </div>
        </div>
      </div>

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

      <section className="tension" aria-label="The growth problem">
        <div className="tension-image-wrap">
          <Image src="/media/mindset-portrait.jpg" alt="19Keys looking directly into camera" width={1200} height={1500} sizes="(max-width: 900px) 100vw, 50vw" />
          <p>Mindset creates the vision.<br />Infrastructure carries it.</p>
        </div>
        <div className="tension-copy">
          <p className="eyebrow">Where growth stalls</p>
          <h2>Vision without infrastructure stays potential.</h2>
          <p>You have the business. You have the point of view. You may already have the audience. The constraint is the system behind the signal: the right message, production cadence, team, technology, distribution, and rooms.</p>
          <p className="pullquote">Your next level does not need more isolated advice. It needs coordinated execution.</p>
        </div>
      </section>

      <section className="program section-pad" id="program">
        <div className="section-intro reveal">
          <p className="eyebrow">The Creator Operating System</p>
          <h2>One partnership.<br />Eight capabilities.</h2>
          <p>Every partnership is assembled around the outcome. You do not buy a menu of services. We select the capabilities, operators, and moments of access your Growth Map requires.</p>
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
            <div><b>10+ years</b><span>building trust</span></div>
            <div><b>Tens of millions</b><span>of long-form views</span></div>
            <div><b>Independent</b><span>ecosystem builder</span></div>
          </div>
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

      <section className="investment" id="discovery">
        <div className="investment-head section-pad reveal">
          <p className="eyebrow">The standard</p>
          <h2>Partnerships begin at $19,000.</h2>
          <p>Final investment is determined by your Growth Map, the capabilities selected, and the intensity of execution. The first step is a paid discovery designed to produce value before a partnership is offered.</p>
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
      </section>

      <section className="apply-section section-pad" id="apply">
        <div className="apply-intro reveal">
          <p className="eyebrow">Application for placement</p>
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

        <form className="application-form reveal" action="#apply" method="get">
          <div className="field-row">
            <label>First name<input type="text" name="first-name" autoComplete="given-name" required /></label>
            <label>Last name<input type="text" name="last-name" autoComplete="family-name" required /></label>
          </div>
          <div className="field-row">
            <label>Email<input type="email" name="email" autoComplete="email" required /></label>
            <label>Phone<input type="tel" name="phone" autoComplete="tel" required /></label>
          </div>
          <label>Business / brand<input type="text" name="brand" required /></label>
          <label>Website or primary social link<input type="url" name="website" placeholder="https://" required /></label>
          <label>What are you building next?<textarea name="vision" rows={4} required /></label>
          <fieldset>
            <legend>Investment readiness</legend>
            <div className="radio-grid">
              <label><input type="radio" name="investment" value="19-30" required /><span>$19K - $30K</span></label>
              <label><input type="radio" name="investment" value="30-75" /><span>$30K - $75K</span></label>
              <label><input type="radio" name="investment" value="75-plus" /><span>$75K+</span></label>
            </div>
          </fieldset>
          <fieldset>
            <legend>Preferred discovery</legend>
            <div className="radio-grid two-up">
              <label><input type="radio" name="discovery" value="filmed" required /><span>Filmed · virtual or LA · $333</span></label>
              <label><input type="radio" name="discovery" value="private" /><span>Private · $555</span></label>
            </div>
          </fieldset>
          <label className="consent"><input type="checkbox" required /><span>I understand Creator Growth partnerships begin at $19,000 and discovery sessions are paid.</span></label>
          <button className="button button-gold" type="submit">Submit application <ArrowMark /></button>
          <p className="form-note">Your future application or calendar link can be connected here without changing this design.</p>
        </form>
      </section>

      <section className="faq section-pad">
        <div className="faq-heading reveal">
          <p className="eyebrow">Before you apply</p>
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
        <div>
          <p className="eyebrow">Your platform can become an institution</p>
          <h2>Build what your vision deserves.</h2>
          <a className="button button-light" href="#apply">Apply to Creator Growth <ArrowMark /></a>
        </div>
      </section>

      <footer>
        <div className="footer-brand"><Image src="/media/key-logo.png" alt="" width={480} height={600} /><span>Creator Growth Program</span></div>
        <p>19KEYS × HIGH LVL</p>
        <div><a href="#program">Program</a><a href="#discovery">Discovery</a><a href="#apply">Apply</a></div>
        <small>Private growth partnerships for creators, founders, and culture-builders.</small>
      </footer>
    </main>
  );
}
