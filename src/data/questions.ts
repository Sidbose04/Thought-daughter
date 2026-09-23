export interface QuestionCard {
  id: number;
  category: "Intimacy" | "Reflection" | "Longing" | "Shadow" | "Devotion" | "Presence";
  frontNum: string;
  theme: string;
  frontImage: string;
  backImage: string;
  quote: string;
  subtext: string;
}

export const QUESTION_CARDS: QuestionCard[] = [
  {
    id: 1,
    category: "Intimacy",
    frontNum: "01",
    theme: "Intimacy & Sanctuary",
    frontImage: "/images/cards/CARD DECK QUESTIONS 1.png",
    backImage: "/images/cards/Card.png",
    quote: "What truth have you kept gently concealed, waiting for a room quiet enough to hear it?",
    subtext: "Touch or click to reveal the inquiry"
  },
  {
    id: 2,
    category: "Reflection",
    frontNum: "02",
    theme: "Memory & Becoming",
    frontImage: "/images/cards/CARD DECK QUESTIONS 2.png",
    backImage: "/images/cards/Card.png",
    quote: "Which version of yourself did you mourn before anyone else noticed she was gone?",
    subtext: "Touch or click to reveal the inquiry"
  },
  {
    id: 3,
    category: "Longing",
    frontNum: "03",
    theme: "Desire & Distance",
    frontImage: "/images/cards/CARD DECK QUESTIONS 3.png",
    backImage: "/images/cards/Card.png",
    quote: "What are you seeking in another that you have hesitated to forgive in yourself?",
    subtext: "Touch or click to reveal the inquiry"
  },
  {
    id: 4,
    category: "Shadow",
    frontNum: "04",
    theme: "Ache & Surrender",
    frontImage: "/images/cards/CARD DECK QUESTIONS 4.png",
    backImage: "/images/cards/Card.png",
    quote: "If love requires no defense, what armor are you still carrying into quiet rooms?",
    subtext: "Touch or click to reveal the inquiry"
  },
  {
    id: 5,
    category: "Devotion",
    frontNum: "05",
    theme: "Reverence & Time",
    frontImage: "/images/cards/CARD DECK QUESTIONS 5.png",
    backImage: "/images/cards/Card.png",
    quote: "Where does tenderness feel like risk, and how can we soften toward it tonight?",
    subtext: "Touch or click to reveal the inquiry"
  },
  {
    id: 6,
    category: "Presence",
    frontNum: "06",
    theme: "Arrival & Stillness",
    frontImage: "/images/cards/CARD DECK QUESTIONS 6.png",
    backImage: "/images/cards/Card.png",
    quote: "When was the last time you let silence answer a question you were afraid to speak?",
    subtext: "Touch or click to reveal the inquiry"
  }
];

export const DECK_SPECS = [
  { label: "Edition", value: "First Printing — 1,000 numbered sets" },
  { label: "Paper stock", value: "350gsm FSC-certified cotton-linen blend" },
  { label: "Card count", value: "64 contemplative prompt cards + 4 ritual guides" },
  { label: "Finish", value: "Matte tactile varnish, blind debossed typography" },
  { label: "Enclosure", value: "Rigid drawer box lined with handmade paper" },
  { label: "Crafted in", value: "Milan, Italy & Kyoto, Japan" },
];
