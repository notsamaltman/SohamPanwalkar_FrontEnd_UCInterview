import { useState } from 'react';

export default function App() {
  const [currentLife, setCurrentLife] = useState(7); // Placeholder
  const [difference, setDifference] = useState(-1);
  let number = Math.random()*100;

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col justify-center items-center p-4">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 text-center">Number Guesser Game</h1>

      <div className="flex gap-2 mb-6 flex-wrap justify-center">
        {Array.from({ length: 7 }).map((_, idx) => (
          <div
            key={idx}
            className={`
              w-6 h-6 sm:w-8 sm:h-8 rounded 
              ${idx < currentLife ? 'bg-red-500 animate-pulse' : 'bg-gray-500'}
            `}
          />
        ))}
      </div>

      <div className="flex flex-col sm:flex-row items-center gap-4 mb-6 w-full max-w-md">
        <input
          type="number"
          placeholder="Enter a number"
          className="w-full px-4 py-2 rounded bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-red-500"
        />
        <button
          className="px-6 py-2 bg-red-600 hover:bg-red-700 rounded transition duration-300"
        onClick={()=>{setCurrentLife(currentLife-1)}}>
          Guess
        </button>
      </div>

      <div className="w-full max-w-md bg-gray-800 p-4 rounded text-center border border-gray-600">
        <Hint difference={difference}/>
      </div>
    </div>
  );
}
function Hint({ difference }) {
  if (difference === -1) {
    return <p className="text-lg">Created a random number</p>;
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
