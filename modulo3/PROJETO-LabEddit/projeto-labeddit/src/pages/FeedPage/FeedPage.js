
import React from "react"
import { CardPost, MainContainer,ContainerCard, ButtonPost,Title,InputPoste} from "../../components/styled"
import { BASE_URL } from "../../contants/urls"
import useRequestData from "../../hooks/useRequestData"
import axios from 'axios'
import { useForm } from '../../hooks/useForm'
import { useNavigate } from 'react-router-dom'
import { goToPostPage, goToCadastroPage } from '../../routes/cordination'

const FeedPage = () => {
    const receberPost = useRequestData([],`${BASE_URL}/posts`)
    
    console.log(receberPost)
    const navigate = useNavigate()

    const { form, onChange, clean } = useForm({ body: "", title: "" })



    const renderPost = receberPost.map((postagem) => {
        return < CardPost key={postagem.id} onClick={()=>onClickPost(postagem.id)}>
            <p> Enviado por :{postagem.username}</p>
            <p>{postagem.title}</p>
            <h3>{postagem.body}</h3>
            <div>{postagem.userVote}
            <div>{postagem.commentCount}</div>
            {postagem.voteSum} 
            </div>

        
        

        </ CardPost>

    })

    const onSubmitForm = (event) => {
        event.preventDefault()
        CreatePost(form, clean, navigate)
    }


    const CreatePost = (body, clean, navigate) => {
        axios.post(`${BASE_URL}/posts`, body, {
            headers: {
                Authorization: localStorage.getItem("token")
            }
        }).then((res) => {
            console.log(res)
            clean()
            alert("Post criado com sucesso")
        }).catch((err) => {
            console.log(err.response)

        })
    }

    const onClickPost = (id)=>{
       goToPostPage(navigate, id)
    }


    return (
        < MainContainer>
           
           
                <form onSubmit={onSubmitForm}>
            
                <Title

                    name="title"
                    type="text"
                    onChange={onChange}
                    value={form.title}
                    placeholder="Título do poste"
                    required
                />

                <InputPoste
                    name="body"
                    type="text"
                    onChange={onChange}
                    value={form.body}
                    placeholder="escreva seu post *"
                    required
                    
                />
                < ButtonPost>postar</ ButtonPost>
                <hr />
            </form>
       
            
           <ContainerCard>{renderPost}</ContainerCard> 
        </ MainContainer>
    )
}

export default FeedPage