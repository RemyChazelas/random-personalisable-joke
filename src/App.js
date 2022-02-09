import { useRef, useState } from 'react';
import './App.css';
import useRandomJoke from './useRandomJoke';

function App() {
  const firstNameRef = useRef(null)
  const laststNameRef = useRef(null)

  const [firstName, setFirstName] = useState('Rémy')
  const [lastName, setLastName] = useState('Chz')

  const joke = useRandomJoke(firstName, lastName)

  const generateJoke = (e) => {
    e.preventDefault();
    setFirstName(firstNameRef.current.value)
    setLastName(laststNameRef.current.value)
  }

  return (
    <div className="App">
      <h1>générateur de blagues personnalisés</h1>
      <h2>{joke}</h2>
      <form >
        <input placeholder='prénom' ref={firstNameRef} />
        <input placeholder='nom' ref={laststNameRef} />
        <button onClick={generateJoke}>nouvelle blague perso</button>
      </form>
    </div>
  );
}

export default App;
