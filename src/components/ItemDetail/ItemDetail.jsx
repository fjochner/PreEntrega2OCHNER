import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./ItemDetail.css";

const ItemDetail = ({ producto }) => {
  const [compraRealizada, setCompraRealizada] = useState(false);

  const handleCompraClick = () => {
    setCompraRealizada(true);
  };

  return (
    <div className="card d-flex flex-row tarjeta">
      <img src={producto.imagen} alt={producto.nombre} className="card-img-left img-fluid" />
      <div className="card-body">
        <h2 className="card-title"><b>{producto.nombre}</b></h2>
        <h3 className="card-text">${producto.precio}</h3>
        <p className="card-text text-center">{producto.descripcion}</p>
        <p className="card-text"><small className="text-muted">Medidas: {producto.medidas}</small></p>
        <Link to={`/compra-realizada`} className="btn btn-primary" onClick={handleCompraClick}>
            Comprar
        </Link>
      </div>
    </div>
  );
};

export default ItemDetail;