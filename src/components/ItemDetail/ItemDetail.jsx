const ItemDetail = ({id,nombre,clas,piezas,precio,img}) => {
  return (
    <div className="col-lg-12 col-md-12 col-sm-12">
    <div className="card product">
    <div className="card-header">
    <h4>{nombre}</h4>
  </div>
  <img className="card-img-top img-prod" src={img} alt={id} />
  <div className="card-body">
    <p>Categoría: {clas} </p>
    <p>Piezas disponibles: {piezas}</p>
    <p>Precio: ${precio} mxn</p>
    
    <button className="btn btn-success">COMPRAR</button>
  </div>
</div>
</div>
  )
}

export default ItemDetail