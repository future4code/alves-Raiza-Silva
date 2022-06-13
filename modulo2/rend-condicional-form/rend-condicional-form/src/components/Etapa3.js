import React from 'react'

export default class Etapa3 extends React.Component {

      
    render (){

    

        return(
            <div>
                <h1>ETAPA 3: INFORMAÇÕES GERAIS DE ENSINO</h1>
                <div>
                    <h3>7. Por que você não terminou um curso de graduação? </h3>
                    <input placeholder='escreva aqui'/>
                </div>
                <div>
                    <h3>8. Você fez algum curso complementar?</h3>
        <section>
                   <option value="Nenhum">Nenhum</option>
                   <option value="Curso tecnico">Curso tecnico</option>
                   <option value="Curso de inglês">Curso de inglês</option>
                   
        </section>
                </div>
            </div>
        )
}
}
