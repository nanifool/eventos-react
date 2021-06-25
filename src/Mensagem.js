import {React, useState} from 'react'


function Mensagem() {
  const [nome, atualizaNome] = useState("")

  return (
   <div>
     <input type="text" placeholder="Digite aqui" onChange={(evento) => atualizaNome(evento.target.value)} />
      {/* não usar arrow function */}
     <p>Olá, conta_usuário / {nome}! Boas compras!</p>
   </div>
  )
}

export default Mensagem
