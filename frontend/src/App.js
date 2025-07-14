import './App.css';
import About from './components/About';
import FeaturedPlants from './components/FeaturedPlants';
import Header from './components/Header';
import Hero from './components/Hero';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero/>
      <FeaturedPlants />
      <About />
    </div>
  );
}

export default App;
