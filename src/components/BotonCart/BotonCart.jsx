import React from 'react'
import { Link } from 'react-router-dom'

const BotonCart = () => {
  return (
            <>
            <div className='row justify-content-center'>
                <Link to='/carrito' >
                    <button 
                        className="btn btn-success" 
                        onClick={()=>console.log('ir a carrito') } 
                    >Ir a carrito</button>
                </Link>
                <Link to='/' >
                    <button 
                        className="btn btn-secondary" 
                        onClick={()=>console.log('ir al Inicio') } 
                    >Ver más artículos</button>
                </Link>
                </div>
            </>
        )
}

export default BotonCart