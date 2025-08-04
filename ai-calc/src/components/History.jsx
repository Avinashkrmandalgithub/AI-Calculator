import { useHistory } from "../context/HistoryContext";

const History = () => {
  const { history, clearHistory } = useHistory();

  return (
    <div className="bg-white shadow-lg rounded-2xl p-6 w-full min-h-[420px] flex flex-col justify-between">
      <div className="text-center mb-4">
        <h1 className="text-2xl font-bold text-rose-600">🕓 History</h1>
      </div>

      <div className="flex-grow text-gray-700 space-y-2 overflow-y-auto max-h-60">
        {history.length === 0 ? (
          <p className="text-center text-gray-500">No calculations yet.</p>
        ) : (
          history.map((item, index) => (
            <div key={index} className="border-b pb-2">
              <p className="text-sm font-semibold">{item.type === "ai" ? "🧠 Prompt" : "🧮 Calc"}:</p>
              <p className="text-sm">Q: {item.question}</p>
              <p className="text-sm text-green-700 whitespace-pre-line">A: {item.answer}</p>
            </div>
          ))
        )}
      </div>

      <div className="mt-6">
        <button
          onClick={clearHistory}
          className="w-full bg-rose-500 text-white px-4 py-2 rounded-lg hover:bg-rose-600 transition duration-200"
        >
          Clear History
        </button>
      </div>
    </div>
  );
};

export default History;