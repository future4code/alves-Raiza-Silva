import styled from "styled-components"

export const ConteinerAdd = styled.main`
flex-direction: column;
display: flex;
justify-content: center;
align-items: center;
padding: 5px;
margin: 5px;
align-items: center;
color: white;
`


export const Input = styled.input`
display: flex;
margin: 10px;
border-radius: 20px;
border:  #d427fa80 solid;
color: purple;
width: 40vw;
`

export const ConteinerPlay = styled.div`
display: flex;
padding: 5px;
margin: 10px;
border: 1px violet solid;
border-radius: 20px;
flex-wrap: wrap;
overflow: auto;
color: white;
justify-content: space-between;
font-size: 10px; 
&:hover{
 cursor: pointer;
 background: #ffffff82;
}
`
export const Butao =styled.button`
   border-radius: 10px;
   background: purple;
   border: none;
   color: white;
   font-size: 10px;
   &:hover{
  cursor: pointer;
  background: #ffffff82;
}
`
export const Play = styled.div`
height: 40vw;
overflow: auto;
width: 40vw;

`
export const AlinharBotao = styled.div`
display: flex;
`
