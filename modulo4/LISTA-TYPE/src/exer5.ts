console.log("teste 5")

type Usuarios = {
 name: string,
 email:string,
 role:string,
}

const usuario :Usuarios[]=[
        
        {name: "Rogério", email: "roger@email.com", role: "user"},
        {name: "Ademir", email: "ademir@email.com", role: "admin"},
        {name: "Aline", email: "aline@email.com", role: "user"},
        {name: "Jéssica", email: "jessica@email.com", role: "user"},  
        {name: "Adilson", email: "adilson@email.com", role: "user"},  
        {name: "Carina", email: "carina@email.com", role: "admin"}      
    
] 

function listaDeEmail(lista: Usuarios[]):string[]{
    const usuariosFiltrados :  Usuarios[] = lista.filter((usuario)=>{
        return usuario.role === "admin"
    })
    const emails :string[]= usuariosFiltrados.map((usuario)=>{
        return usuario.email
    })
    return emails
}
 console.table(listaDeEmail(usuario))
