
import axios from "axios";
import { useEffect,useState } from "react";
import {  useParams } from "react-router-dom";




  const TripDetailsPage = () => {
  const params = useParams()
  const [id, setId] = useState("")


    const token = localStorage.getItem("token");
    useEffect(()=>{
      axios.
          get(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/raiza-gomes-alves/trip/"${params.id}`, //colocar id=
          {
            headers: {
              auth: token
            }
          }
         )
         .then((response) => {
          setId(response.data.trip)
        })

        .catch((error) => {
          console.log("Deu erro: ", error.response);
        });
    },[])
    
    return <div>
      <h1>Detalhes da viagem</h1>
     <div>
           <p>Titulo: </p>{id.name}<p />
          <p>Descrição: </p>{id.description}<p/>
          <p>Planeta: </p>{id.planet}<pr />
          <p>Duração de: </p>{id.durationInDays} Dias<p />
          <p>Data: </p>{id.date}
     </div>


    </div>;
};


export default TripDetailsPage