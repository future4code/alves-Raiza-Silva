export const goToAboutPage = (navigate,) => {
    navigate("detail/:id")
}

export const gotoBuscar =  (navigate) =>{
    navigate("busca")
}


export const goToHomePage = (navigate) => {
    navigate("/")
}

export const goBack = (navigate) => {
    navigate(-1)
}