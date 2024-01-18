import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import Navbar from './components/Navbar/Navbar';
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CompraRealizada from "./components/CompraRealizada/CompraRealizada";
import "./App.css";

function App() {
  return (
    <div className="container p-5 row">
          <BrowserRouter>
      <Navbar />

        <Routes>
          <Route path="/" element={<ItemListContainer saludo="Bienvenido a Warehouse" />} />
          <Route path="/categoria/:categoria" element={<ItemListContainer saludo="Bienvenido a Warehouse"/>} />
          <Route path="/detalle/:idProducto" element={<ItemDetailContainer />} />
          <Route path="/compra-realizada" element={<CompraRealizada />} />
          <Route path="*"  element={ <div>Error: La pagina no existe</div>} />
        </Routes>
      </BrowserRouter>
    </div>

  )
}

export default App