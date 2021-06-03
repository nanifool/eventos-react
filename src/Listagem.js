import {useEffect, useState} from 'react'

const frutas = [
  "maça",
  "banana",
  "uva",
  "morango",
  "butia",
  "laranja",
  "manga",
  "limao",
  "mamao",
  "pera",
]

function Listagem() {
  const [termo, setTermo] = useState("")
  const [listagem, setListagem] = useState([])

  const pesquisa = function (event){
    setTermo(event.target.value)
  }

  useEffect(() => {
    const result = frutas.filter((fruta) => fruta.includes(termo))
    setListagem(result)
  }, [termo])

  return (
   <div>
     <input type="text" placeholder="Digite aqui" onChange={pesquisa} />
     <ul>
       {listagem.map(function (item) {
         return (<li>{item}</li>)
       })}
     </ul>
   </div>
  )
}

export default Listagem
