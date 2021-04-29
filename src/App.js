import React from 'react';
import logo from './assets/imgs/logo.svg';
import './assets/css/App.css';
import MiComponente from './components/MiComponente';

function HolaMundo(nombre, edad) {
  var valor = (
    <div>
      <h2> Hola gente, soy {nombre} </h2>
      <h3> Tengo {edad} años </h3>
    </div>
  )
  return valor;
}

function App() {
  var nombre = "Lucas Perez"
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          
        </p>
        {HolaMundo(nombre, 28)}
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      <section className="componentes">
        <MiComponente/>
      </section>
      </header>
    </div>
  );
}

export default App;
