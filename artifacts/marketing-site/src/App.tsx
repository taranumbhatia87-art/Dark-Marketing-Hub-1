import { useState } from "react";
import { quizQuestions } from "./data/quiz";

const BASE = import.meta.env.BASE_URL.replace(/\/$/, "");

const truths = [
  {
    title: "Nobody cares about your product",
    body: "They care about what it does for them. Stop describing what you built. Start describing the life they'll have after they buy it."
  },
  {
    title: "Features are a trap",
    body: "Every competitor lists features. The one who sells the outcome wins. 'Lose 10 lbs in 6 weeks' outperforms '5 fat-burning ingredients' every time."
  },
  {
    title: "Clarity beats cleverness",
    body: "If a 12-year-old can't understand your tagline, you don't have a tagline — you have a riddle. Confused minds don't buy."
  },
  {
    title: "Emotion decides, logic justifies",
    body: "Your customer decides with their gut, then looks for reasons to validate it. Give them both, in that order. Lead with feeling, follow with fact."
  },
  {
    title: "The best ad is the right message",
    body: "A perfectly produced video shown to the wrong audience is waste. One honest paragraph shown to the right person at the right moment is marketing."
  },
  {
    title: "Trust is earned, not declared",
    body: "Saying 'we're the best' is worth nothing. A real customer saying 'this changed my life' is worth everything. Proof beats promises."
  }
];

const principles = [
  {
    num: "01",
    tag: { label: "PSYCHOLOGY", cls: "tag-purple" },
    title: "You are selling identity, not utility",
    body: "People buy things because of who it makes them feel like. Nike sells the athlete you want to become. Apple sells the creative you already are. Ask yourself: what identity does my product hand the buyer?"
  },
  {
    num: "02",
    tag: { label: "STRATEGY", cls: "tag-green" },
    title: "The narrower the niche, the louder the signal",
    body: "Trying to appeal to everyone is how you appeal to no one. 'Project management for construction teams' will always out-convert 'project management for everyone.' Specificity creates recognition — and recognition creates trust."
  },
  {
    num: "03",
    tag: { label: "ATTENTION", cls: "tag-orange" },
    title: "The first second is the entire battle",
    body: "Online, you have under 1.7 seconds before someone scrolls past. Your hook isn't just a headline — it's a pattern interrupt. It must be surprising, polarizing, or immediately useful. 'Safe' hooks are invisible hooks."
  },
  {
    num: "04",
    tag: { label: "COPY", cls: "tag-red" },
    title: "Good copy is stolen from the customer's mouth",
    body: "Your best marketing language already exists — it's in customer reviews, Reddit threads, and support tickets. When you use the exact words people use to describe their pain, they feel heard. That's when defenses drop."
  },
  {
    num: "05",
    tag: { label: "ECONOMICS", cls: "tag-purple" },
    title: "CAC is a vanity metric without LTV",
    body: "Spending $200 to acquire a customer is terrible if they buy once and leave. It's phenomenal if they spend $2,000 over 3 years. The unit economics of your retention determine the ceiling of your acquisition spend."
  },
  {
    num: "06",
    tag: { label: "DISTRIBUTION", cls: "tag-green" },
    title: "The best product without a distribution engine is a hobby",
    body: "Facebook crushed MySpace with an inferior product and a superior distribution moat (college networks). Distribution channels, partnerships, and virality loops are not 'after' the product — they are the product."
  }
];

