
import { useNavigate } from "react-router-dom"
import { goToLogin } from "../routes/cordination"
import { ConjuntoHeader, Botao1 } from "./styled"






const Header = ({rightBuuton, setRightBuuton}) => {
    
    const navigate = useNavigate()
    const token = localStorage.getItem("token")
   
    const logout = ()=>{
        localStorage.removeItem("token")
    }
    
    const rightBuutonAction = ()=>{
        if(token){
            logout()
            setRightBuuton('login')
            goToLogin(navigate)

        }else{
            goToLogin(navigate)

        }
    }


    return (
        <ConjuntoHeader>
            < Botao1>labeddit</ Botao1>
            < Botao1 onClick={rightBuutonAction}>{rightBuuton}</ Botao1>
        </ConjuntoHeader>
    )
}
export default Header