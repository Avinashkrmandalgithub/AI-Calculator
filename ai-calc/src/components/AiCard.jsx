import React, { useState } from "react";
import { generateAiResponse } from "../utils/gemini";
import { useHistory } from '../context/HistoryContext';

const AiCard = () => {
  const { addToHistory } = useHistory();
  const [input, setInput] = useState("");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);

  const handleGenerate = async () => {
    if (!input.trim()) return;
    setLoading(true);
    const data = await generateAiResponse(input);
    setResponse(data);
    addToHistory({ type: "ai", question: input, answer: data });
    setInput("");
    setLoading(false);
  };

  return (
    <div className="bg-white shadow-lg rounded-2xl p-6 w-full min-h-[420px] flex flex-col justify-between">
      <div className="text-center mb-4">
        <h1 className="text-2xl font-bold text-indigo-600">✨ AI Features</h1>
      </div>

      <div className="flex-grow space-y-4 text-gray-700">
        <p className="font-medium">Solve a Word Problem</p>
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="e.g. I have 15 mangoes and I gave away 7. How many are left?"
          className="w-full h-32 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 resize-none"
        ></textarea>
      </div>

      <div className="mt-6">
        <button
          onClick={handleGenerate}
          className="w-full bg-indigo-500 text-white px-4 py-2 rounded-lg hover:bg-indigo-600 transition duration-200"
          disabled={loading}
        >
          {loading ? "Thinking..." : "Solve for me ✨"}
        </button>
        {/* {response && (
          <p className="mt-4 text-green-700 text-sm">AI: {response}</p>
        )} */}
      </div>
    </div>
  );
};

export default AiCard;