import React from "react";
import { Link } from "react-router-dom";

const CompraRealizada = () => {
  return (
    <div className="container p-5 text-center">
      <img src="././img/Correcto.png" alt="Compra Exitosa" className="img-fluid mb-4 w-25" />
      <h2>¡Compra realizada con éxito!</h2>
      <p>Gracias por tu compra. Tu pedido ha sido procesado con éxito.</p>
      <Link to="/" className="btn btn-primary">
        Volver a la tienda
      </Link>
    </div>
  );
};

export default CompraRealizada;
