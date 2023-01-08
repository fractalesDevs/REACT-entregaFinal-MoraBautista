import React from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'

import Navbar from './components/Navbar/Navbar'
import ItemListContainer from './views/ItemListContainer'
import ItemDetailContainer from './views/ItemDetailContainer'
import CarritoContainer from './views/CarritoContainer'
import { prod } from './helpers/consulta'

import './App.css'
import { createContext } from 'react'

export const ContextoGral = createContext( [] ) // Carrito de compra


function App() {

  const saludar = ()=> console.log('Hola Bola!!!')
  console.log(ContextoGral);

  return ( 
   
    <ContextoGral.Provider value={
      {
        prod,
        saludar
      }
    }>

<BrowserRouter>
      <Navbar />
      <Routes>

        <Route path='/' element={<ItemListContainer />} />
        <Route path='/detalle' element={<ItemDetailContainer />} />
        <Route path='/carrito' element={<CarritoContainer />} />
        <Route path='/categoria/:catId' element={<ItemListContainer />} />
        <Route path='/detalle/:prodId' element={<ItemDetailContainer />} />

        <Route path='*' element={<Navigate to='/' />} />
      </Routes>

      
    </BrowserRouter>

    </ContextoGral.Provider>

   
   )

}

export default App
