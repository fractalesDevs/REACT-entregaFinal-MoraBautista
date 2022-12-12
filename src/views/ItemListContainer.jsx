import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemList from '../components/ItemList/ItemList';
import ParrafosTexto from '../components/ParrafosTexto/ParrafosTexto';
import consulta from '../helpers/consulta';
import './ItemListContainer.css'

function ItemListContainer() {

  const [products, setProducts] = useState( [] );
  const [cargando,setCargando] = useState(true);
  
 const { catId } = useParams()
 console.log(catId)

  useEffect( () => {
    if (catId) {
         //setInterval(()=>{
          consulta() //Simulación de fetch
          .then( respuestaAceptado => setProducts(respuestaAceptado.filter(catego=>catego.clas===catId)))
          .catch(err => console.log(err) )
          .finally(()=>setCargando(false))
        //}, 5000);
    } else {
      //setInterval(()=>{
        consulta() //Simulación de fetch
        .then( respuestaAceptado => setProducts(respuestaAceptado))
        .catch(err => console.log(err) )
        .finally(()=>setCargando(false))
      //}, 5000);
      
    }
  }, [catId])

  //console.log('Mis productos : ', products);

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
            <ItemList key={product.id} id={product.id} nombre={product.nombre} clas={product.clas} piezas={product.piezas} precio={product.precio} img={product.img} />) }
        </div>
      </div>
      
    </>
  );
}

export default ItemListContainer;
