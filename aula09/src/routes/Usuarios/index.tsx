import { useState } from "react";

export default function Usuarios() {

  //MUDANDO O TÍTULO DA PÁGINA!!!
  document.title = "Usuários";

  const [usuario, setUsuario] = useState({
    id: 0,
    login: "",
    avatar_url: ""
  })


  fetch("https://api.github.com/users/david-rapeckman")
    .then(response => {
      if (!response.ok) {
        throw new Error("Dados solicitados não encontrado!");
      }
      return response.json();
    })
    .then(data => {
      console.log(data);
      setUsuario(data);
    })
    .catch(err => {
      console.log(err.message);
    })

  return (
    <div>
      <h1>Users do Github</h1>
      <div>
        <figure>
          <img src={usuario.avatar_url} alt={usuario.login} />
          <figcaption>{usuario.login}</figcaption>
        </figure>
      </div>
    </div>
  );
}