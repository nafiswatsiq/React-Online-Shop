import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Base from './layouts/Base'
import ProductList from './pages/ProductList'
import DetailProduct from './pages/DetailProduct'
import Login from './pages/Login'
import AuthProvider, { useAuth } from './hooks/AuthProvider'
import PrivateRoute from './hooks/PrivateRoute '
import Register from './pages/Register'
import Checkout from './pages/Checkout'

function App() {

  return (
    <>
    <Router>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Base />} >
            <Route index element={<Home />} />
            <Route path="products" element={<ProductList />} />
            <Route path="products/:id" element={<DetailProduct />} />

            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />

            {/* protected route */}
            <Route element={<PrivateRoute />} >
              <Route path="/dashboard" element={<Home />} />
              <Route path="/checkout" element={<Checkout />} />
            </Route>


          </Route>
          <Route path="*" element={<h1>Not Found</h1>} />
        </Routes>
      </AuthProvider>
    </Router>
    </>
  )
}

export default App
