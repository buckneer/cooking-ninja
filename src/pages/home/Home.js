import "./Home.css";
import RecipeList from "../../components/recipelist/RecipeList";
import {projectFirestore} from "../../firebase/config";
import {useEffect, useState} from "react";


function Home() {

  // const {data : recipes, isPending, error} = useFetch("http://localhost:3000/recipes");

  let [data, setData] = useState(null);
  let [isPending, setIsPending] = useState(null);
  let [error, setError] = useState(null);


  useEffect(() => {
    setIsPending(true)
    const unsub = projectFirestore.collection("recipes").onSnapshot(
        (snapshot) => {
          if(snapshot.empty) {
            setError("No Recipes to load");
            setIsPending(false)
          } else {
            let results = []
            snapshot.docs.forEach(item => {
              results.push({ id: item.id, ...item.data() });
            })

            setData(results)
            setIsPending(false);
          }
        },
        (err) => {
          setError(err)
          setIsPending(false)
        }
    )

    return () => unsub()
  }, [])

  return (
      <div className="Home">
        {error && <p className="error">{error}</p>}
        {isPending && <p className="loading">Loading ...</p> }
        {data && <RecipeList recipes={data} />}
      </div>
  );
}

export default Home;
