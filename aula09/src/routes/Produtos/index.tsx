import { Link } from "react-router-dom";
import { listaProdutos } from "../../data/listaProdutos.ts";
import { TipoProduto } from "../../types";
import { useEffect, useState } from "react";

export default function Produtos(){

      //MUDANDO O TÍTULO DA PÁGINA!!!
      document.title = "PRODUTOS";

      const listaProdutosString = localStorage.getItem("lista") || '[]';
      const lista:TipoProduto[] = JSON.parse(listaProdutosString);

      const [produtos] = useState<TipoProduto[]>(lista);

      useEffect(() => {
        listaProdutos.length;
        console.log(lista);
      },[]);
      
    return(
      <div>
        <h1>Produtos Eletrônicos</h1>

        <table>
          
          <thead>
            <tr>
              <th>Nome</th>
              <th>Marca</th>
              <th>Descrição</th>
              <th>Preço</th>
              <th>Foto</th>
              <th>Editar | Excluir</th>
            </tr>
          </thead>

          <tbody>
              {produtos.map((produto)=>(
                <tr key={produto.id}>
                  <td>{produto.nome}</td>
                  <td>{produto.marca}</td>
                  <td>{produto.desc}</td>
                  <td>{produto.preco}</td>
                  <td><img src={produto.foto} alt={produto.nome}/></td>
                  <td><Link to={`/editar/produtos/${produto.id}`}>Editar</Link> </td>
                </tr>
              ))}
          </tbody>
          
          <tfoot>
            <tr>
              <td colSpan={6}>
                Total de registros - <span>{lista.length}</span>
              </td>
            </tr>
          </tfoot>

        </table>
      </div>
    );
  }
