import React, { useState, useEffect } from 'react'
import { goBack } from "../Routes/coordenita"
import { useNavigate } from "react-router-dom"


  



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
 
  return (
    <div>
      <h1> Formulário para o administrador criar uma nova viagem </h1>
      <form>
        <input type="name"
        placeholder='nome'
        value={name}
        onChange={onChangeName}
        title="o nome da viagem deve ter mais de 5 caracters"
        
        />
        <select>
          <option></option>
        </select>
        <input 
         placeholder="Data" 
         type="date"
         name="date" 
         required=""
         min="2022-07-12" 
         value={date}>
         onChange={onChangeDate} 
         </input>

         <input placeholder="Descrição"
          name="description" required="" 
          pattern="^.{30,}$" 
          title="O nome deve ter no mínimo 30 caracteres"
          value={description}>
          onChange={onChangedescription}
          </input>
          <input
          placeholder="Duração em dias" 
          type="number" 
          name="durationInDays"
          required=""
          min="50" 
          value={durationInDays}>
          onChange={onChangedurationInDays}
           </input>
      </form>
      
      
      <button onClick={() => goBack(navigate)}>voltar</button>
      <button>Criar</button>
    </div>
  )
}

export default CreateTripPage