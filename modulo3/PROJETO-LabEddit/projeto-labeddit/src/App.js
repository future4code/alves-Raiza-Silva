import Header from "./components/Header"
import  {RouterPage} from './routes/RouterPage'
import {BrowserRouter} from "react-router-dom"
import React, { useState } from "react"
import { ThemeProvider } from "styled-components"
import theme from "./contants/theme"



const App = () =>{
  const token = localStorage.getItem("token")
  const [rightBuuton, setRightBuuton] = useState(token ? "logout" : "login")
 
  return (
    <ThemeProvider theme={theme}>
            <BrowserRouter>
                   <Header rightBuuton={rightBuuton} setRightBuuton={setRightBuuton} />
                  <RouterPage/>
            </BrowserRouter>
    </ThemeProvider>
  )
}

export default App;
