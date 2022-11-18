import React from 'react'
import Layout from './Layout'
import Notes from '../components/Notes'

const Chapters = () => {
  
  return (
    <Layout>
    <div className="container">
      <h2 className='bg-primary text-center p-3 m-3 rounded-4 text-white'>CHAPTERS LIST</h2>
      <Notes/>
    </div>
    </Layout>
  )
}

export default Chapters