const videoLinks = [
  {
    title: "The Greatest Sales Deck I've Ever Seen",
    source: "Medium / Andy Raskin",
    desc: "Why the best pitches start with a massive change in the world, not with the product.",
    url: "https://medium.com/the-mission/the-greatest-sales-deck-ive-ever-seen-4f4ef3391ba0",
    icon: "📄"
  },
  {
    title: "Seth Godin — This Is Marketing",
    source: "YouTube",
    desc: "Godin's full talk on why the smallest viable audience is the starting point, not the endpoint.",
    url: "https://www.youtube.com/watch?v=sioZd3AxmnE",
    icon: "▶"
  },
  {
    title: "Alex Hormozi — How to Write Copy That Sells",
    source: "YouTube",
    desc: "$100M entrepreneur breaks down the exact framework for offers so good people feel stupid saying no.",
    url: "https://www.youtube.com/watch?v=K0oYDHaJwLs",
    icon: "▶"
  },
  {
    title: "The Psychology of Pricing",
    source: "YouTube / Valuetainment",
    desc: "How perception of price is completely disconnected from cost — and how to engineer it deliberately.",
    url: "https://www.youtube.com/watch?v=gn9sTJeaHSc",
    icon: "▶"
  },
  {
    title: "Rory Sutherland — Perspective is Everything",
    source: "TED Talk",
    desc: "A VP at Ogilvy explains why the real job of marketing is changing perceived value, not actual value.",
    url: "https://www.ted.com/talks/rory_sutherland_perspective_is_everything",
    icon: "▶"
  },
  {
    title: "Obviously Awesome — April Dunford on Positioning",
    source: "YouTube",
    desc: "The definitive framework for positioning your product so customers instantly understand why it's different and worth buying.",
    url: "https://www.youtube.com/watch?v=OznTxmE9YGc",
    icon: "▶"
  },
  {
    title: "Ogilvy on Advertising — Full Archive",
    source: "Book Summary / YouTube",
    desc: "David Ogilvy's timeless rules: 'The consumer is not a moron, she is your wife.' The fundamentals haven't changed.",
    url: "https://www.youtube.com/watch?v=Ql5bBNi4QLQ",
    icon: "▶"
  },
  {
    title: "How to Make a Landing Page that Converts",
    source: "CXL Institute",
    desc: "Peep Laja's data-backed framework for pages that turn visitors into buyers — based on 1,000+ A/B tests.",
    url: "https://cxl.com/blog/landing-page-optimization/",
    icon: "📄"
  },
  {
    title: "The Human Brand — Chris Malone & Susan Fiske",
    source: "Talk / YouTube",
    desc: "Research from Princeton: people judge brands the same way they judge people — warmth first, then competence.",
    url: "https://www.youtube.com/watch?v=rMjPfHWJX4Y",
    icon: "▶"
  }
];

function Quiz({ onClose }: { onClose: () => void }) {
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [answers, setAnswers] = useState<boolean[]>([]);
  const [done, setDone] = useState(false);

  const q = quizQuestions[current];
  const total = quizQuestions.length;
  const progress = done ? 100 : ((current) / total) * 100;
  const score = answers.filter(Boolean).length;

  function handleSelect(idx: number) {
    if (selected !== null) return;
    setSelected(idx);
  }

  function handleNext() {
    const correct = selected === q.correct;
    const newAnswers = [...answers, correct];
    if (current + 1 >= total) {
      setAnswers(newAnswers);
      setDone(true);
    } else {
      setAnswers(newAnswers);
      setCurrent(current + 1);
      setSelected(null);
    }
  }

  function handleRestart() {
    setCurrent(0);
    setSelected(null);
    setAnswers([]);
    setDone(false);
  }

  function getResultText() {
    const pct = score / total;
    if (pct >= 0.9) return { title: "You think like a strategist", desc: "You see marketing for what it is — psychology, economics, and human behavior wrapped in a message. Rare." };
    if (pct >= 0.7) return { title: "Solid foundation", desc: "You understand the principles most people overlook. With deliberate practice, you'll operate at a level most marketers never reach." };
    if (pct >= 0.5) return { title: "You're waking up", desc: "You've got the instincts. Now it's time to go deeper. Re-read the principles section and revisit the questions you missed." };
    return { title: "The gap is your advantage", desc: "Most people never even ask these questions. The fact that you're here means you're already ahead of where you were. Keep reading." };
  }

  return (
    <div className="quiz-overlay" onClick={(e) => e.target === e.currentTarget && onClose()}>
      <div className="quiz-modal">
        <button className="quiz-close" onClick={onClose}>✕</button>

        <div className="quiz-progress-bar">
          <div className="quiz-progress-fill" style={{ width: `${progress}%` }} />
        </div>

        {done ? (
          <div className="quiz-result">
            <div className="result-score">{score}/{total}</div>
            <div className="result-label">questions correct</div>
            <h3 className="result-title">{getResultText().title}</h3>
            <p className="result-desc">{getResultText().desc}</p>
            <button className="quiz-restart-btn" onClick={handleRestart}>
              ↺ Try again
            </button>
          </div>
        ) : (
          <>
            <div className="quiz-q-label">Question {current + 1} of {total}</div>
            <div className="quiz-q-text">{q.question}</div>
            <div className="quiz-options">
              {q.options.map((opt, i) => {
                let cls = "quiz-option";
                if (selected !== null) {
                  if (i === q.correct) cls += " correct";
                  else if (i === selected && selected !== q.correct) cls += " wrong";
                }
                const letters = ["A", "B", "C", "D"];
                return (
                  <button
                    key={i}
                    className={cls}
                    onClick={() => handleSelect(i)}
                    disabled={selected !== null}
                  >
                    <span className="option-letter">{letters[i]}</span>
                    {opt}
                  </button>
                );
              })}
            </div>

            {selected !== null && (
              <>
                <div className="quiz-explanation">
                  <strong>{selected === q.correct ? "Correct. " : "Not quite. "}</strong>
                  {q.explanation}
                </div>
                <button className="quiz-next-btn" onClick={handleNext}>
                  {current + 1 >= total ? "See my results →" : "Next question →"}
                </button>
              </>
            )}
          </>
        )}
      </div>
    </div>
  );
}

