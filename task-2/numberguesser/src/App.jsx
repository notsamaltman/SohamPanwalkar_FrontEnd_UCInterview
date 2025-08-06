import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";

export default function App() {
  const [number] = useState(() => {
    const value = Math.floor(Math.random() * 100);
    console.log("Generated number:", value);
    return value;
  });

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home number={number} />} />
      </Routes>
    </Router>
  );
}

function Hint({ difference }) {
  if (difference === -1) {
    return <p className="text-lg">Created a random number</p>;
  } else if (difference === 0) {
    return <p className="text-lg">You guessed it right!</p>;
  } else if (difference <= 3) {
    return <p className="text-lg">You are very very close</p>;
  } else if (difference <= 5) {
    return <p className="text-lg">You are close</p>;
  } else if (difference <= 10) {
    return <p className="text-lg">You are kind of close</p>;
  } else {
    return <p className="text-lg">You are far</p>;
  }
}

function Home({ number }) {
  const [currentLife, setCurrentLife] = useState(7);
  const [difference, setDifference] = useState(-1);
  const [input, setInputValue] = useState('');
  const [isWin, setIsWin] = useState(false);
  const navigate = useNavigate();

  const handleGuess = () => {
    const guessed = parseInt(input);
    if (isNaN(guessed)) return;

    const diff = Math.abs(number - guessed);
    setDifference(diff);

    if (guessed === number) {
      setIsWin(true);
      setCurrentLife(0);
    } else {
      setCurrentLife(prev => prev - 1);
    }
  };

  if (isWin) {
    return (
      <div className="min-h-screen bg-gray-900 text-white flex flex-col justify-center items-center p-4">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-center">You won!</h1>
        <p className="p-4 mb-4 text-xl">You correctly guessed the number {number}!</p>
        <button
          className="px-6 py-2 bg-red-600 hover:bg-red-700 rounded transition duration-300"
          onClick={() => navigate(0)}
        >
          Restart
        </button>
      </div>
    );
  }

  if (currentLife <= 0) {
    return (
      <div className="min-h-screen bg-gray-900 text-white flex flex-col justify-center items-center p-4">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-center">Game Over!</h1>
        <p className="p-4 mb-4 text-xl">All your lives are over. The number was {number}.</p>
        <button
          className="px-6 py-2 bg-red-600 hover:bg-red-700 rounded transition duration-300"
          onClick={() => navigate(0)}
        >
          Try Again
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col justify-center items-center p-4">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 text-center">Number Guesser Game</h1>

      <div className="flex gap-2 mb-6 flex-wrap justify-center">
        {Array.from({ length: 7 }).map((_, idx) => (
          <div
            key={idx}
            className={`w-6 h-6 sm:w-8 sm:h-8 rounded ${idx < currentLife ? 'bg-red-500 animate-pulse' : 'bg-gray-500'}`}
          />
        ))}
      </div>

      <div className="flex flex-col sm:flex-row items-center gap-4 mb-6 w-full max-w-md">
        <input
          type="number"
          placeholder="Enter a number"
          className="w-full px-4 py-2 rounded bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-red-500"
          value={input}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button
          className="px-6 py-2 bg-red-600 hover:bg-red-700 rounded transition duration-300"
          onClick={handleGuess}
        >
          Guess
        </button>
      </div>

      <div className="w-full max-w-md bg-gray-800 p-4 rounded text-center border border-gray-600">
        <Hint difference={difference} />
      </div>
    </div>
  );
}
