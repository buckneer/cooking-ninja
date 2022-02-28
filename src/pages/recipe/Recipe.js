import "./Recipe.css";
import {useParams} from "react-router-dom";
import {useFetch} from "../../hooks/useFetch";
import {useTheme} from "../../hooks/useTheme";


function Recipe() {

  let {id} = useParams();


  let url = "http://localhost:3000/recipes/" + id;

  let {data: recipe, isPending, error} = useFetch(url);

  let {mode} = useTheme();

  return (
      <div className={`Recipe ${mode}`}>
        {error && <p className="error">{error}</p>}
        {isPending && <p className="loading">Loading...</p> }
        {recipe && (
            <>
              <h2 className="page-title">{recipe.title}</h2>
              <p>Takes {recipe.cookingTime} to cook.</p>
              <ul>
                {recipe.ingredients.map(ing => <li key={ing}>{ing}</li>)}
              </ul>
              <p className="method">{recipe.method}</p>
            </>
        )}
      </div>
  );
}

export default Recipe;
