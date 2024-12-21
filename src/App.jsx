import "./App.css";
import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import YourNextWatch from "./components/YourNextWatch.jsx";
import PosterSlider from "./components/PosterSlider.jsx";

function App() {
  return (
    <div className="relative">
      <Header />
      <Hero />
      <YourNextWatch />
      <PosterSlider />
    </div>
  );
}

export default App;
