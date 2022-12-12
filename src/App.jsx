import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Contador from './components/Contador/Contador'
import ItemListContainer from './views/ItemListContainer'
import ItemDetailContainer from './views/ItemDetailContainer'
import CarritoContainer from './views/CarritoContainer'


import './App.css'

function App() {
  return ( 
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

      <Contador />
    </BrowserRouter>
   )

}

export default App
