import React, { useState, useEffect } from 'react'
import { goBack } from "../Routes/coordenita"
import { useNavigate } from "react-router-dom"
import { axios } from 'axios'
import {ConjuntoForm,InputsFormulario,InputsSelect,BotaoAdm,ConjuntoFormAdm} from "../styledPages/styled"

  



function CreateTripPage() {
  const [name, setName]=useState("")
  const [planet, setPlanet]=useState("")
  const [date,setDate]=useState("")
  const [description, setDescription]=useState('')
  const [durationInDays, setDurationInDays]=useState('')

  const navigate = useNavigate();

 
 
  const onChangeName =(e)=>{
    setName(e.target.value)
  }
  const onChangePlanet =(e)=>{
    setPlanet(e.target.value)
  }
  const onChangeDate =(e)=>{
    setDate(e.target.value)
  }
  const onChangedescription =(e)=>{
    setDescription(e.target.value)
  }
  const onChangedurationInDays =(e)=>{
    setDurationInDays(e.target.value)
  }

  const CreateTrip =()=>{
    const body ={
      name:name,
      planet: planet,
      date: date,
      description: description,
      durationInDays: durationInDays
    }
       axios.
          post("https://us-central1-labenu-apis.cloudfunctions.net/labeX/raiza-gomes-alves/trips",
          body).then((res) => {
            console.log("deu certo" ,res.data)
          })
            
  }  


 
  return (
    <ConjuntoFormAdm>
      <h1> Formulário para o administrador criar uma nova viagem </h1>
      <ConjuntoForm >
        <InputsFormulario type="name"
        placeholder='nome'
        value={name}
        onChange={onChangeName}
        title="o nome da viagem deve ter mais de 5 caracters"
        
        />
       
      <InputsSelect onChange={onChangePlanet}>
        <option value={"mercury"}>Mercúrio</option>
        <option value={"venus"}>Vênus</option>
        <option value={"earth"}>Terra</option>
        <option value={"mars"}>Marte</option>
        <option value={"jupiter"}>Júpiter</option>
        <option value={"saturn"}>Saturno</option>
        <option value={"uranos"}>Urano</option>
        <option value={"neptune"}>Natuno</option>
        <option value={"pluto"}>Plutão</option>
      </InputsSelect>
       
        <InputsFormulario 
         placeholder="Data" 
         type="date"
         name="date" 
         required=""
         min="2022-07-12" 
         value={date}
         onChange={onChangeDate} 
         />

         <InputsFormulario placeholder="Descrição"
          name="description" required="" 
          pattern="^.{30,}$" 
          title="O nome deve ter no mínimo 30 caracteres"
          value={description}
          onChange={onChangedescription}
          />
          <InputsFormulario
          placeholder="Duração em dias" 
          type="number" 
          name="durationInDays"
          required=""
          min="50" 
          value={durationInDays}
          onChange={onChangedurationInDays}
          />
      </ConjuntoForm >
      
      
      <BotaoAdm  onClick={() => goBack(navigate)}>voltar</BotaoAdm >
      <BotaoAdm   onClick={CreateTrip}>Criar</BotaoAdm >
    </ConjuntoFormAdm>
  )
}

export default CreateTripPage