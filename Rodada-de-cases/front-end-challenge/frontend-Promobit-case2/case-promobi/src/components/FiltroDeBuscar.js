import { useState } from "react";
//import { useNavigate } from "react-router-dom";


export default function FiltroDeBuscar() {
    const [busca, setBusca] = useState("")


    const SubmitBuscar = (e) => {
        e.preventDefault()

    }

    return (
        <nav>
            <h2>FILTRAR POR :</h2>
            <form onSubmit={SubmitBuscar}>
                <input type="text" placeholder="Busque um filme"
                    onChange={(e) => setBusca(e.target.value)}
                    value={busca} />

                <button type="submit">Buscar</button>
            </form>
        </nav>)
}