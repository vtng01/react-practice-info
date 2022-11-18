import bulbasaurImg from "./images/bulbasaur.jpg";
import "./Showcase.css";

function Showcase() {
  const favPokemon = "Bulbasaur";
  const pokeCharacteristics = {
    type: "Grass",
    move: "Vine Whip"
  };
  return (
    <div className="info">
      <h1>{favPokemon}'s Showcase Component</h1>
      <img src={bulbasaurImg} alt={favPokemon}></img>
      <h2>
        {favPokemon}'s type is{" "}
        <span className="type">{pokeCharacteristics.type}</span> and one of
        their moves is <span className="move">{pokeCharacteristics.move}</span>
      </h2>
    </div>
  );
}

export default Showcase;
