import React from "react"
import {useNavigate} from "react-router-dom"
import {goToLogin} from "../routes/cordination"
import {ConjuntoHeader,  Botao1} from "./styled"
const Header = ()=>{
    const navigate = useNavigate()
    return(
        <ConjuntoHeader>
       < Botao1>labeddit</ Botao1>
       < Botao1 onClick={()=>goToLogin(navigate)}>login</ Botao1>
   </ConjuntoHeader>
    )
} 
 export default Header