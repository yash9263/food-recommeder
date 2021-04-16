import "./styles.css";
import foodDictionary from "./foodDictionary";
import { useState } from "react";

export default function App() {
  const [foodGenre, setFoodGenre] = useState(foodDictionary["Snacks"]);
  var foodsType = Object.keys(foodDictionary);
  function clickHandler(type) {
    setFoodGenre(foodDictionary[type]);
  }
  return (
    <div className="App">
      <h1 className="header">
        Food that will make you go yumm
        <span role="img" aria-label="yummy">
          🤤
        </span>
      </h1>
      <div className="geners">
        {foodsType.map((type) => (
          <button
            className="genre"
            key={type}
            onClick={() => clickHandler(type)}
          >
            {type}
          </button>
        ))}
      </div>
      <div className="foods">
        {foodGenre.map((food) => (
          <div className="food" key={food.name}>
            {food.name}
            <br />
            {food.rating}
          </div>
        ))}
      </div>
    </div>
  );
}