export default function App() {
  const [quizOpen, setQuizOpen] = useState(false);

  return (
    <>
      {quizOpen && <Quiz onClose={() => setQuizOpen(false)} />}

      {/* NAV */}
      <nav>
        <a href={BASE + "/"} className="nav-logo">MKTG.REAL</a>
        <ul className="nav-links">
          <li><a href="#truths">The Truths</a></li>
          <li><a href="#principles">Principles</a></li>
          <li><a href="#resources">Resources</a></li>
          <li><a href="#quiz-section">Quiz</a></li>
        </ul>
      </nav>

      {/* HERO */}
      <div className="hero">
        <div className="hero-bg-grid" />
        <div className="hero-bg-blob" />
        <div className="hero-inner">
          <span className="hero-tag">Marketing without the fluff</span>
          <h1 className="hero-title">
            Marketing is not<br />about your product.<br />
            It's about <em>their story.</em>
          </h1>
          <p className="hero-sub">
            Most marketing advice teaches you tactics. This site teaches you the underlying forces
            that make human beings pay attention, believe, and buy. Once you see them, you can't unsee them.
          </p>
          <button className="hero-cta" onClick={() => setQuizOpen(true)}>
            <span>⚡</span> Use the skills you know
          </button>
          <div className="hero-scroll-hint">
            <span className="scroll-line" />
            Scroll to learn
            <span className="scroll-line" />
          </div>
        </div>
      </div>

      {/* HARD TRUTHS */}
      <section id="truths">
        <div className="section-label">// hard truths</div>
        <h2 className="section-title">What they don't teach in<br />marketing class</h2>
        <p className="section-sub">
          The difference between people who understand marketing and people who just do marketing.
          These aren't opinions. They're observations from the people who built the world's most valuable brands.
        </p>
        <div className="truths-grid">
          {truths.map((t, i) => (
            <div className="truth-card" key={i}>
              <div className="truth-number">0{i + 1}</div>
              <h3>{t.title}</h3>
              <p>{t.body}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="section-divider" />

      {/* PRINCIPLES */}
      <section id="principles">
        <div className="section-label">// first principles</div>
        <h2 className="section-title">The six laws that govern<br />every successful campaign</h2>
        <p className="section-sub">
          Strip away every trend, platform, and tactic. What's left are human behaviors that haven't
          changed in 10,000 years. These are the ones worth learning.
        </p>
        <div className="principles-list">
          {principles.map((p) => (
            <div className="principle-item" key={p.num}>
              <div className="principle-num">{p.num}</div>
              <div className="principle-content">
                <span className={`principle-tag ${p.tag.cls}`}>{p.tag.label}</span>
                <h3>{p.title}</h3>
                <p>{p.body}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="section-divider" />

      {/* CONCEPTS */}
      <section>
        <div className="section-label">// deeper concepts</div>
        <h2 className="section-title">The mental models<br />behind every great campaign</h2>
        <p className="section-sub">The frameworks that separate strategists from executors.</p>

        <div className="concept-block">
          <div className="concept-text">
            <span className="principle-tag tag-purple" style={{marginBottom: "0.75rem", display: "inline-block"}}>AWARENESS LADDER</span>
            <h3>Your message must match where the customer is, not where you want them to be</h3>
            <p>Eugene Schwartz identified 5 levels of customer awareness. Most marketers talk to everyone as if they already know they have a problem and know your brand exists. They don't.</p>
            <p>An Unaware prospect needs to be shown the problem. A Most Aware prospect just needs a reason to act now. Writing the same message for both is like prescribing medicine without diagnosing the patient.</p>
          </div>
          <div className="concept-visual">
            <div><span className="highlight">Level 5 →</span> Most Aware</div>
            <div style={{paddingLeft: "1rem", color: "#8b8aaa", fontSize: "0.75rem"}}>Just give them a deal</div>
            <div><span className="highlight">Level 4 →</span> Product Aware</div>
            <div style={{paddingLeft: "1rem", color: "#8b8aaa", fontSize: "0.75rem"}}>Why you vs competitors</div>
            <div><span className="highlight">Level 3 →</span> Solution Aware</div>
            <div style={{paddingLeft: "1rem", color: "#8b8aaa", fontSize: "0.75rem"}}>Your product is the answer</div>
            <div><span className="highlight">Level 2 →</span> Problem Aware</div>
            <div style={{paddingLeft: "1rem", color: "#8b8aaa", fontSize: "0.75rem"}}>Amplify the pain</div>
            <div><span className="highlight">Level 1 →</span> Unaware</div>
            <div style={{paddingLeft: "1rem", color: "#8b8aaa", fontSize: "0.75rem"}}>Show them the problem first</div>
          </div>
        </div>

        <div className="concept-block reverse">
          <div className="concept-text">
            <span className="principle-tag tag-orange" style={{marginBottom: "0.75rem", display: "inline-block"}}>JOBS TO BE DONE</span>
            <h3>People don't buy products. They hire them to do a job.</h3>
            <p>Clayton Christensen's framework: when someone buys a milkshake at 8am, they're not hungry. They're hiring the milkshake to make a boring commute survivable and hold them until lunch.</p>
            <p>The product is irrelevant. The job is everything. Ask: what job is the customer firing their current solution from, and what job are they hiring me for?</p>
          </div>
          <div className="concept-visual">
            <div><span className="highlight">Old thinking:</span></div>
            <div style={{color: "#8b8aaa", fontSize: "0.8rem", marginBottom: "1rem"}}>"We sell project management<br/>software with 50 features"</div>
            <div><span className="highlight">JTBD thinking:</span></div>
            <div style={{color: "#8b8aaa", fontSize: "0.8rem"}}>"We're hired to eliminate the<br/>anxiety of not knowing<br/>if the team is on track"</div>
          </div>
        </div>

        <div className="concept-block">
          <div className="concept-text">
            <span className="principle-tag tag-red" style={{marginBottom: "0.75rem", display: "inline-block"}}>SOCIAL PROOF</span>
            <h3>The most persuasive person in the room is a satisfied stranger</h3>
            <p>Robert Cialdini's research is unambiguous: when uncertain, humans look to what others are doing. We are a herd species. We read reviews before restaurants, movies, and surgeons.</p>
            <p>Strategically, this means testimonials aren't a nice-to-have. They're your most powerful sales tool — especially when they mirror the reader's exact situation, fear, or objection.</p>
          </div>
          <div className="concept-visual">
            <div style={{marginBottom: "0.75rem"}}><span className="highlight">"Before:"</span> I was skeptical about the price...</div>
            <div style={{marginBottom: "0.75rem", color: "#8b8aaa", fontSize: "0.8rem"}}>↑ Handles objection before it's raised</div>
            <div style={{marginBottom: "0.75rem"}}><span className="highlight">"After:"</span> Within 3 weeks I had...</div>
            <div style={{color: "#8b8aaa", fontSize: "0.8rem"}}>↑ Specific outcome with timeframe</div>
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* RESOURCES */}
      <section id="resources">
        <div className="section-label">// curated resources</div>
        <h2 className="section-title">The talks and essays<br />that will actually change how you think</h2>
        <p className="section-sub">
          Not a list of "top 100 marketing tips." These are the specific resources that practitioners
          point to when asked what shifted their understanding.
        </p>
        <div className="videos-grid">
          {videoLinks.map((v, i) => (
            <a className="video-card" key={i} href={v.url} target="_blank" rel="noopener noreferrer">
              <div className="video-card-top">
                <div className="video-icon">{v.icon}</div>
                <div className="video-source">{v.source}</div>
              </div>
              <h4>{v.title}</h4>
              <p>{v.desc}</p>
              <div className="video-arrow">→ Open resource</div>
            </a>
          ))}
        </div>
      </section>

      {/* QUIZ CTA */}
      <div className="quiz-cta-section" id="quiz-section">
        <div className="quiz-cta-inner">
          <h2>Think you've absorbed it?</h2>
          <p>
            10 questions. No multiple-guess luck. These test whether you actually understand the
            principles — or just recognize the words.
          </p>
          <button className="quiz-btn" onClick={() => setQuizOpen(true)}>
            <span>⚡</span> Use the skills you know
          </button>
        </div>
      </div>

      {/* FOOTER */}
      <footer>
        <span>MKTG.REAL</span> — Marketing stripped to its foundations.
        <br />No fluff. No filler. Just the principles that actually work.
      </footer>
    </>
  );
}
