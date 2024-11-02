const quotes = [
  {
    quote: "Coding like poetry should be short and concise.",
    author : "Santosh Kalwar",
  },
  {
    quote: "It’s not a bug; it’s an undocumented feature.",
    author : "Anonymous",
  },
  {
    quote: "First, solve the problem. Then, write the code.",
    author : "John Johnson",
  },
  {
    quote: "Code is like humor. When you have to explain it, it’s bad.",
    author : "Cory House",
  },
  {
    quote: "Make it work, make it right, make it fast.",
    author : "Kent Beck",
  },
  {
    quote: "Clean code always looks like it was written by someone who cares.",
    author : "Robert C. Martin",
  },
  {
    quote: "Of course, bad code can be cleaned up. But it’s very expensive.",
    author : "Robert C. Martin",
  },
  {
    quote: "When I wrote this code, only God and I understood what I did. Now only God knows.",
    author : "Anonymous",
  },
  {
    quote: "Experience is the name everyone gives to their mistakes.",
    author : "Oscar Wilde",
  },
  {
    quote: "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    author : "Martin Fowler",
  },
  {
    quote: "Everybody should learn to program a computer because it teaches you how to think.",
    author : "Steve Jobs",
  },
  {
    quote: "There is always one more bug to fix.",
    author : "Ellen Ullman",
  }
]

const quoteElement = document.querySelector(".quote-container span:first-child");
const authorElement = document.querySelector(".quote-container span:last-child");


function generateQuote() {
  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
  quoteElement.textContent = randomQuote.quote;
  authorElement.textContent = `- ${randomQuote.author}`;
}

// Initial quote generation
generateQuote();

