import {React, useState} from 'react'


function Mensagem() {
  const [nome, atualizaNome] = useState("")

  return (
   <div>
     <input type="text" placeholder="Digite aqui seu nome" onChange={(evento) => atualizaNome(evento.target.value)} />
     <p>Olá, {nome}! Boas compras!</p>
   </div>
  )
}

export default Mensagem
