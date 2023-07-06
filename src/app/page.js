'use client'

import { useState } from "react"
import Navbar from './Navbar'

export default function Home() {

const [resultado, setResultado] = useState('');

const handleClick = (e) => {
  setResultado(resultado.concat(e.target.id));
};

const handleClick0 = (e) => {
  setResultado(resultado.concat(e.target.id));
};

const borrarElemento = () => {
  setResultado(resultado.slice(0, -1));
};

const limpiar = () => {
  setResultado('');
};

const calcular = () => {
  try {
    setResultado(eval(resultado).toString());
  } catch (error) {
    setResultado('Sintax Error')
  }
};

  return (
    <main className="text-white">
    <Navbar/>
      <div className="bg-slate-800 w-80 mx-auto mt-10 p-4 rounded-lg shadow-lg">
        <input className="bg-transparent w-full text-right py-1 px-5 text-2xl---" type="text" value={resultado} disabled/>

        <div className="grid grid-cols-4 gap-y-4 gap-x-3 mt-4">
          <button className="bg-slate-700 rounded-lg p-2 transtition duration-300 active:-translate-y-1 text-xl" onClick={limpiar}>Ac</button>
          <button className="bg-slate-700 rounded-lg p-2 transtition duration-300 active:-translate-y-1 text-xl" onClick={borrarElemento}>Del</button>
          <button id='.' className="bg-slate-700 rounded-lg p-2 transtition duration-300 active:-translate-y-1 text-xl" onClick={handleClick}>.</button>
          <button id='/' className="bg-slate-700 rounded-lg p-2 transtition duration-300 active:-translate-y-1 text-xl" onClick={handleClick}>/</button>
          <button id='7' className="bg-slate-600 rounded-lg p-2 transtition duration-300 active:-translate-y-1 text-xl" onClick={handleClick}>7</button>
          <button id='8' className="bg-slate-600 rounded-lg p-2 transtition duration-300 active:-translate-y-1 text-xl" onClick={handleClick}>8</button>
          <button id='9' className="bg-slate-600 rounded-lg p-2 transtition duration-300 active:-translate-y-1 text-xl" onClick={handleClick}>9</button>
          <button id='+' className="bg-slate-700 rounded-lg p-2 transtition duration-300 active:-translate-y-1 text-xl" onClick={handleClick}>+</button>
          <button id='6' className="bg-slate-600 rounded-lg p-2 transtition duration-300 active:-translate-y-1 text-xl" onClick={handleClick}>6</button>
          <button id='5' className="bg-slate-600 rounded-lg p-2 transtition duration-300 active:-translate-y-1 text-xl" onClick={handleClick}>5</button>
          <button id='4' className="bg-slate-600 rounded-lg p-2 transtition duration-300 active:-translate-y-1 text-xl" onClick={handleClick}>4</button>
          <button id='-' className="bg-slate-700 rounded-lg p-2 transtition duration-300 active:-translate-y-1 text-xl" onClick={handleClick}>-</button>
          <button id='3' className="bg-slate-600 rounded-lg p-2 transtition duration-300 active:-translate-y-1 text-xl" onClick={handleClick}>3</button>
          <button id='2' className="bg-slate-600 rounded-lg p-2 transtition duration-300 active:-translate-y-1 text-xl" onClick={handleClick}>2</button>
          <button id='1' className="bg-slate-600 rounded-lg p-2 transtition duration-300 active:-translate-y-1 text-xl" onClick={handleClick}>1</button>
          <button id='*' className="bg-slate-700 rounded-lg p-2 transtition duration-300 active:-translate-y-1 text-xl" onClick={handleClick}>*</button>
          <button id='0' className="bg-slate-600 rounded-lg p-2 transtition duration-300 active:-translate-y-1 text-xl" onClick={handleClick}>0</button>
          <button id='00' className="bg-slate-600 rounded-lg p-2 transtition duration-300 active:-translate-y-1 text-xl" onClick={handleClick}>00</button>
          <button id='=' className="col-span-2 bg-slate-700 rounded-lg p-2 transtition duration-300 active:-translate-y-1 text-xl" onClick={calcular}>=</button>

        </div>
      </div>
    </main>
  )
}
