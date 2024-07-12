import './App.css';
import React, { useState } from 'react';
import CalculoFatorial from './components/CalculoFatorial';
import './style.css';

const App = () => {
  const [numero, setNumero] = useState(0);

  const handleChange = (event) => {
    setNumero(parseInt(event.target.value, 10) || 0);
  };

  return (
    <header className="App-header">
      <div className="app">
      <h1>Calculadora de Fatorial</h1>
      <input type="number" value={numero} onChange={handleChange} min="0"/>
      <CalculoFatorial numero={numero} />
      </div>
    </header>
  );
};

export default App;


// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//       </header>
//     </div>
//   );
// }

// export default App;
