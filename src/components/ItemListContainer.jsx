import React from 'react'

const ItemListContainer = ({ greeting }) => {
  const productos = [
    {nombre: `Biblioteca "Agustina"`, precio: 30000, descripcion: "Biblioteca hecha con madera Pitiribi", medidas: "Alto: 1,70m - Ancho: 0,90m - Profundidad: 0,30m"},
    {nombre: `Rack "Alfonsina"`, precio: 45000, descripcion: "Rack para TV hecho con madera Pitiribi", medidas: "Alto: 0,50m - Ancho: 2,10m - Profundidad: 0,35m"},
    {nombre: `Escritorio "Vitto"`, precio: 32000, descripcion: "Escritorio hecho con madera Pitiribi", medidas: "Alto: 0,70m - Ancho: 1,80m - Profundidad: 0,50m"},
  ]

  return (
    <div className="container">
      <h2>{greeting}</h2>
      <ul>
        {productos.map((producto, index) => (
          <li key={index}>
            <strong>{producto.nombre} - ${producto.precio}</strong> - {producto.descripcion} - <strong>Medidas: </strong>{producto.medidas}</li>
        ))}
      </ul>
    </div>
  )
}

export default ItemListContainer
