import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Base from './layouts/Base'
import ProductList from './pages/ProductList'
import DetailProduct from './pages/DetailProduct'
import Login from './pages/Login'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Base />} >
          <Route index element={<Home />} />
          <Route path="products" element={<ProductList />} />
          <Route path="products/:id" element={<DetailProduct />} />

          <Route path="login" element={<Login />} />
        </Route>
      </Routes>
    </Router>
    </>
  )
}

export default App
