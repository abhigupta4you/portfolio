import React from 'react'
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'
import About from './components/About'
import { Route, Routes } from 'react-router-dom'
import Contact from './components/Contact'

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route exact path='/' element={<Main/>} />
        <Route path='/about' element={<About/> } />
        <Route path='/contact' element={<Contact/>} />
      </Routes>
      <Footer />
    </div>

  )
}

export default App