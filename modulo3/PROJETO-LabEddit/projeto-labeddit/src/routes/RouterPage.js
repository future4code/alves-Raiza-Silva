import React from "react"
import { Routes, Route} from "react-router-dom"
import LoginPage from "../pages/LoginPage/LoginPage"
import CadastroPage from "../pages/CadastroPage/CadastroPage"
import PostPage from "../pages/PostPage/PostPage"
import FeedPage from "../pages/FeedPage/FeedPage"


export const RouterPage  = ()=>{
    return(
       
         
        <Routes>
          <Route index element={   <CadastroPage/>} />
          <Route  path="feed" element={  <FeedPage/>}/>
          <Route path="post/:id" element={ < PostPage/>}/>
          <Route path="login" element={<LoginPage />}/>
          
        </Routes>

 
    )
} 
 