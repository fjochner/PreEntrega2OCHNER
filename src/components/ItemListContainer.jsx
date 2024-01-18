import React from 'react'

const ItemListContainer = ({ greeting }) => {
  const productos = [
    {id: `bib001`, nombre: `Biblioteca "Agustina"`, precio: 30000, descripcion: "Biblioteca hecha con madera Pitiribi", medidas: "Alto: 1,70m - Ancho: 0,90m - Profundidad: 0,30m"},
    {id: `bib002`, nombre: `Biblioteca "Delfina"`, precio: 32000, descripcion: "Biblioteca hecha con madera Pitiribi", medidas: "Alto: 1,70m - Ancho: 1,00m - Profundidad: 0,30m"},
    {id: `bib003`, nombre: `Biblioteca "Camila"`, precio: 40000, descripcion: "Biblioteca hecha con madera Pitiribi", medidas: "Alto: 1,80m - Ancho: 1,20m - Profundidad: 0,40m"},
    {id: `rac101`, nombre: `Rack "Alfonsina"`, precio: 45000, descripcion: "Rack para TV hecho con madera Pitiribi", medidas: "Alto: 0,50m - Ancho: 2,10m - Profundidad: 0,35m"},
    {id: `rac102`, nombre: `Rack "Cala"`, precio: 45000, descripcion: "Rack para TV hecho con madera Pitiribi", medidas: "Alto: 0,60m - Ancho: 2,00m - Profundidad: 0,35m"},
    {id: `rac103`, nombre: `Rack "Juli"`, precio: 60000, descripcion: "Rack para TV hecho con madera Pitiribi", medidas: "Alto: 0,60m - Ancho: 2,50m - Profundidad: 0,40m"},
    {id: `esc201`, nombre: `Escritorio "Vitto"`, precio: 32000, descripcion: "Escritorio hecho con madera Pitiribi", medidas: "Alto: 0,70m - Ancho: 1,80m - Profundidad: 0,50m"},
    {id: `esc203`, nombre: `Escritorio "Vanesa"`, precio: 35000, descripcion: "Escritorio hecho con madera Pitiribi", medidas: "Alto: 0,70m - Ancho: 1,80m - Profundidad: 0,70m"},
    {id: `esc202`, nombre: `Escritorio "Pablo"`, precio: 38000, descripcion: "Escritorio hecho con madera Pitiribi", medidas: "Alto: 0,70m - Ancho: 2,10m - Profundidad: 0,70m"},
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
