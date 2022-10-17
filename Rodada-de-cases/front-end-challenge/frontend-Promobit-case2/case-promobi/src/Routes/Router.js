import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import PageHome from "../pages/PageHome/PageHome"
import PageDetail from "../pages/PageDetail/PageDetail"
// import {PageErro} from "../pages/pageErro/PageErro"


export const Router = ()=> {
    return(
        <BrowserRouter>
        <Routes>
          <Route index element={<PageHome />} />
          <Route path="detail" element={<PageDetail />} />
          <Route path="busca" element={<PageDeBusca />} />
          
        </Routes>
      </BrowserRouter>

    )


}

//<Route path="*" element={<PageErro />} />
