import { useEffect, useState } from "react";
import axios from "axios"
import { BASE_URL } from "../../constants/BASE_URL"
import { API_KEY } from "../../constants/API_KEY"
import { BASE_IMG } from "../../constants/BASE_IMG"
import PageFilter from "../PageFilter/PageFilter"
import {
    Imagemfilme,
    CardFilmes,
    MainConteiner,
    Title,
    Body
} from "./styledHome"



export default function HomePage() {

    const [listFilmes, setListFilmes] = useState([])


    useEffect(() => {
        getListFilme()
    }, [])

    const getListFilme = () => {
        axios.get(`${BASE_URL}3/movie/popular?api_key=${API_KEY}`)
            .then((res) => {
                console.log(res.data.results)
                setListFilmes(res.data.results)
            })
            .catch((error) => {
                console.log({ error })
            })
    }



    return (<Body>
        <PageFilter />
        < MainConteiner>
           
            {listFilmes.length === 0 && <p>CARREGANDO...</p>}
            {listFilmes.length > 0 && listFilmes.map((film) => {
                return <CardFilmes key={film.id}>

                    <div>
                       
                        <Imagemfilme src={`${BASE_IMG}${film.poster_path}`}
                            title={`${film.title}`}
                            alt={`${film.title}`}
                        />
                        < Title>{film.title}</ Title>
                        < Title>{film.release_date}</ Title>
                    </div>

                </CardFilmes>

            })}
        </ MainConteiner>



    </Body>)
}
