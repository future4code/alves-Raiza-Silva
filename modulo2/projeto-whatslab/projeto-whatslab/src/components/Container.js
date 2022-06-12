import React from 'react';
import react from 'react'
import styled from 'styled-components';

export const ContainerStyled = styled.div `
 height: 75vh;
 border: 1px black solid;
 box-sizing: border-box;

 
 `
export const Quadro = styled.div `
 border: 1px black solid;
 display: inline-block;
 
`
export const InputUsuario =styled.input `
width: 100px;
`
export const InputMsg = styled.input `
width: 50vh;

`

export default class Conteiner extends React.Component{
    render (){

        return(
            <   Quadro>
               <div>
                <ContainerStyled ></ContainerStyled>
                <div>
                <InputUsuario type="text" placeholder='Usuario' value=""/>
                <InputMsg type="text" placeholder='mensagem' value=""/>
                <button>Enviar</button>
                </div>
               </div>
            </  Quadro>

        
            )
    }
}