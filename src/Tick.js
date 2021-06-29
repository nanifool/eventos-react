 import { useState } from "react";

   function Tempo ({ data }) {
      return (
        <div className="App">
          A data atual é: {data}.
        </div>
      );
    }

   function Tick() {
      let [relogio, setRelogio] = useState()

      setInterval(() => {
        let time = new Date()
         setRelogio(time.toLocaleString())
      }, 1000)

      return (
        <div className="App">
           <Tempo data={relogio} />
        </div>
      );
    }

    export default Tick;