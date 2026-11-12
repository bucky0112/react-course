import { Routes, Route } from 'react-router' 
import Home from './pages/Home'
import Products from './pages/Products'
import About from './pages/About'
import ProductDetail from './pages/ProductDetail'

const App = () => { 
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/products' element={<Products /> } />
      <Route path='/about' element={<About />} />
      <Route path='/product/:id' element={<ProductDetail />} />
    </Routes>
  )
}

export default App