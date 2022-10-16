import React from "react"
import axios from "axios"
import {BASE_URL} from "../../constants/BASE_URL"
import {API_KEY} from "../../constants/API_KEY"
import {BASE_IMG} from "../../constants/BASE_IMG"


export default class PageHome extends React.Component {

    state = {
        listFilmes : []
    }

    componentDidMount(){
        this.getListFilme()
   }

    getListFilme = () => {
        axios.get(`${BASE_URL}3/movie/popular?api_key=${API_KEY}`)
        .then((res) => this.setState({listFilmes: res.data.results}))
            
        .catch((error) => {
            console.log({ error })
        })
}

    

    render() {
        const renderList = this.state.listFilmes.map((filmes)=>{
            return <div></div>
        })

        return <div>
            <h1>Pagina home  </h1>
        </div>
    }
}