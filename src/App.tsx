import { useEffect, useState } from "react";
import "./App.css";
import Card from "./components/card/Card";
import CardButtons from "./components/card/CardButtons";
import CardContent from "./components/card/CardContent";

export type Quote = {
  quote: string;
  author: string;
};

const quotes: Quote[] = [
  {
    quote:
      "First, have a definite, clear practical ideal; a goal, an objective. Second, have the necessary means to achieve your ends; wisdom, money, materials, and methods. Third, adjust all your means to that end.",
    author: "Aristotle",
  },
  {
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic ipsam laboriosam corporis cumque labore ipsa maiores. Quo temporibus quidem consectetur quos natus iure deleniti earum culpa minima, velit aspernatur quae!",
    author: "Lorem",
  },
  {
    quote: "If you can dream it, you can achieve it.",
    author: "Zig Ziglar",
  },
];

function generateRandomColor() {
  const red = Math.floor(Math.random() * 150);
  const green = Math.floor(Math.random() * 150);
  const blue = Math.floor(Math.random() * 150);

  return `rgb(${red},${green},${blue})`;
}

function App() {
  const [currentColor, setCurrentColor] = useState<string>(
    generateRandomColor()
  );
  const [currentQuote, setCurrentQuote] = useState<Quote>();

  const handleNewQuote = () => {
    setCurrentColor(generateRandomColor());
    setCurrentQuote(quotes[Math.floor(Math.random() * quotes.length)]);
  };

  useEffect(() => {
    handleNewQuote();
  }, []);
  return (
    <div
      className="container"
      style={{ backgroundColor: currentColor, color: currentColor }}
    >
      <Card>
        <CardContent selectedQuote={currentQuote} />
        <CardButtons
          currentColor={currentColor}
          handleNewQuote={handleNewQuote}
        />
      </Card>
    </div>
  );
}

export default App;
