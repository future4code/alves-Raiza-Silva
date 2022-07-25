import styled from "styled-components"

export const ConjuntoHome = styled.div`
  display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
   

   

`
export const Botao = styled.button`
 display: flex;
 flex-direction: column;
 margin: 20px;
 padding: 20px;
 background-image: linear-gradient(to top, #2c3a8a, black);
 color:white;
 width: 250px;
 align-items: center;
 text-align: center;
 animation-name: todown;
    animation-duration: 5s;
    border-radius: 100px;
    font-size:20px;
    flex-wrap: wrap;
 &:hover{
  cursor: pointer;
  background:#92a0eb;
 }
  
 
`

export const ConjuntoB = styled.div`
display: flex;

`
 export const ConjuntoTripsAdm = styled.div`
    border: none;
    padding: 50px;
    background:#2c3a8a;
    display: flex;
    box-shadow: rgb(0 0 0 / 30%) 0px 4px 8px 0px;
    padding: 10px 20px;
    border-radius: 4px;
    margin: 10px 0px;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: justify;
    justify-content: space-between;
    width: 460px;
    color:white;
    font-family: sans-serif;

`
export const ConjuntoTrips = styled.div`
    border: 1px solid green;
    padding: 10px;
    background:  #2c3a8a;
    color: white;
    font-family: monospace;
    margin: 20px;
    border: none;
    border-radius: 10px;
    box-shadow: 10px 10px #00000096;
    width: 50%;

`
export const ConjuntoConteiner =styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

`
export const BotaoTrips =styled.button`
    border: none;
    display: flex;
    padding: 10px;
    margin: 20px;
    border-radius: 15px;
    background-image: linear-gradient(to top, #2c3a8a, black);
    color:white;
    font-size:20px;
    &:hover{
  cursor: pointer;
  box-shadow: inset 100px 0 0 0 #54b3d6;
  color: white}

`


export const MainConjunto = styled.main`
display: flex;
    flex-direction: column;
    align-items: center;
    margin: 20px;
    padding: 20px;

`

export const FormLogin = styled.form`
display: flex;
    flex-direction: column;
    -webkit-box-align: center;
    align-items: center;
    width: 500px;
    font-family: monospace;

`
export const Inputs = styled.input`
 width: 100%;
    height: 30px;
    border-radius: 10px;
    padding: 4px 8px;
    border-width: 1px;
    border-color: gray;
    margin: 20px;
`
export const Botao2 = styled.button`
display: flex;
 flex-direction: column;
 margin: 20px;
 padding: 15px;
 background-image: linear-gradient(to top, #2c3a8a, black);
 color:white;
 width: 200px;
 align-items: center;
 text-align: center;
 animation-name: todown;
    animation-duration: 5s;
    border-radius: 100px;
    font-size:20px;
    flex-wrap: wrap;
 &:hover{
  cursor: pointer;
  background:#92a0eb;
 }

 
`
export const H1 = styled.h1`
font-family: sans-serif;
`
export const ConjuntoBotoes = styled.div`
display: flex;

`

export const InputsFormulario = styled.input`
    width: 100%;
    height: 30px;
    border-radius: 10px;
    padding: 4px 8px;
    border-width: 1px;
    border-color: gray;
    margin: 15px;

`
export const InputsSelect = styled.select`
    width: 518px;
    height: 40px;
    border-radius: 10px;
    padding: 4px 8px;
    border-width: 1px;
    margin: 0px 0px 15px;

`
export const Select = styled.section`
   width: 518px;
    height: 40px;
    border-radius: 10px;
    padding: 4px 8px;
    border-width: 1px;
    margin: 15px;


`

export const ConjuntoAdm =styled.div`
display: flex;
    flex-direction: column;
    align-items: center;
    margin: 20px;
    
    @media(max-width: 800px) {
    flex-direction: column;
    position: relative;
  }
`

export const BotaoAdm = styled.button`
display: flex;
 flex-direction: column;
 margin: 20px;
 padding: 10px;
 background-image: linear-gradient(to top, #2c3a8a, black);
 color:white;
 width: 150px;
 align-items: center;
 text-align: center;
 animation-name: todown;
    animation-duration: 5s;
    border-radius: 100px;
    font-size:20px;
    flex-wrap: wrap;
 &:hover{
  cursor: pointer;
  background:#92a0eb;
 }

 
`

export const BotaoA = styled.div`
display: flex;
`

export const ConjuntoForm = styled.form`
display: flex;
    flex-direction: column;
    -webkit-box-align: center;
    align-items: center;
    width: 500px;
`

export const ConjuntoFormAdm= styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

`