import { useState } from 'react';

function App() {
  const [displayNum, setDisplayNum] = useState('0');
  const [oldNum, setOldNum] = useState(null);
  const [modifier, setModifier] = useState(null);

  function handleNumClick(e) {
    const num = e.target.value;
    setDisplayNum(prev => (prev === '0' ? num : prev + num));
  }

  function handleClear(e) {
    e.preventDefault();
    setDisplayNum('0');
    setOldNum(null);
    setModifier(null);
  }

  function handleResult(e) {
    e.preventDefault();
    if (oldNum !== null && modifier !== null) {
      const result = calculate(Number(oldNum), Number(displayNum));
      setDisplayNum(result.toString());
      setOldNum(result);
      setModifier(null);
    }
  }

  function calculate(a, b) {
    switch (modifier) {
      case '+':
        return a + b;
      case '-':
        return a - b;
      case '*':
        return a * b;
      case '/':
        return b !== 0 ? a / b : 'Error'; 
      default:
        return b;
    }
  }

  function handleMath(e) {
    e.preventDefault();
    if (oldNum === null) {
      setOldNum(displayNum);
    } else if (modifier !== null) {
      const result = calculate(Number(oldNum), Number(displayNum));
      setOldNum(result);
    }
    setDisplayNum('0');
    setModifier(e.target.value);
  }

  return (
    <div className="calc-div">
      <div className="display">{displayNum}</div>
      <div className="numpad">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map(num => (
          <button key={num} value={num} onClick={handleNumClick}>
            {num}
          </button>
        ))}
        <button value="C" onClick={handleClear}>
          C
        </button>
        <button onClick={handleResult}>
          =
        </button>
      </div>
      <div className="modifiers">
        {['+', '-', '*', '/'].map(op => (
          <button key={op} value={op} onClick={handleMath}>
            {op}
          </button>
        ))}
      </div>
    </div>
  );
}

export default App;