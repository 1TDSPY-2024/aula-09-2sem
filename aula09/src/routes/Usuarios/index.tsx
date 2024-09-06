import { useState } from "react";

export default function Usuarios(){
    document.title = "Usuarios";
 const[usuario, setUsuario] = useState({
    id:0,
    login:"",
    avatar_url:""
 })
    fetch("https://api.github.com/users")
    .then(resp=>{
        if(!resp.ok){
            throw new Error("dados solicitados não encontrados");
        }
        return resp.json();
    })
    .then(data =>{
        console.log(data);
        setUsuario(data);
    }).catch(err =>{
        console.log(err.message);
    })

    return(
        <div>
            <h1>Users do github</h1>
            <div>
                <figure>
                    <img src={usuario.avatar_url} alt={usuario.login}/>
                    <figcaption>{usuario.login}</figcaption>
                </figure>
            </div>
        </div>
    );
}