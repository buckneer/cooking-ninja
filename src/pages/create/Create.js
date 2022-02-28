import "./Create.css";
import {useRef, useState} from "react";
import {useNavigate} from "react-router-dom";
import {projectFirestore} from "../../firebase/config";


function Create() {

  let [title, setTitle] = useState('');
  let [method, setMethod] = useState('');
  let [cookingTime, setCookingTime] = useState('');
  let [newIngredient, setNewIngredient] = useState('');
  let [ingredients, setIngredients] = useState([]);
  let ingInput = useRef(null);
  let navigate = useNavigate();
  let [data, setData] = useState(null);
  // let [isPending, setIsPending] = useState(null);
  // let [error, setError] = useState(null);


  let handleSubmit = async (e) => {
    e.preventDefault();

    let doc = { title, ingredients, method, cookingTime: cookingTime + " minutes" }

    try {
      await projectFirestore.collection("recipes").add(doc)
      navigate("/")
    } catch (e) {
      console.log(e.message())
    }

  }

  let handleAdd = (e) => {
    e.preventDefault();
    let ing = newIngredient.trim();


    if(ing && !ingredients.includes(ing)) {
      setIngredients(prevIngredients => [...prevIngredients, ing]);
    }

    setNewIngredient("");
    ingInput.current.focus();
  }

  return (
      <div className="Create">
        <h2 className="page-title">Add a New Recipe</h2>

        <form onSubmit={handleSubmit}>


          <label>
            <span>Recipe Title</span>
            <input
                type="text"
                onChange={(e) => setTitle(e.target.value)}
                value={title}
                required
            />
          </label>

          <label>
            <span>Recipe Method</span>
            <textarea
              onChange={(e) => setMethod(e.target.value)}
              value={method}
              required
            />
          </label>


          <label>
            <span>Recipe Ingredients:</span>
            <div className="ingredients">
              <input type="text"
                     onChange={(e) => setNewIngredient(e.target.value)}
                     value={newIngredient}
                     ref={ingInput}
              />
              <button className="btn" onClick={handleAdd}>Add</button>
            </div>
          </label>
          <p>Current ingredients: {ingredients.map(i => <em key={i}>{i}, </em>)}</p>

          <label>
            <span>Cooking Time</span>
            <input
                type="number"
                onChange={(e) => setCookingTime(e.target.value)}
                value={cookingTime}
                required
            />
          </label>

          <button className="btn">
            Submit
          </button>



        </form>
      </div>
  );
}

export default Create;
