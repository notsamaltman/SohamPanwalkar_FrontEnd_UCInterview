import { useState } from "react";

export default function App() {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [bmi, setBmi] = useState(null);
  const [category, setCategory] = useState("");

  const calculateBMI = () => {
    if (!height || !weight) return;

    const h = parseFloat(height) / 100;
    const w = parseFloat(weight);
    const bmiValue = w / (h * h);
    setBmi(bmiValue.toFixed(2));
    setCategory(getCategory(bmiValue));
  };

  const getCategory = (bmi) => {
    if (bmi < 18.5) return "Underweight";
    else if (bmi < 24.9) return "Normal";
    else if (bmi < 29.9) return "Overweight";
    else return "Obese";
  };

  const getColor = () => {
    switch (category) {
      case "Underweight":
        return "text-blue-500";
      case "Normal":
        return "text-green-500";
      case "Overweight":
        return "text-yellow-500";
      case "Obese":
        return "text-red-500";
      default:
        return "text-white";
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-gray-800 rounded-lg p-6 shadow-lg">
        <h1 className="text-2xl sm:text-3xl font-bold text-white text-center mb-6">BMI Calculator</h1>

        <div className="flex flex-col gap-4">
          <input
            type="number"
            placeholder="Height (cm)"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            className="p-3 rounded bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <input
            type="number"
            placeholder="Weight (kg)"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            className="p-3 rounded bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <button
            onClick={calculateBMI}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded transition duration-300"
          >
            Calculate BMI
          </button>
        </div>

        {bmi && (
          <div className="mt-6 text-center">
            <p className="text-lg text-white">Your BMI: <span className="font-bold">{bmi}</span></p>
            <p className={`text-xl font-semibold mt-2 ${getColor()}`}>{category}</p>
          </div>
        )}
      </div>
    </div>
  );
}
