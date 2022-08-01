import React from "react"
import { useParams } from "react-router-dom"
import { BASE_URL } from "../../contants/urls"
import useRequestData from "../../hooks/useRequestData"
import axios from 'axios'
import { useForm } from '../../hooks/useForm'
import { useNavigate } from 'react-router-dom'
import {InputPoste,ButtonPost,CardPost,ContainerCard} from "../../components/styled"

const PostPage = () => {
    const paramsid = useParams()
    const { form, onChange,  clean } = useForm({ body: "" })
    const comments = useRequestData([], `${BASE_URL}/posts/${paramsid.id}/comments`)
    const posts = useRequestData([], `${BASE_URL}/posts`)
    const navigate = useNavigate()

    console.log(paramsid.id)

    const getPost = posts.map((post) => {
        if (post.id === paramsid.id) {
            return (
                <CardPost >
                    <div>
                        <p>Enviado por: {post.username} </p>
                        <p> {post.body} </p>

                    </div>
                </CardPost >
            )
        } else {
            return (<div key={post.id}></div>)
        }
    })

    const onSubmitForm = (event) => {
        event.preventDefault()
        createComment (form, clean, navigate)
    }


   const createComment = (body, id, clean) => {
       
        axios.post(`${BASE_URL}/posts/${id}/comments`, body, {
        headers: {
            Authorization: localStorage.getItem("token")
        }
    }).then((res) => {
        clean()
        alert("Comentário criado com sucesso")
    }).catch((erro) => {
       alert(erro)
    })
    }


    return (
        <div>
            
            <form onSubmit={onSubmitForm}>
        
            <InputPoste 

                name="body"
                type="text"
                onChange={onChange}
                value={form.body}
               
            />
             
              <ButtonPost>comentar</ButtonPost>
              </form>
              <ContainerCard>{getPost}</ContainerCard>
        </div>
    )
}

export default PostPage