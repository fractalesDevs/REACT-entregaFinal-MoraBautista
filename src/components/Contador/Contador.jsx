import { useContext } from 'react';
import { useState, useEffect } from 'react'
import { CarritoContexto } from '../../context/CarritoContexto';

const Contador = () => {
  const { piezasAcumuladas } = useContext(CarritoContexto);
    const [contador, setearContador] = useState(0);
const sumarCount = () => {
    setearContador(contador + 1)
    console.log("piezasAcumuladas")
}
const restarCount = () => {
    setearContador(contador - 1);
}
/*
useEffect(()=>{
  console.log('Tarea pesada o asincrónica o API');
})
useEffect(()=>{
  console.log('Tarea de una sola vez');
}, [])
*/
  return (
    <>
    <div className='row justify-content-center'>
      <div className='col-auto'>
      <button className='btn btn-light' onClick={restarCount}>-</button>
      </div>
      <div className='col-auto'>
      <p>{contador}</p>
      </div>
      <div className='col-auto'>
      <button className='btn btn-light' onClick={sumarCount}>+</button>
      </div>
    </div>
    </> 
  )
}

export default Contador