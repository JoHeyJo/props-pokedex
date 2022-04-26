import Pokecard from "./Pokecard.js";

/** Shows pokemon info */
function Pokedex( { pokemon }){
console.log(pokemon);
 return (
   <ul>
     { pokemon.map(p =><li>{
       <Pokecard
          id={p.id} 
          name={p.name} 
          type={p.type}
          base_experience={p.base_experience}
       />
     }</li>) }
   </ul>
 ); 

} 
export default Pokedex;