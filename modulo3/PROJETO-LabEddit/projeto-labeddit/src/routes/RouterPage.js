import React from "react"
import {BrowserRouter, Routes, Route} from "react-router-dom"
import LoginPage from "../pages/LoginPage/LoginPage"
import CadastroPage from "../pages/CadastroPage/CadastroPage"
import PostPage from "../pages/PostPage/PostPage"
import FeedPage from "../pages/FeedPage/FeedPage"
import Header from "../components/Header"

export const RouterPage  = ()=>{
    return(
        <BrowserRouter>
         <Header/>
        <Routes>
          <Route index element={   <CadastroPage/>} />
          <Route  path="feed" element={  <FeedPage/>}/>
          <Route path="post" element={ < PostPage/>}/>
          <Route path="login" element={<LoginPage/>}/>
          
        </Routes>

   </BrowserRouter>
    )
} 
 