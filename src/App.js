import {React, useState} from 'react'
import Mensagem from './Mensagem'
import Tick from './Tick'
import './App.css'


function App() {
  const [likes, aumentaLikes] = useState(0)
  // const [count, setCount] = useState(0)
  let banana = 0

  function somaClicks (){
    aumentaLikes(likes+1)
    banana = banana+1
    console.log({likes, banana})
  }
  
  const subtraiLikes = function() {
    aumentaLikes(likes-1)
    console.log(likes)
  }

  return (
    <div className="App">
      {likes}/{banana} <br />
      <button onClick={somaClicks} >
        Soma
      </button>
      <button onClick={subtraiLikes} >
        Diminui
      </button>
      <Mensagem />
      <Tick />
    </div>
  )
}

export default App;
