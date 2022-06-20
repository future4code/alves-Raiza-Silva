import React from 'react'
import Etapa2 from './Etapa2'

export default class Etapa1 extends React.Component {
    
    
    render (){

    

     return(
        <div>
        <h1>ETAPA 1: DADOS GERAIS</h1>
        <div>
            <h3>1.Qual seu nome?</h3>
            <input placeholder='escreva aqui'/>
        </div>
       
        <div>
            <h3>2.Qual sua idade ?</h3>
            <input placeholder='escreva aqui' />
        </div>
       
        <div>
            <h3>3.Qual seu e-mail ?</h3>
            <input  placeholder='escreva aqui'/>
        </div>
       
        <div>
            <h3>4.Qual sua escolaridade</h3>
           <section>
            <option value="Ensino médio incompleto">Ensino médio incompleto</option>
            <option value="Ensino médio completo">Ensino médio completo</option>
            <option value="Ensino superior incompleto">Ensino superior incompleto</option>
            <option value="Ensino superior completo">Ensino superior completo</option>
           
           </section>
        </div>
        
        <b/>

        <button onClick={()=> this.props.mudatela(Etapa2)}>proximo passo</button>
    
        </div>

        
     )

     
    }



}