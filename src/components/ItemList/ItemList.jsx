import { Link } from 'react-router-dom'
import './ItemList.css'

const ItemList = ({id,nombre,clas,piezas,precio,img}) => {

  return (
    <div className="col-lg-4 col-md-6 col-sm-12">
    <div className="card product">
    <div className="card-header">
    <h4>{nombre}</h4>
  </div>
  <img className="card-img-top img-prod" src={img} alt={id} />
  <div className="card-body">
    <p>Categoría: {clas} </p>
    <p>Piezas disponibles: {piezas}</p>
    <p>Precio: ${precio} mxn</p>
    
    <Link to={`/detalle/${id}`} className="btn btn-success">COMPRAR</Link>
  </div>
</div>
</div>
  )
}

export default ItemList