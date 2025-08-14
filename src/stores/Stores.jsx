import React from 'react'
import Navbar from '../components/Navbar'
import Store from '../components/store'
import Footer from '../components/Footer'

const Stores = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-screen">
        <Store />
      </div>
      <Footer />
    </>
  )
}

export default Stores
