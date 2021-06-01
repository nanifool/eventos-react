import {useState} from 'react'
import './App.css';

function App() {
  const [count, setCount] = useState(0)
  const somaClicks = function (){
    setCount(count+1)
    console.log(count)
  }
  return (
    <div className="App">
      <button onClick={somaClicks} >
        Clique aqui
      </button>
    </div>
  );
}

export default App;
