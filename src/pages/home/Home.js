import "./Home.css";
import {useFetch} from "../../hooks/useFetch";
import RecipeList from "../../components/recipelist/RecipeList";


function Home() {

  const {data : recipes, isPending, error} = useFetch("http://localhost:3000/recipes");

  return (
      <div className="Home">
        {error && <p className="error">{error}</p>}
        {isPending && <p className="loading">Loading ...</p> }
        {recipes && <RecipeList recipes={recipes} />}
      </div>
  );
}

export default Home;
