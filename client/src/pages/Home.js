import React from 'react'
import Bookslider from '../components/Bookslider'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import Layout from './Layout'


const Home = () => {

  return (
    <Layout>
    
    <Hero/>
    <Bookslider/>
    <Footer/>
    </Layout>
  )
}

export default Home