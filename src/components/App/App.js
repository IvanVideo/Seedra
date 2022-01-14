import react from "react";
import { Routes, Route } from 'react-router-dom';
import '../../vendor/fonts.css';
import Header from '../Header/Header';
import Bunner from '../Bunner/Bunner';
import Publicity from '../Publicity/Publicity';
import Products from '../Products/Products';
import Blog from '../Blog/Blog';
import Slider from '../Slider/Slider';
import Recommendations from '../Recommendations/Recommendations';
import Footer from '../Footer/Footer';
import BlogPage from '../BlogPage/BlogPage';
import Topic from '../Topic/Topic';


function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Topic />}>

        {/* <BlogPage /> 
        <Bunner />
        <Publicity />
        <Products />
        <Blog />
        <Slider />
        <Recommendations /> */}
        </Route>

      </Routes>
      <Footer />
    </div>
  );
}

export default App;
