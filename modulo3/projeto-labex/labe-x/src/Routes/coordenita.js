
export const goToAdmHomePage = (navigate)=>{
  navigate('/admHome')
}

  export const goToListTripsPage = (navigate)=>{
    navigate("/listTrip")
  }
  export const goTologin = (navigate)=>{
  navigate("/loginPage")
  }

  export const goBack = (navigate)=>{
    navigate(-1)
   }
 
    export const goApplicationFormPage = (navigate)=>{
    navigate("/application")
  }

  export const goToCreateTripPage =(navigate)=>{
    navigate("/createTrip")
   }

   export const goToDatailsTrip =(navigate,id)=>{
    navigate(`/tripDetails/${id}`)
   }


   export const goToHomePage =(navigate)=>{
    navigate("/")
   }