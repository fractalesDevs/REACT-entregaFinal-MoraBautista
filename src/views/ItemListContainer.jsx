import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemList from '../components/ItemList/ItemList';
import ParrafosTexto from '../components/ParrafosTexto/ParrafosTexto';



import { collection,getDocs, getFirestore } from 'firebase/firestore'

import './ItemListContainer.css'


function ItemListContainer() {

  const [products, setProducts] = useState( [] );
  const [cargando,setCargando] = useState(true);
  
 const { catId } = useParams()

  useEffect(()=>{
    const db = getFirestore()
    const queryCollection = collection(db,'productos')
  
    if (catId) {
      getDocs(queryCollection)
      .then(respuesta =>respuesta.docs.map(product => ({ id:product.id,...product.data() }) ) )
      .then( respuestaAceptado => setProducts(respuestaAceptado.filter(catego=>catego.clas===catId)))
      .catch(err => console.log(err))
      .finally(()=>setCargando(false))
    }else{
      getDocs(queryCollection)
      .then(respuesta =>setProducts (respuesta.docs.map(product => ({ id:product.id,...product.data() }) )) )
      .catch(err => console.log(err))
      .finally(()=>setCargando(false))
    }
      },[catId])

  return (
    <>
    
      <div className="container" id='listadoProductos'>
        <div className="row">
        
          <div className="col-lg-12">
            <ParrafosTexto titulo='Bienvenido a nuestra tienda' txt='Esperamos que encuentres algo que te agrade. :)' />
          </div>
        </div>
        <div className="row">
      
          {cargando ?
           <h4 className='btn btn-danger'>
            Cargando productos...
            </h4> :
           products.map( (product) => 
            <ItemList key={product.id} product={product} />) }
        </div>
      </div>
      
    </>
  );
}

export default ItemListContainer;
