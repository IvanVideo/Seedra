import react from "react";
import '../../vendor/fonts.css';
import Header from '../Header/Header';
import Bunner from '../Bunner/Bunner';
import Publicity from '../Publicity/Publicity';
import Products from '../Products/Products';
import Blog from '../Blog/Blog';
import Slider from '../Slider/Slider';

function App() {
  return (
    <div>
      <Header />
      <Bunner />
      <Publicity />
      <Products />
      <Blog />
      <Slider />
    </div>
  );
}

export default App;
