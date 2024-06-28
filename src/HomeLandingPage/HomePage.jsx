import React from 'react'
import Home from '../components/Home'
import Search from '../components/Search'
import Stats from '../components/Stats'
import Qualities from '../components/Qualities'
import Rating from '../components/Rating'
import Houses from '../components/Houses'
import Contacts from '../components/Contacts'

const HomePage = () => {
  return (
    <div>
      <Home/>
      <Search/>
      <Stats/>
      <Qualities/>
      <Houses/>
      <Rating/>
      <Contacts/>
    </div>
  )
}

export default HomePage
