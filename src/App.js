import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

// Styles
import './App.css';

// Pages
import Home from "./pages/home/Home";
import Search from "./pages/search/Search";
import Create from "./pages/create/Create";
import Recipe from "./pages/recipe/Recipe";
import Navbar from "./components/navbar/Navbar";
import ThemeSelector from "./components/themeselector/ThemeSelector";
import {useTheme} from "./hooks/useTheme";

function App() {

  let {mode} = useTheme();


  return (
    <div className={`App ${mode}`}>


      <Router>
        <Navbar />
        <ThemeSelector />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/search" element={<Search />}/>
          <Route path="/create/" element={<Create />} />
          <Route path="/recipes/:id" element={<Recipe />} />
        </Routes>

      </Router>
    </div>
  );
}

export default App;
