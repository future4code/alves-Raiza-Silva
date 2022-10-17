import { useEffect, useState } from "react";
import axios from "axios"
import { BASE_URL } from "../../constants/BASE_URL"
import { API_KEY } from "../../constants/API_KEY"
import { BASE_IMG } from "../../constants/BASE_IMG"


export default function HomePage() {

    const [listFilmes, setListFilmes] = ([])


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
    return (<div></div>)
}
