import { Routes, Route } from 'react-router'
import Home from './pages/Home'
import Products from './pages/Products'
import About from './pages/About'
import ProductDetail from './pages/ProductDetail'
import Header from './components/Header'
import Footer from './components/Footer'
import NotFound from './pages/NotFound'

const App = () => {

  return (
    <div className='page'>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/products' element={<Products />} />
        <Route path='/about' element={<About />} />
        <Route path='/product/:id' element={<ProductDetail />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
