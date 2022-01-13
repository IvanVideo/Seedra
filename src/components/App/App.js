import react from "react";
import '../../vendor/fonts.css';
import Header from '../Header/Header';
import Bunner from '../Bunner/Bunner';
import Publicity from '../Publicity/Publicity';
import Categories from '../Categories/Categories';


function App() {
  return (
    <div>
      <Header />
      <Bunner />
      <Publicity />
      <Categories />
    </div>
  );
}

export default App;
