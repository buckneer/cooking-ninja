import "./Navbar.css";
import {Link} from "react-router-dom";
import Searchbar from "../searchbar/Searchbar";
import {useTheme} from "../../hooks/useTheme";


function Navbar() {

  let {color, changeColor} = useTheme();

  return (
      <div className="Navbar" style={{background: color}}>
        <nav>
          <Link to="/" className="brand">
            <h1 >Cooking Ninja</h1>
          </Link>
          <Searchbar />
          <Link to="/create">Create Recipe</Link>
        </nav>
      </div>
  );
}

export default Navbar;
