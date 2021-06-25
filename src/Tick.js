import { useState } from "react";

function Clock ({ date }) {
  return (
    <div className="App">
      Is it {date}.
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
       <Clock date={relogio} />
    </div>
  );
}

export default Tick;