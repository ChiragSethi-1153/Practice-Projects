import React from 'react'
import './Game.css'
import TotalScore from './TotalScore'
import SelectNumber from './SelectNumber'
import RoleDice from './RoleDice'

const Game = () => {
  return (
    <div className='gameplay'>
      <div className='top'>
        <TotalScore />
      <div className='choose-btn' style={{display: 'flex', flexDirection:'column', alignItems: 'flex-end'}}>
          <SelectNumber />
          <p style={{fontSize: '24px', fontWeight: '700'}}>Select Number</p>
      </div>
      </div>

      <div className='bottom'>
        <RoleDice />
        <p style={{fontSize: '24px'}}>Click on Dice to roll</p>
      </div>
      
    </div>
  )
}

export default Game
