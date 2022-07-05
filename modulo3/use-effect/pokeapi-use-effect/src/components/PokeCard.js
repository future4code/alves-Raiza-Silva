import axios from "axios";
import React, {useState,useEffect} from "react";


function PokeCard(props) {
  // Passo 4b
  // Implementa suas variáveis de estado aqui.
 const [ pokemon, setPokemon] = useState({})

  // Passo 4c
    useEffect(() => {
    pegaPokemon(props.pokeName)
  })

  // Passo 4c
     useEffect(() => {
    pegaPokemon()
   }, [props.pokeName])
  

  // Passo 4c
   const pegaPokemon = (pokeName) => {
     axios
     .get(`https://pokeapi.co/api/v2/pokemon/${pokeName}`)
     .then((res) => {
      setPokemon(res.data);
     })
     .catch((err) => {
       console.log(err);
     });
 };

  return (
    <figure>
      {/* Passo 4d */}
      <strong>{pokemon.name && pokemon.name.toUpperCase()}</strong>
      {/* Passo 4d */}
      <p>{pokemon.weight}</p>
      {/* Passo 4d */}
      <p>{pokemon.types && pokemon.types[0].type.name}</p>
      {/* Passo 4d */}
      {pokemon.sprites  && (
        <img src={pokemon.sprites.front_default} alt={pokemon.name} />
      )}
    </figure>
  );
};

export default PokeCard;
