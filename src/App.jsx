import { useState } from 'react'
import mor from './assets/mivida.jpg'
import mor2 from './assets/mor2.jpg'
import mor3 from './assets/mor3.jpg'
import './App.css'
import frase_data from './data/frases'

function App() {
  const [frase, setFrase] = useState(frase_data[Math.floor(Math.random() * frase_data.length)])
  const [isError, setIsError] = useState(true);
  const [password, setPassword] = useState('');

  if (password === '081219JJ') {
    setIsError(false)
    setPassword('')
  }

  // console.log("isError", isError)

  // console.log("frase", frase)
  return (
    <>
      {
        isError ?
          <>
            <form onSubmit={ ev => {
              ev.preventDefault();
              // console.log("ev", ev.target.password.value)
            } }>
              <input
                type="password"
                id="password"
                name='password'
                placeholder="pronto ........ "
                onChange={ ev => {
                  setPassword(ev.target.value)
                } }
              />
              <button type='submit'
              >probar</button>
            </form>
          </> :
          <>
            <h1>Jhesy</h1>
            <br />
            <p className='f-perdon'>
              Aveces la vida nos cruza con personas pasajeras, pero dime porfavor que no eres una de ellas
              <br />
              Por que dejaria mi camino , para estar contigo
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
      }
    </>
  )
}

export default App
