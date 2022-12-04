import CartWidget from './CartWidget'

function NavBar() {
  const marca = "KHAYIM";
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-2 col-md-2 col-sm-4">
          <div id="marca"> {marca} </div>
        </div>
        <div className="col-lg-8 col-md-8 col-sm-6">
          <nav id="menu" className="navbar navbar-expand-lg navbar-light">
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse">
              <div className="navbar-nav">
                <a className="nav-item nav-link active" to="#">
                  Inicio
                </a>
                <a className="nav-item nav-link" to="#">
                  Macetas
                </a>
                <a className="nav-item nav-link" to="#">
                  Libretas
                </a>
                <a className="nav-item nav-link" to="#">
                  Llaveros
                </a>
                <a className="nav-item nav-link" to="#">
                  Artículos de madera
                </a>
              </div>
            </div>
          </nav>
        </div>
        <div className='col-lg-2 col-md-2 col-sm-2'>
            <CartWidget />
        </div>
      </div>
    </div>
  );
}

export default NavBar;
