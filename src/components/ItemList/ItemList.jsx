import { Link } from "react-router-dom";

import "./ItemList.css";

const ItemList = ({ product }) => {
  return (
    <div className="col-lg-4 col-md-6 col-sm-12">
      <div className="card product">
        <div className="card-header">
          <h4>{product.nombre}</h4>
        </div>
        <img
          className="card-img-top img-prod"
          src={product.img}
          alt={product.id}
        />
        <div className="card-body">
          <p>Categoría: {product.clas} </p>
          <p>Precio: ${product.precio} mxn</p>

          <Link to={`/detalle/${product.id}`} className="btn btn-success">
            VER DETALLE
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ItemList;
