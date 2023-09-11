import {useState} from 'react'

function Produtos() {
 /*hooks de useState */

  const [count, setCount] = useState(0);
  const [lista, setLista] = useState([]);

  const incrementar = ()=>setCount(count +1)
  const decrementar = ()=>setCount(count -1)
  const adicionarLista = ()=>setLista([...lista, Math.random(1000).toFixed(2)])

  return (
    
    <>
      <fieldset>
        <legend>Botão de aumentar e diminuir</legend>
        <p>Valor: {count}</p>
        <button onClick={incrementar}>Aumentar</button>
        <button onClick={decrementar}>Diminuir</button>
      </fieldset>
      <fieldset>
        <legend>Exemplo 2</legend>
        <ul>
          {lista.map((n,i)=><li key={i}>{n}</li>)}
        </ul>
        <button onClick={adicionarLista}>Lista</button>
        
      </fieldset>
    </>
  )
}

export default Produtos