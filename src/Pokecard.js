/** Shows a single Pokemon, with their name, image, and type.*/

function Pokecard({ id, name, type, base_experience }){

  const imgUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`

  return (
    <div>
      <p> {name} </p>
      <p><img src={imgUrl} alt="pokemon"/></p>
      <p>type:{type}</p>
      <p>EXP:{base_experience}</p>
    </div>
    )
}

export default Pokecard;