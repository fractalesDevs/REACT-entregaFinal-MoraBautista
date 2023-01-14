import { useState } from "react";
import { Link } from "react-router-dom";
import { addDoc, collection, getFirestore } from "firebase/firestore";

import { usarCarritoContexto } from "../context/CarritoContexto";

import "./CarritoContainer.css";


const CarritoContainer = () => {
  const {
    listaCarrito,
    vaciarCarro,
    reseteoCantidad,
    eliminarItem,
    restarItem,
    itemsTotales,
    precioTotal,
    restarPrecio,
    vaciarPrecio,
  } = usarCarritoContexto();

  const [dataFormulario, setDataFormulario] = useState({
    nombre: "",
    tel: "",
    mail: "",
    mail2: "",
  });

  const generarOrden = (evt) => {
    evt.preventDefault();

    const orden = {};

    if (dataFormulario.mail === dataFormulario.mail2) {
      orden.comprador = dataFormulario;
      orden.articulos = listaCarrito.map(({ nombre, id, precio }) => ({
        nombre,
        id,
        precio,
      }));
      orden.total = precioTotal;

      const db = getFirestore();
      const queryOrden = collection(db, "pedidos");

      addDoc(queryOrden, orden)
        .then((resp) => console.log(resp))
        .finally(() => vaciarCarro(), reseteoCantidad(), vaciarPrecio());
      alert("Pedido realizado");
    } else {
      alert("No coinciden los mails");
    }
  };

  const handleOnChange = (e) => {
    setDataFormulario({
      ...dataFormulario,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      {listaCarrito.length === 0 ? (
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12">
              <h2 className="avisoCarrito">
                No tienes artículos en el carrito <br></br>
                <Link to="/">
                  <button className="btn btn-dark">Explorar artículos</button>
                </Link>
              </h2>
            </div>
          </div>
        </div>
      ) : (
        <div className="container carritoListado">
          <h1>Carrito de compras</h1>

          {listaCarrito.map((prod) => (
            <div className="row filaCarrito" key={prod.id}>
              <div className="col-lg-5 col-md-5 col-sm-12">
                <img className="img-fluid" src={prod.img}></img>
              </div>
              <div className="col-lg-5 col-md-5 col-sm-10">
                <h4>{prod.nombre}</h4>
                <h4>
                  <button type="button" className="btn btn-dark">
                    Clasificación
                  </button>
                  <button type="button" className="btn btn-light">
                    {prod.clas}
                  </button>
                </h4>

                <h4>
                  <button type="button" className="btn btn-dark">
                    Precio
                  </button>
                  <button type="button" className="btn btn-light">
                    $ {prod.precio} mxn
                  </button>
                </h4>

                <h4>
                  <button type="button" className="btn btn-dark">
                    Piezas elegidas:
                  </button>
                  <button type="button" className="btn btn-light">
                    {" "}
                    {prod.cantidad}
                  </button>
                </h4>
              </div>
              <div className="col-lg-2 col-md-2 col-sm-2 ">
                <button
                  onClick={() => {
                    eliminarItem(prod),
                      restarItem(prod.cantidad),
                      restarPrecio(prod.precio, prod.cantidad);
                  }}
                  className="align-middle btn btn-outline-danger"
                >
                  Eliminar del carrito
                </button>
              </div>
            </div>
          ))}

          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-6">
              <p className="totales">Total de artículos: {itemsTotales}</p>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-6">
              <p className="totales">Costo total: $ {precioTotal} mxn</p>
            </div>
          </div>

          <div className="row">
            <form onSubmit={generarOrden}>
              <div className="form-group w-75">
                <label htmlFor="nombre">Datos de la compra</label>

                <input
                  type="text"
                  className="form-control"
                  name="nombre"
                  placeholder="Su nombre"
                  value={dataFormulario.nombre}
                  onChange={handleOnChange}
                ></input>

                <input
                  type="text"
                  className="form-control"
                  name="mail"
                  placeholder="Coloque su email"
                  value={dataFormulario.mail}
                  onChange={handleOnChange}
                ></input>

                <input
                  type="text"
                  className="form-control"
                  name="mail2"
                  placeholder="Email de nuevo"
                  value={dataFormulario.mail2}
                  onChange={handleOnChange}
                ></input>

                <input
                  type="number"
                  className="form-control"
                  name="tel"
                  placeholder="Coloque su móvil"
                  value={dataFormulario.tel}
                  onChange={handleOnChange}
                ></input>
              </div>

              <button className="btn btn-dark margenSup">Generar Orden</button>
            </form>

            <button
              className="btn btn-danger margenSup"
              onClick={() => {
                vaciarCarro(), reseteoCantidad(), vaciarPrecio();
              }}
            >
              Vaciar carrito
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default CarritoContainer;
