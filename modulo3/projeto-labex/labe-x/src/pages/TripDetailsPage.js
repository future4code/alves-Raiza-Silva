//import axios from "axios";
import axios from "axios";
import { useEffect } from "react";
import {  useParams } from "react-router-dom";




  const TripDetailsPage = () => {
  const params = useParams()
   
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
          console.log(response.data.trip);
        })

        .catch((error) => {
          console.log("Deu erro: ", error.response);
        });
    },[])
    
    return <div>Detalhes da viagem</div>;
};


export default TripDetailsPage