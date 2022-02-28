import "./RecipeList.css";
import {Link} from "react-router-dom";
import {useTheme} from "../../hooks/useTheme";
import deleteIcon from '../../assets/delete.svg';
import {projectFirestore} from "../../firebase/config";


function RecipeList({recipes}) {

  const {mode} = useTheme();

  if(recipes.length === 0) {
    return <div className="error">No Recipes found</div>
  }

  let handleDelete = (id) => {
    projectFirestore.collection("recipes").doc(id).delete()
  }

  return (
      <div className="RecipeList">
        {recipes.map(recipe => (
            <div key={recipe.id} className={`card ${mode}`}>
              <h3>{recipe.title}</h3>
              <p>{recipe.cookingTime} to make</p>
              <div>{recipe.method.substring(0, 100)}...</div>
              <Link to={`/recipes/${recipe.id}`}>Cook this</Link>
              <img
                  className="delete"
                src={deleteIcon}
                  onClick={() => handleDelete(recipe.id)}
                />
            </div>
        ))}
      </div>
  );
}

export default RecipeList;
