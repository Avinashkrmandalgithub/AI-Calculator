import { useContext, useState, createContext } from "react";

const HistoryContext = createContext();

export const useHistory = () => useContext(HistoryContext);

export const HistoryProvider = ({ children }) => {
  const [history, setHistory] = useState([]);

  // ✅ Fix: Add new item to history instead of clearing it
  const addToHistory = (item) => {
    setHistory((prev) => [item, ...prev]); // Add new item to the top
  };

  // ✅ Provide clear function
  const clearHistory = () => {
    setHistory([]);
  };

  return (
    <HistoryContext.Provider value={{ history, addToHistory, clearHistory }}>
      {children}
    </HistoryContext.Provider>
  );
};
