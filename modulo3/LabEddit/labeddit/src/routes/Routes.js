import react from "react"
import {Routes, Route, BrowserRouter} from "react-router-dom"
import CadastroPage from "../pages/CadastroPage";
import FeedPage from "../pages/FeedPage";
import LoginPage from "../pages/LoginPage";
import PostPage from "../pages/PostPage";

const Router =()=>{
    return(<BrowserRouter>
    <Routes>
         <Route  path="login" element={ <LoginPage/>}/>
         <Route path="feed"  element={ <FeedPage/>}/>
         <Route path="post" element={ <PostPage/>}/>
         <Route path="cadastro"  element={ <CadastroPage/>}/>


    </Routes>
    </BrowserRouter>)
}


export default Router

