import React from 'react'
import {useNavigate} from "react-router-dom"
import {goBack, goToCreateTripPage,} from "../Routes/coordenita"
import { useEffect } from "react";

const useProtectedPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token === null) {
      console.log("Não está logado");
      navigate.push("/login");
    }
  }, []);
};


function AdminHomePage() {
  const navigate = useNavigate();

 useProtectedPage();


  return (
    <div>

      <div>
        <h3> Para o administrador ver a lista de viagens e poder deletá-las ou acessar o detalhe de cada uma delas</h3>
        <button onClick={()=>goBack(navigate)}>voltar</button>
        <button onClick={()=>goToCreateTripPage(navigate)}>Criar Viagem</button>
        <button onClick={()=>(navigate)}>Loungt</button>
        
      </div>
    </div>
  )
}

export default AdminHomePage