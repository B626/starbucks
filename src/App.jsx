import './App.css'
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import "./index.css";


function App() {
  return (
    <div className="bg-[#283E32] min-h-[100vh] overflow-hidden">
      <Header />
      <Hero />
    </div>
  );
}

export default App
