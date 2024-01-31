import React, { useState } from 'react'
import './Game.css'
import dice_1 from '../assets/dice_1.jpg'

const RoleDice = () => {

    const [currentDice, setCurrentDice] = useState();
    
    const randomNo = (min, max) => {
        return Math.floor(Math.random() * (max - min) + min)
    }

    const roleDice = () => {
        const randomNumber = randomNo(1,7);
        setCurrentDice((prev) => randomNumber)
    }

  return (
    <div className='Dice' onClick={roleDice}>
      <img src={`dice_${currentDice}`} />
    </div>
  )
}

export default RoleDice
