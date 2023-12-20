import React from 'react'
import Navbar from './components/Navbar'
import CartWidget from './components/CartWidget'
import ItemListContainer from './components/ItemListContainer'

const App = () => {
  return (
    <div>
      <Navbar />
      <ItemListContainer greeting="Bienvenido a la Tienda de WAREHOUSE S.A." />
    </div>
  )
}

export default App