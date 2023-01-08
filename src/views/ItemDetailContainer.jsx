import React from 'react'
import consulta from '../helpers/consulta'
import { useState } from 'react';
import { useEffect } from 'react';
import ItemDetail from '../components/ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';

const ItemDetailContainer = () => {

  const {prodId} = useParams()


    const [proDetalle, setProDetalle] = useState( {} );

    useEffect( () => {
        consulta(prodId) //Simulación de fetch
        .then( producto => setProDetalle(producto))
        .catch(err => console.log(err) )
    }, [])



  return (
    <>
    <ItemDetail key={proDetalle.id} proDetalle={proDetalle} />
    </>
  )
}

export default ItemDetailContainer