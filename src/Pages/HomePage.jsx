import React from 'react'
import Navbar from '../components/Navbar'
import Hero from './Hero'
// import Modal from '../components/Modal'
import About from './About'
import Product from './Product'
import Team from './Team'
// import Comment from './Comment'


const HomePage = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <About/>
      <Product/>
      <Team/>
      {/* <Comment/> */}
      {/* <Modal/> */}
    </div>
  )
}

export default HomePage
