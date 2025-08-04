import './App.css';
import Navbar from './components/Navbar';
import AiCard from './components/AiCard';
import Calculator from './components/Calculator';
import History from './components/History';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <div className="pt-24 px-4">
        <div className="flex flex-col xl:flex-row items-center xl:items-start justify-center gap-6 w-full max-w-7xl mx-auto">
          <div className="w-full">
            <AiCard />
          </div>
          <div className="w-full">
            <Calculator />
          </div>
          <div className="w-full">
            <History />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
