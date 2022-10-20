import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {gotoBuscar} from "../Routes/Coordenetion"
import styled from "styled-components"

export const TextFiltro = styled.h3`
 color: white;
 font-family: sans-serif;
 text-transform: uppercase;
`

export default function FiltroDeBuscar() {
    const [busca, setBusca] = useState("")
    const navigate = useNavigate()

    const SubmitBuscar = (e) => {
        e.preventDefault()

    }

    return (
        <nav>
            <TextFiltro>FILTRAR POR :</TextFiltro>
            <form onSubmit={SubmitBuscar}>
                <input type="text" placeholder="Busque um filme"
                    onChange={(e) => setBusca(e.target.value)}
                    value={busca} />

                <button type="submit"
                 onClick={() => gotoBuscar(navigate)}
                >Buscar</button>
            </form>
        </nav>)
}