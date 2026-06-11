export interface QuizQuestion {
  question: string;
  options: string[];
  correct: number;
  explanation: string;
}

export const quizQuestions: QuizQuestion[] = [
  {
    question: "What is the actual job of a headline?",
    options: [
      "Explain your entire product",
      "Make the reader read the first sentence",
      "Go viral on social media",
      "List your key features"
    ],
    correct: 1,
    explanation: "David Ogilvy said it best: the headline's only job is to get people to read the next line. Nothing else. Every other purpose is a distraction."
  },
  {
    question: "Why do most ads fail before anyone reads them?",
    options: [
      "Wrong target audience",
      "Low budget",
      "They don't stop the scroll — they lack a pattern interrupt",
      "Bad product"
    ],
    correct: 2,
    explanation: "Attention is the new currency. If your first frame or line doesn't break the user's autopilot, the rest of your brilliant copy never gets seen. Interruption comes before persuasion."
  },
  {
    question: "What does 'positioning' actually mean in marketing?",
    options: [
      "Where your ad appears on a webpage",
      "How you price your product",
      "Owning a specific idea in the customer's mind relative to competitors",
      "The order of features on your landing page"
    ],
    correct: 2,
    explanation: "Al Ries & Jack Trout defined it: positioning is not what you do to a product, it's what you do to the mind of a prospect. Volvo owns 'safety'. FedEx owns 'overnight'. What idea do you own?"
  },
  {
    question: "Which of these is the most powerful trigger in human decision-making?",
    options: [
      "Logic and facts",
      "Price discounts",
      "Loss aversion — fear of losing beats desire for gain",
      "Social proof"
    ],
    correct: 2,
    explanation: "Kahneman proved it: people feel the pain of loss roughly 2x more than the pleasure of equivalent gain. 'Don't miss out' outperforms 'you could gain' almost every time."
  },
  {
    question: "What's wrong with 'our product is the best quality at the best price'?",
    options: [
      "Nothing — it's a strong value proposition",
      "It's too long",
      "It's a claim everyone makes — it's undifferentiated noise",
      "It focuses too much on price"
    ],
    correct: 2,
    explanation: "If your competitor can say the exact same thing, it's not a value proposition — it's filler. Real differentiation means something only you can credibly claim."
  },
  {
    question: "What is the 'awareness ladder' and why does it matter?",
    options: [
      "A social media follower count metric",
      "The levels of how aware a prospect is of their problem and your solution",
      "A way to measure brand visibility",
      "The number of touchpoints before a purchase"
    ],
    correct: 1,
    explanation: "Eugene Schwartz's 5 levels: Unaware → Problem Aware → Solution Aware → Product Aware → Most Aware. Talking to an Unaware audience like they're Most Aware is the #1 cause of ad failure."
  },
  {
    question: "Why is 'more features' almost never the answer to low conversions?",
    options: [
      "Features are hard to build",
      "Customers don't read feature lists",
      "People buy outcomes and identity, not specs — more features create decision paralysis",
      "Features increase price perception"
    ],
    correct: 2,
    explanation: "Barry Schwartz's Paradox of Choice: more options = more anxiety = fewer decisions. People don't buy the best product. They buy the one that makes choosing feel safe and the outcome feel certain."
  },
  {
    question: "What's the real difference between marketing and advertising?",
    options: [
      "Advertising costs money, marketing doesn't",
      "Marketing shapes what you sell and to whom; advertising amplifies the message",
      "Marketing is digital, advertising is print",
      "They're the same thing with different names"
    ],
    correct: 1,
    explanation: "Peter Drucker: 'The aim of marketing is to make selling superfluous.' Marketing is strategy — the product, the positioning, the audience. Advertising is the loudspeaker. Without the strategy, you're just buying noise."
  },
  {
    question: "What does 'PMF' (Product-Market Fit) actually feel like when you have it?",
    options: [
      "You have a beautiful website and good SEO",
      "Investors are interested",
      "You can't grow fast enough — demand pulls you forward without forced selling",
      "Your NPS score is above 50"
    ],
    correct: 2,
    explanation: "Marc Andreessen: PMF is when a good market pulls product out of a startup. Sean Ellis' test: ask users 'how would you feel if you could no longer use this product?' — if 40%+ say 'very disappointed', you're close."
  },
  {
    question: "Why do the best marketers obsess over the customer's internal monologue?",
    options: [
      "To copy what competitors are saying",
      "Because knowing the exact words customers use lets you mirror them — and mirroring creates trust",
      "To find keywords for SEO",
      "To write better email subject lines"
    ],
    correct: 1,
    explanation: "The 'Voice of Customer' is the most underused research tool. When your copy uses the exact phrases your customer uses in their head, they feel understood — not sold to. Understanding = trust = conversion."
  }
];
