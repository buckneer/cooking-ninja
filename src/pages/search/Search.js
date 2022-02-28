import "./Search.css";
import {useLocation} from "react-router-dom";
import {useFetch} from "../../hooks/useFetch";
import RecipeList from "../../components/recipelist/RecipeList";


function Search() {

  let queryString = useLocation().search;
  let searchParams = new URLSearchParams(queryString);
  const query = searchParams.get("q");

  let url = "http://localhost:3000/recipes?q=" + query;

  let {error, isPending, data} = useFetch(url);



  return (
      <div className="Search">
        <h2 className="page-title">Recipes including: "{query}"</h2>
        {error && <p className="error">{error}</p>}
        {isPending && <p className="loading">Loading...</p>}
        {data && <RecipeList recipes={data} />}
      </div>
  );
}

export default Search;
