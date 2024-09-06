
export default function Usuarios() {

  //MUDANDO O TÍTULO DA PÁGINA!!!
  document.title = "Usuários";

  fetch("https://api.github.com/users/david-rapeckman")
    .then(response => {
      if (!response.ok) {
        throw new Error("Dados solicitados não encontrado!");
      }
      return response.json();
    })
    .then(data => {
      console.log(data);
    })
    .catch(err=>{
      console.log(err.message);
    })

  return (
    <div>
      <h1>Users do Github</h1>
    </div>
  );
}