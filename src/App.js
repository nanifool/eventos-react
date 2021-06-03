import {useState} from 'react'
import Listagem from './Listagem'
import './App.css'


function App() {
  const [count, setCount] = useState(0)
  let banana = 0
  const somaClicks = function (){
    setCount(count+1)
    banana = banana+1
    console.log({count, banana})
  }
  const subtraiClicks = function() {
    setCount(count-1)
    console.log(count)
  }

  return (
    <div className="App">
      {count}/{banana} <br />
      <button onClick={somaClicks} >
        Soma 1
      </button>
      <button onClick={subtraiClicks} >
        Diminui 1
      </button>
      <Listagem />
    </div>
  )
}

export default App;
