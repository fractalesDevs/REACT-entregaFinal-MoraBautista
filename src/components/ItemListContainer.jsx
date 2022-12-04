import ParrafosTexto from './ParrafosTexto'

function ItemListContainer() {
  return (
    <div id="items">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <ParrafosTexto titulo='Primer Título' txt='Este es un parrafo de texto' />
            <ParrafosTexto titulo='Segundo Título' txt='Este es otro párrafo mediante prop' />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ItemListContainer;
