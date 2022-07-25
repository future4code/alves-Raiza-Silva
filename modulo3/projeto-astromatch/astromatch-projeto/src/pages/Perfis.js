import React, { useState, useEffect } from "react";
import axios from "axios"
import styled from "styled-components"
import deslike from "../img/deslike.png"
import like from "../img/like.png"

export const Imagem = styled.img`
    height: 100%;
    width: 100%;
    object-fit: contain, cover;
    border-radius: 10px;
    box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;    
    margin-top: 0.5rem;
    transition: all 0.7s ease-in;
  ${(props) => props.imgEffect && "transform: translate(15rem, 5rem) rotate(15deg)"};
  ${(props) => props.imgEffect && "opacity: 1"};
`
export const BotaoLike = styled.button`
  display: contents;
  

`
export const  DivBotao = styled.div`
 display: flex;
 justify-content: space-around;

`


function Perfis() {

  const [perfil, setPerfil] = useState({})

  useEffect(() => {
    getProfileToChoose()
  }, [])

  const getProfileToChoose = () => {
    axios
      .get("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:raiza/person")
      .then((res) => {
        setPerfil(res.data.profile);
      })
      .catch((err) => {
        console.log(err.message)
      });
  }

  const postChoosePerson = (id) => {
    const novalista = {
      id: id,
      choice: true
    }
    axios.post(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/raiza/choose-person`, novalista)
      .then((response) => {
        if (response.data.profile) {
          alert("vc deu match!")
        }
        getProfileToChoose()
      })
      .catch((err) => {
        console.log(err)
      })
  }



  return (
    <div>
      <Imagem src={perfil.photo} alt={perfil.photo_alt}></Imagem>
      <div>

        <div>
          <p>{perfil.name},{perfil.age}</p>
          <span>{perfil.bio}</span>
        </div>
      </div>

    < DivBotao>
       <BotaoLike  onClick={() => getProfileToChoose()}><img src={deslike} width='80px' alt={"nao gostei"} /></BotaoLike >
       <BotaoLike  onClick={() => postChoosePerson()}><img src={like}  width='80px' alt={"like"} /></BotaoLike >
   
    </ DivBotao>
     
    </div>


  )
}

export default Perfis