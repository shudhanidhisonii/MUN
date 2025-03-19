import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Committee from '../components/Committee'

const Committees = () => {
  return (
   <>
     <Navbar fixedColor="blue" />
     <Committee />
     <Footer />
   </>
  )
}

export default Committees
