import { useState } from 'react'

function App() {
  const [displayNum, setDisplayNum] = useState(0)

  return (
    <>
      <div className="calc-div">
        <div className="display">{displayNum}</div>
        <div className="numpad">
          <div className="1">1</div>
          <div className="2">2</div>
          <div className="3">3</div>
          <div className="4">4</div>
          <div className="5">5</div>
          <div className="6">6</div>
          <div className="7">7</div>
          <div className="8">8</div>
          <div className="9">9</div>
          <div className="0">0</div>
          <div className="00">00</div>
          <div className="equals">=</div>
        </div>
        <div className="modifiers">
          <div className="plus">+</div>
          <div className="minus">-</div>
          <div className="multiply">/</div>
          <div className="divide">*</div>
        </div>
      </div>
    </>
  )
}

export default App
