import React, {useState,useEffect}from 'react'
import { useNavigate } from "react-router-dom"
import { goBack } from "../Routes/coordenita"
import axios from "axios"

function ApplicationFormPage() {
  const navigate = useNavigate()
  const [country, setCountry] = useState("")
  const[name, setName] = useState("")
  const [age, setAge] = useState("")
  const [profession, setProfession] = useState("")
  const [applicationText, setApplicationText]=useState("")
  const [trips, setTrips] = useState([])

  useEffect(() => {
    axios.get("https://us-central1-labenu-apis.cloudfunctions.net/labeX/raiza-gomes-alves/trips")
      .then((res) => {
        setTrips(res.data.trips)
        // console.log(res.data.trips)
      })
      .catch((err) => {
        console.log(err);
      });
    
    },[])

    const tripsRender = trips && trips.map((trip, index) => {
      return(<option key={trip.id}>{trip.name}</option>)
     })

     const onChangeCountry =(e)=>{
      setCountry(e.target.value)
    }
    const onChangeName =(e)=>{
      setName(e.target.value)
    }
    const onChangeAge =(e)=>{
      setAge(e.target.value)
    }
    const onChangeApplicationText =(e)=>{
      setApplicationText(e.target.value)
    }

    const onChangeProfession =(e)=>{
      setProfession(e.target.value)
    }

  return (
    <div>
      <h1>Página do formulário de inscriçãoe</h1>
      <form>
        <select>
        {tripsRender}
        </select>
        <input
          onChange={onChangeName}
          placeholder="Nome"
          name="name" pattern="^.{3,}$"
          title="O nome deve ter no mínimo 3 caracteres"
          required=""
          value={name}>
        </input>
        <input 
          placeholder="Idade"
          type="number"
          name="age"
          required="" min="18"
          value={age}
          onChange={onChangeAge}>
        </input>
        <input 
          placeholder="Texto de Candidatura"
          name="applicationText" 
          required=""
          pattern="^.{30,}$"
          title="O texto deve ter no mínimo 30 caracteres"
          value={applicationText}
          onChange={onChangeApplicationText}>

        </input>
        <input 
          placeholder="Profissão"
          name="profession" 
          required=""
          pattern="^.{10,}$"
          title="A profissão deve ter no mínimo 10 caracteres"
          value={profession}
          onChange={onChangeProfession}>

        </input>
        <select value={country} onChange={onChangeCountry}>
          <option value="" disabled selected>Selecione seu país</option>
          <option value='Argentina'>Argentina</option>
          <option value='Bolívia'>Bolívia</option>
          <option value='Brasil'>Brasil</option>
          <option value='Chile'>Chile</option>
          <option value='Colômbia'>Colômbia</option>
          <option value='Equador'>Equador</option>
          <option value='Guiana'>Guiana</option>
          <option value='Paraguai'>Paraguai</option>
          <option value='Peru'>Peru</option>
          <option value='Suriname'>Suriname</option>
          <option value='Uruguai'>Uruguai</option>
          <option value='Venezuela'>Venezuela</option>
        </select>




      </form>





      <button onClick={() => goBack(navigate)}>Voltar</button>
      <button>Enviar</button>
    </div>
  )
}

export default ApplicationFormPage