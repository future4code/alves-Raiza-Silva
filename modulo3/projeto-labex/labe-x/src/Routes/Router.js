import HomePage from "../pages/HomePage"
import TripDetailsPage from "../pages/TripDetailsPage"
import AdminHomePage from "../pages/AdminHomePage"
import ListTripsPage from "../pages/ListTripsPage"
import ApplicationFormPage from "../pages/ApplicationFormPage"
import LoginPage from "../pages/LoginPage"
import CreateTripPage from "../pages/CreateTripPage"
import {BrowserRouter, Routes, Route} from "react-router-dom"

export const Router = ()=>{
    return(
        <BrowserRouter>
        <Routes>
          <Route index element={ <HomePage/>} />
          <Route  path="listTrip" element={ <ListTripsPage/>}/>
          <Route path="admHome" element={< AdminHomePage/>}/>
          <Route path="loginPage" element={<LoginPage/>}/>
          <Route path="application" element={ <ApplicationFormPage/>}/>
          <Route path="tripDetails" element={ <TripDetailsPage/>}/>
          <Route path="createTrip" element={<CreateTripPage/>}/>
        </Routes>

   </BrowserRouter>
    )
}