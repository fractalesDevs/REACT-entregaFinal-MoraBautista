import React from 'react'
import consulta from '../helpers/consulta'
import { useState } from 'react';
import { useEffect } from 'react';
import ItemDetail from '../components/ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';
import { doc, getDoc, getFirestore } from 'firebase/firestore'

const ItemDetailContainer = () => {

  const {prodId} = useParams()


    const [proDetalle, setProDetalle] = useState( {} );

    /* useEffect( () => {
        consulta(prodId) //Simulación de fetch
        .then( producto => setProDetalle(producto))
        .catch(err => console.log(err) )
    }, []) */

    useEffect(()=>{
      const db = getFirestore()
      const queryDoc = doc(db,'productos',prodId)
    
      getDoc(queryDoc)
      .then(respuesta => setProDetalle ( { id:respuesta.id,...respuesta.data() } ))
      .catch(err => console.log(err))
      // .finally(()=>setCargando(false))
        },[])



  return (
    <>
    <ItemDetail key={proDetalle.id} proDetalle={proDetalle} />
    </>
  )
}

export default ItemDetailContainer