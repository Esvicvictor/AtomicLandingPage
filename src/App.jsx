import React from 'react'
import "./index.css"
// import Navbar from './components/Navbar'
// import Hero from './components/Hero'
// import About from './components/About'
import Error from './Pages/Error'
import { BrowserRouter , Routes , Route } from 'react-router-dom'
import HomePage from './Pages/HomePage'


const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route element={<HomePage/>} index/>
        <Route path="*" element={<Error/>} />
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
