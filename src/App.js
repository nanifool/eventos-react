import {React, useState} from 'react'
import Mensagem from './Mensagem'
import Tick from './Tick'
import './App.css'


function App() {
  const [likes, contaLikes] = useState(0)

  function somaLikes (){
    contaLikes(likes+1)
    console.log(likes)
  }
  
  const subtraiLikes = function() {
    contaLikes(likes-1)
    console.log(likes)
  }

  return (
    <div className="App">
      {likes} <br />
      <button onClick={somaLikes} >
        Somar
      </button>
      <button onClick={subtraiLikes} >
        Diminuir
      </button>
        <Mensagem />
        <Tick />
    </div>
  )
}

export default App;
