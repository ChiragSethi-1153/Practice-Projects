import React from 'react'
import dice from '../assets/dice.png'
import { useNavigate } from 'react-router-dom'
import './Home.css'

const Home = () => {

    const navigate = useNavigate();
  return (
    <div className='home'>
        <div className='home-left'>
            <img src={dice} className='dice-img' />
        </div>
        <div className='home-right'>
            <h1>
                DICE GAME
            </h1>
            <button onClick={() => navigate('/game')}>Play Now</button>
        </div>
    </div>
  )
}

export default Home
