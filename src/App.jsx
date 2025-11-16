import React from 'react'
import Nav from './Components/Navbar/Nav'
import Hero from './pages/Hero'
import Footer from './Components/Footer/Footer'
import Testimonial from './pages/Testimonial'
import Reach from './pages/Reach'
import Faq from './pages/Faq'

const App = () => {
  return (
    <main >
      <Nav/>
      <Hero/>
      <Testimonial/>
      <Reach/>
      <Faq/>
      <Footer/>

    </main>
  )
}

export default App
