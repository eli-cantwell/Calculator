import { MouseEvent, useState } from 'react';

function App() {
  const [displayNum, setDisplayNum] = useState<string>('0');
  const [oldNum, setOldNum] = useState<number | null>(null);
  const [modifier, setModifier] = useState<string | null>(null);

  function handleNumClick(e: MouseEvent<HTMLButtonElement>) {
    const num = e.currentTarget.value;
    setDisplayNum(prev => (prev === '0' ? num : prev + num));
  }

  function handleClear(e: MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    setDisplayNum('0');
    setOldNum(null);
    setModifier(null);
  }

  function handleResult(e: MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    if (oldNum !== null && modifier !== null) {
      const result = calculate(Number(oldNum), Number(displayNum));
      setDisplayNum(result.toString());
      setOldNum(Number(result));
      setModifier(null);
    }
  }

  function calculate(a: number, b: number): number | string {
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
      setOldNum(Number(displayNum));
    } else if (modifier !== null) {
      const result = calculate(Number(oldNum), Number(displayNum));
      setOldNum(Number(result));
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