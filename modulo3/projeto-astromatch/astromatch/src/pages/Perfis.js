
import React, { useState, useEffect } from "react";
import axios from "axios"
import styled from "styled-components"

export const Foto = styled.img`
width: 200px;
`

function Perfis() {

    const [perfil, setPerfil] = useState({})


    useEffect(() => {
        getProfileToChoose()
    }, [])

    const getProfileToChoose = () => {
        axios
            .get("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:aluno/person")
            .then((res) => {
                setPerfil(res.data.profile);
                console.log(res.data.profile)
            })
            .catch((err) => {
                console.log(err.message)
            });
    }


    return (
        <div>
            <Foto   
             src={perfil.photo} alt={perfil.photo_alt}></ Foto>
            <p>{perfil.name},{perfil.age}</p>
            <p>{perfil.bio}</p>
            <button onClick={() => getProfileToChoose()}>avançar</button>
        </div>
    )

}
export default Perfis