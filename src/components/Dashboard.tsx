import React from 'react'
import Header from './Header'
import Topics from './Topics'

const Dashboard = () => {
  return (
    <div>
      <Header />
      <div className='container-width'>
        <Topics />
      </div>
    </div>
  )
}

export default Dashboard
