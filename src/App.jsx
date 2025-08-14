import React from 'react'
import Home from './home/Home'
import { Route, Routes } from 'react-router-dom'
import Stores from './stores/Stores'
import About from './about/About'
import Contact from './contact/contact'


const App = () => {
  return (
    <>
      <div className="dark:bg-slate-900 dark:text-white">
        <Routes>
          <Route path='/booking-store/' element={<Home />} />
          <Route path='/booking-store/store' element={<Stores />} />
          <Route path='/booking-store/about' element={<About />} />
          <Route path='/booking-store/contact' element={<Contact />} />
        </Routes>
      </div>
    </>
  )
}

export default App
