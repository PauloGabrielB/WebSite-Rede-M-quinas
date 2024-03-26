import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/page01/Home'
import Equipamentos from './pages/page02/Equipamentos'
import Betoneiras from './pages/page02/Categorias/Betoneiras.Jsx'
import Caminhao from './pages/page02/Categorias/Caminhao'
import Compactador from './pages/page02/Categorias/Compactador.jsx'
import Compressores from './pages/page02/Categorias/Compressores.jsx'
import Container from './pages/page02/Categorias/Container.jsx'
import Diversos from './pages/page02/Categorias/Diversos.jsx'
import Escoramento from './pages/page02/Categorias/Escoramento.jsx'
import Ferramentas from './pages/page02/Categorias/Ferramentas.jsx'
import Geradores from './pages/page02/Categorias/Geradores.jsx'





function App() {

  return (
    <>
     <BrowserRouter>
     <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/Equipamentos' element={<Equipamentos />}/>
      <Route path='/Betoneiras' element={<Betoneiras />}/>
      <Route path='/Caminhao' element={<Caminhao />}/>
      <Route path='/Compactador' element={<Compactador />}/>
      <Route path='/Compressores' element={<Compressores />}/>
      <Route path='/Container' element={<Container />}/>
      <Route path='/Diversos' element={<Diversos />}/>
      <Route path='/Escoramento' element={<Escoramento />}/>
      <Route path='/Ferramentas' element={<Ferramentas />}/>
      <Route path='/Geradores' element={<Geradores />}/>

      <Route path='*' element={<h1>Not Found</h1>}/>
     </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
