import React from 'react';
// import { Saluda, Text, Contador } from './sections/components';
import { Formulario } from './sections/forms';
import logo from './logo.svg';
import './App.css';

function App() {
  const ceo = {
    nombre: 'Alex',
    email: 'alex@email.com',
  };
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <Formulario />

        {/* <Contador />
        <Text
          nombre='Sandro'
          number={88}
          isActivated
          arrayOfNumber={[1, 2, 5, 40]}
          objecto={ceo}
          titulo={<h1>Titulo de la web</h1>}
        />
        <Saluda nombre='Alex Colombo' /> */}
      </header>
    </div>
  );
}

export default App;
