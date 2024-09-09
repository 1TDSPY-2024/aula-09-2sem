import { useEffect, useState } from "react";
import { TipoUsuario } from "../../types";

export default function Usuarios() {
  //MUDANDO O TÍTULO DA PÁGINA!!!
  document.title = "Usuários";

  //Retorna 1 usuario
  // const [usuario, setUsuario] = useState({
  //   id: 0,
  //   login: "",
  //   avatar_url: ""
  // })

  // fetch("https://api.github.com/users/lucasalmeida-cmd")
  //   .then(response => {
  //     if(!response.ok){
  //       throw new Error("Dados solicitados não encontrados.");
  //     }
  //     return response.json();
  //   })
  //   .then(data => {
  //     console.log(data);
  //     setUsuario(data);
  //   })
  //   .catch( err => {
  //     console.log(err.message)
  //   })

  // return(
  //   <div>
  //     <h1>Users do GitHub</h1>
  //     <img src = {usuario.avatar_url} alt={usuario.login}></img>
  //     <figcaption>{usuario.login}</figcaption>
  //   </div>
  // );

  //Retorna a lista

  const [usuarios, setUsuario] = useState<TipoUsuario[]>([]);

  useEffect(() => {
    fetch("https://api.github.com/users")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Dados solicitados não encontrados.");
        }
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setUsuario(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (
    <div>
      <h1>Users do GitHub</h1>
      <ul>
        {usuarios.map((usuario) => (
          <li key={usuario.id}>
            <img src={usuario.avatar_url} alt={usuario.login} width={50} />
            <figcaption>{usuario.login}</figcaption>
          </li>
        ))}
      </ul>
    </div>
  );
}
