import React, { useEffect, useState } from "react"
import axios from "axios"


const useRequestData = (initialData, url)=>{
 const [data, setData]= useState(initialData)

        useEffect(()=>{
            axios.get(url, {
                headers:{
                    Authorization: localStorage.getItem("token")
                }
            })
            .then((response)=>{
                setData(response.data)
            })
            .catch((error)=>{
                alert("ocorreu um erro")
            })
            
        }, [url])
        return(data)


}

export default useRequestData