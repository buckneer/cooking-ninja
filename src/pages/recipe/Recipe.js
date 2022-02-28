import "./Recipe.css";
import {useParams} from "react-router-dom";
import {useTheme} from "../../hooks/useTheme";
import {useEffect, useState} from "react";
import {projectFirestore} from "../../firebase/config";


function Recipe() {

  let {id} = useParams();

  let [recipe, setRecipe] = useState(null);
  let [isPending, setIsPending] = useState(null);
  let [error, setError] = useState(null);

  useEffect(() => {
    setIsPending(true);
    projectFirestore.collection('recipes').doc(id).get().then(
        (item) => {
          if(item.exists) {
            setIsPending(false)
            setRecipe(item.data())
          } else {
            setIsPending(false)
            setError("Doesn't Exist");
          }
        }
    )
  }, [id])

  let {mode} = useTheme();

  let handleUpdate = () => {
    projectFirestore.collection("recipe").doc(id).update({
      title: "Something completely different"
    })
  }

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
              <button onClick={handleUpdate}>Update me</button>
            </>
        )}
      </div>
  );
}

export default Recipe;
