import React, { useState, useEffect } from 'react'
import axios from "axios"

function Matches() {

  const [listaMatch, setListaMatch] = useState([])


  useEffect(() => {
    MeusMatch()
  }, [listaMatch])


  const MeusMatch = () => {
    axios
      .get("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/raiza/matches")
      .then((response) => {
        setListaMatch(response.data.matches);
      })
      .catch((err) => {
        console.log(err);
      });
  }


  const redenrizarMatch = listaMatch.map(match => {
    return (
      <div key={match.id}>
        <img width={'150px'} src={match.photo} alt='Perfil' />
        <p>{match.name}</p>
        <p>{match.age}</p>


      </div>
    )

  })
  const clear = () => {
    axios.put("")
      .then((response) => {
      })
      .catch((error) => {
        console.log(error)
      })
  }

  const onClickClear = () => {
    clear()
    alert("volta ao inico")
    MeusMatch()
  }

  return (
    <div>
      {redenrizarMatch}
      <button onClick={onClickClear}>desfazer match</button>
    </div>
  )
}

export default Matches