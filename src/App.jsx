import { useState } from 'react'
import mor from './assets/mivida.jpg'
import mor2 from './assets/mor2.jpg'
import mor3 from './assets/mor3.jpg'
import './App.css'
import frase_data from './data/frases'

function App() {
  const [frase, setFrase] = useState(frase_data[Math.floor(Math.random() * frase_data.length)])

  console.log("frase", frase)
  return (
    <>
      <h1>Jhesy</h1>
      <br />
      <p className='f-perdon'>Se que mis errores , te han causado inseguridades, se que cada lagrima
        <br />que has derramado no la merezco, y cada una de ellas sera mi tortura
        <br />pero de los miles de errores que cometere en mi vida
        <br />el perderte no es una opcion..
      </p>
      <div>
        <a target="_blank">
          <img src={ mor } className="foto-jhes" alt="Vite logo" />
        </a>
        <a target="_blank">
          <img src={ mor2 } className="foto-jhes" alt="Vite logo" />
        </a>
        <a target="_blank">
          <img src={ mor3 } className="foto-jhes" alt="Vite logo" />
        </a>

      </div>
      <h1>Mi Vida</h1>
      <div className="card">
        <button onClick={
          () => {
            setFrase(frase_data[Math.floor(Math.random() * frase_data.length)])
          }
        } >
          TOCAME
        </button>
      </div>
      <div className="container fa fa-heart">
        <div className="contenido">
          <h1>para ti ..................... : </h1>
          <p>{ frase.frase }
          </p>
        </div>
      </div>

    </>
  )
}

export default App
