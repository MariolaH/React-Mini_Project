import React, { useEffect } from 'react';
import { getData } from '../utils/data';
import { getLocalStorage } from '../utils/localStorage';

export default function Elixirs() {
  const ENDPOINT = 'Elixirs';
  
  useEffect(() => {
    let data = getLocalStorage(ENDPOINT);
    if (data.length > 0) {
      setElixirs(data);
    } else {
      getData(ENDPOINT)
        .then((data) => {
          setElixirs(data);
          setLocalStorage(ENDPOINT, data);
        })
    }
  }, []);

  return (
    <main style={{ padding: "1rem 0" }} className="container">
      <div className="row text-center justify-content-center gap-2">
        <h2>Elixirs</h2>
        {elixirs.map((elixir) => <Elixir key={elixir.id} elixir={elixir} />)}
      </div>
    </main>
  );
}

const Elixir = ({ elixir }) => {
  return (
    <div className='card col-3'>
      <div className="card-body">
        {elixir.name && <h2 className='card-title'>{elixir.name}</h2>}
        <div><strong>Effect:</strong> {elixir.effect}</div>
        <div><strong>Side Effects:</strong> {elixir.sideEffects}</div>
        <div><strong>Characteristics:</strong> {elixir.characteristics}</div>
        <div><strong>Ingredients:</strong> {elixir.ingredients.map((ingredient) => ingredient.name).join(', ')}</div>
        <div><strong>Time:</strong> {elixir.time}</div>
        <div><strong>Difficulty:</strong> {elixir.difficulty}</div>
        <div><strong>Manufacturer:</strong> {elixir.manufacturer}</div>
      </div>
    </div>
  )
}