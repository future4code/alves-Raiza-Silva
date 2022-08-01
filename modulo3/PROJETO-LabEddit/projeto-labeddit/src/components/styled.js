import styled from "styled-components"

export const ConjuntoHeader = styled.header`
 background: orange;
 padding: 10px;
 display: flex;
 justify-content: space-between;
`

export const Botao1 = styled.button`
display: flex;
font-size: 20px;
font-family: sans-serif;
padding: 8px;
border: none;
background: orange;
color: white;
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

export const RecipeList = styled.div`
display:flex;
flex-direction: row;
flex-wrap: wrap;
margin:30px;


`

export const AddRecipeButton = styled.button`
position: fixed !important;
right:20px;
bottom: 20px;
z-index:3;

`
export const ScreenConteiner = styled.div`
display: flex;
flex-direction:column;
align-items:center;
width:100vw;
`

export const InputConteiner = styled.div`
display: flex;
flex-direction:column;
width:80vw;
max-width: 450px;
align-items: center;
margin-bottom: 20px;
`

export const LogoImg = styled.img`
 width: 70vw;
 max-width: 200px;
 margin: 10px;
`

export const ConjuntoCadastro = styled.div`
 width: 80vw;
 max-width: 450px;
`

export const InputTitle = styled.input`
position: absolute;
width: 364px;
height: 53px;
left: 30px;
top: 122px;

background: #EDEDED;
border-radius: 12px;
`
export const InputPost = styled.input`
position: absolute;
width: 364px;
height: 131px;
left: 30px;
top: 187px;

background: #EDEDED;
border-radius: 12px;

`

export const ConjuntoD = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 9px 10px;
gap: 18px;

width: 364px;
height: 167px;

background: #FBFBFB;
border: 1px solid #E0E0E0;
border-radius: 12px;`


export const ConjuntoP = styled.div`

display: flex;
flex-direction: column;
align-items: flex-start;
padding: 9px 10px;
gap: 18px;

position: absolute;
width: 364px;
height: 258.89px;
left: 31px;
top: 743px;

background: #FBFBFB;
border: 1px solid #E0E0E0;
border-radius: 12px;`


export const Buttonp = styled.button`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 12px 145px;

position: absolute;
width: 359px;
height: 47px;
left: 33px;
top: 330px;

background: linear-gradient(90deg, #FF6489 0%, #F9B24E 100%), #4088CB;
border-radius: 12px;
`

export const CardPost = styled.div`
box-sizing: border-box;
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 9px 10px;
gap: 18px;
width: 364px;
height: 167px;
background: #fbfbfb;
border: 1px solid #e0e0e0;
border-radius: 12px;
flex: none;
order: 0;
flex-grow: 0;
position: relative;
div {
  cursor: pointer;
}
`;

export const MainContainer = styled.div`
  position: relative;
  width: 428px;
  height: 1134px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #ffffff;
`;

export const ContainerCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 10px;
  position: absolute;
  width: 364px;
  max-height: 629px;
  left: 32px;
  top: 427px;
`;

export const ButtonPost = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 12px 145px;
  position: absolute;
  width: 359px;
  height: 47px;
  left: 33px;
  top: 330px;
  background: linear-gradient(90deg, #ff6489 0%, #f9b24e 100%), #4088cb;
  border-radius: 12px;
`;

export const InputPoste = styled.input`
  position: absolute;
  width: 364px;
  height: 131px;
  left: 30px;
  top: 187px;
  background: #ededed;
  border-radius: 12px;
`;

export const Form = styled.form`
display: flex;
flex-direction: column;
align-items: center;
`

export const Title = styled.input`
  position: absolute;
  width: 364px;
  height: 53px;
  left: 30px;
  top: 122px;
  background: #ededed;
  border-radius: 12px;
`;