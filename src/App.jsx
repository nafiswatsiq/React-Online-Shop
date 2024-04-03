import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Base from './layouts/Base'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Base />} >
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </Router>
    </>
    // <BrowserRouter>
    //   <Routes>
    //   <Route path="/" element={<Layout />}>
    //     <Route index element={<Home />} />
    //     <Route path="blogs" element={<Blogs />} />
    //     <Route path="contact" element={<Contact />} />
    //     <Route path="*" element={<NoPage />} />
    //   </Route>
    //   </Routes>
    // </BrowserRouter>
  )
}

export default App
