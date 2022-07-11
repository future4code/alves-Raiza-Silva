import axios from "axios"
import PokeCard from "./components/PokeCard"
import React, {useState,useEffect} from "react"
import styled from "styled-components"
import Img from "./components/img/pok.png"

export const Body =styled.div`
 display:flex;
 margin:0;
border: none;
flex-direction: column;
justify-content: center;
align-items: center;
background-image:url(${Img})
`
export const Header =styled.header`
font-family: monospace;
`

function App() {
  // Passo 3b
  // Implemente suas variáveis de estado aqui.
  const [pokeList, setPokeList]= useState([])
  const [pokeName, setPokeName] = useState("")



  // Passo 3c
 const getPegaPoke = () => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon/?limit=151")
      .then((res) => {
       setPokeList(res.data.results );
      })
      .catch((err) => {
        console.log(err);
     });
   }

   useEffect(() => {
    getPegaPoke()
  }, [])

  // Passo 3a
  const changePokeName = (event) => {
   setPokeName(event.target.value);
  };

  // Passo 3e
  const pokeOptions = pokeList.map(pokemon => {
   return (
     <option key={pokemon.name} value={pokemon.name}>
       {pokemon.name}
     </option>
   );
   });

  // Passo 4a
  const pokemon =  pokeName && <PokeCard  pokeName={pokeName}/>;

  return (
    < Body>
      <Header>
        <h1>Exibir Pokémon</h1>
      </Header>
      <hr />
      <nav>
        <label htmlFor={"select-pokemon"}>Selecione um pokemon: </label>
         {/* Passo 3a */}
        <select id={"select-pokemon"} onChange={changePokeName}>
          <option value={""}>Nenhum</option>
          {/* Passo 3e */}
           {pokeOptions}
        </select>
      </nav>
      <main>
        {pokemon}
      </main>
    </ Body>
  );
};

export default App;
