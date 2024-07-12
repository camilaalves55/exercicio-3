import '../style.css';
import React, { useMemo } from 'react';

const CalculoFatorial = ({ numero }) => {
  const calcularFatorial = (n) => {
    if (n === 0 || n === 1) return 1;
    return n * calcularFatorial(n - 1);
  };

  const fatorial = useMemo(() => calcularFatorial(numero), [numero]);

  return (
    <div className="calculo-fatorial">
      <h2>Fatorial de {numero} é {fatorial}</h2>
    </div>
  );
};

export default CalculoFatorial;
