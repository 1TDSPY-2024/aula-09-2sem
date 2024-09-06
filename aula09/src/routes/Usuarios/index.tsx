export default function Usuarios(){

    //MUDANDO O TÍTULO DA PÁGINA!!!
    document.title = "Usuários";

    fetch("https://api.github.com/users/difurigo")
    .then(response => {
      if (!response.ok) {
        throw new Error("Dados solicitados não encontrados!");
      }
      return response.json();
    })
    .then(data => {
      console.log(data);
    })
    .catch(err => {
      console.log(err.message);
    })

    return(
      <div>
        <h1>Users do GitHub</h1>
      </div>
    );
  }