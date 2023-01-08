import { useState } from "react"
import BotonCart from "../BotonCart/BotonCart"
import ItemCount from "../ItemCount/ItemCount"

const Intercambio = () => {


    const [inputTipo,setInputTipo] = useState('button')

    const handlerChange = () => {
        setInputTipo('input')
    }
    const onAdd = (cantidad)=> {console.log(cantidad)}

  return (
    <>
    <div className="row justify-content-center">
    {
        inputTipo === 'button' ?
        <ItemCount 
        handlerChange={handlerChange} 
        stock={5} 
        initial={1} 
        onAdd={onAdd} />
        :
        <BotonCart />
    }
    </div>
    </>
  )
}

export default Intercambio