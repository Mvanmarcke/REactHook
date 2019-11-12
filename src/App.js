
import React, { useState }from 'react';

function Counter() {
  // Déclare une nouvelle variable d'état, qu’on va appeler « count »
  // Déclare une fonction setCount qui permet de modifier la valeur de count
  const [count, setCount] = useState(0);
  
  return (
    <div>
      <p>Le compteur est  à : {count} </p>
      <button onClick={() => setCount(count + 1)}>
        +1
      </button>
      <button onClick={() => setCount(count - 1)}>
        -1
      </button>
      <input type= "number" id="number"  onChange={(event) => setCount(Number(event.target.value))}/>
    </div>
  );
}

export default Counter;
