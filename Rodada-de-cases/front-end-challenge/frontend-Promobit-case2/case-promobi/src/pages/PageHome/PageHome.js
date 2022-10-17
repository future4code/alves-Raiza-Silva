import { useEffect, useState } from "react";
import axios from "axios"
import { BASE_URL } from "../../constants/BASE_URL"
import { API_KEY } from "../../constants/API_KEY"
import { BASE_IMG } from "../../constants/BASE_IMG"
import styled from "styled-components"
import PageFilter from "../PageFilter/PageFilter"

export const Imagemfilme = styled.img`
    width: 250px;
    height: 400px;
    box-sizing: border-box;
    &:hover {
		cursor: pointer;
    transform: scale(1.1);
    transition: transform .2s;
	}
`
export const CardFilmes = styled.div`
/* border: 2px solid red; */
width: 300px;
margin: 10px;
padding: 20px;
display: flex;
flex-direction: column;
align-items:center;
text-shadow: 0 1px 3px rgba(0, 0, 0, 0.6);
/* justify-content:center; */
`
export const MainConteiner = styled.main`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    box-sizing: border-box;
    overflow-x: hidden;
    width: 100vw;

`
export const Title = styled.p`
    color: #FFFFFF;
    font-family:'Arial Narrow Bold', sans-serif;
    :hover{
        cursor: pointer;
        box-shadow: 0px 0px 30px 1px rgba(0, 255, 117, 0.30);
    }
`
export const Body = styled.div`
 background-image: radial-gradient(circle at 52.88% 52.88%, #8f87d9 0, #5e5e97 25%, #323556 50%, #0e0e1c 75%, #000000 100%);
`


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
        <PageFilter/>
        < MainConteiner>
        {listFilmes.map((film) => {
            return <CardFilmes key={film.id}>
                       
                <div>
                    <Imagemfilme src={`${BASE_IMG}${film.poster_path}`}
                         title={`${film.title}`}
                         alt={`Poster ${film.title}`}
                    />
                       < Title>{film.title}</ Title>
                       < Title>{film.release_date}</ Title>
                </div>

            </CardFilmes>

        })}
        </ MainConteiner>

      

    </Body>)
}
