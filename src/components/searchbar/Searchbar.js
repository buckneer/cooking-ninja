import "./Searchbar.css";
import {useState} from "react";
import {useNavigate} from "react-router-dom";


function Searchbar() {

  const [term, setTerm] = useState("")
  let navigate = useNavigate()

  let handleSubmit = (e) => {
    e.preventDefault()
    navigate(`/search?q=${term}`)
  }

  return (
      <div className="Searchbar">
        <form onSubmit={handleSubmit}>
          <label htmlFor="search">Search</label>
          <input
              type="text"
              id="search"
              onChange={(e) => {setTerm(e.target.value)}}
              value={term}
          />
        </form>
      </div>
  );
}

export default Searchbar;
