import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from './Home'
import Game from './Game'

const Router = () => {
  return (
    <div>
      <Routes>
        <Route path='/' Component={Home} />
        <Route path='/game' Component={Game} />
      </Routes>
    </div>
  )
}

export default Router
