import "./App.css";
import { useEffect, useState } from "react";
import videoOne from "./foodOne.mp4";
import MyRecipesComponent from "./MyRecipesComponent.js";

function App() {
  const MY_ID = "3b347855";
  const MY_KEY = "8507efa972d9c56090fad75700f92672";

  const [mySearch, setMySearch] = useState("");
  const [myRecipes, setMyRecipes] = useState([]);
  const [wordSubmitted, setWordSubmitted] = useState("avocado");

  useEffect(() => {
    getData();
  }, [wordSubmitted]);

  async function getData() {
    const response = await fetch(
      `https://api.edamam.com/api/recipes/v2?type=public&q=${wordSubmitted}&app_id=${MY_ID}&app_key=${MY_KEY}`
    );
    const data = await response.json();

    setMyRecipes(data.hits);
    console.log(data);
  }

  const myRecipeSearch = (e) => {
    setMySearch(e.target.value);
  };
  const finalSearch = (e) => {
    e.preventDefault();
    setWordSubmitted(mySearch);
  };

  return (
    <div className="App">
      <div className="container">
        <video autoPlay muted loop>
          <source src={videoOne} type="video/mp4" />
        </video>

        <h1>Find a Recipe</h1>
      </div>

      <form onSubmit={finalSearch} className="containerSearch">
        <input
          className="search"
          placeholder="Search..."
          onChange={myRecipeSearch}
          value={mySearch}
        ></input>
        <button>
          <img
            src="https://img.icons8.com/external-prettycons-flat-prettycons/512/external-search-travel-prettycons-flat-prettycons.png"
            className="icon"
            alt="icon"
          />
        </button>
      </form>

      {myRecipes.map((element, index) => (
        <MyRecipesComponent
          key={index}
          label={element.recipe.label}
          image={element.recipe.image}
          calories={element.recipe.calories}
          ingredients={element.recipe.ingredientLines}
          cuisine={element.recipe.cuisineType}
          health={element.recipe.dishType}
          chole={element.recipe.totalNutrients.CHOLE.quantity}
          fat={element.recipe.totalNutrients.FAT.quantity}
          chocdf={element.recipe.totalNutrients.CHOCDF.quantity}
          iron={element.recipe.totalNutrients.FE.quantity}
          thia={element.recipe.totalNutrients.THIA.quantity}
          ribf={element.recipe.totalNutrients.RIBF.quantity}
          tocpha={element.recipe.totalNutrients.TOCPHA.quantity}
          vitb6a={element.recipe.totalNutrients.VITB6A.quantity}
          vitb12={element.recipe.totalNutrients.VITB12.quantity}
          vitc={element.recipe.totalNutrients.VITC.quantity}
          sugars={element.recipe.totalNutrients.SUGAR.quantity}
          protein={element.recipe.totalNutrients.PROCNT.quantity}
          fiber={element.recipe.totalNutrients.FIBTG.quantity}
          fatrn={element.recipe.totalNutrients.FATRN.quantity}
        />
      ))}
    </div>
  );
}

export default App;
