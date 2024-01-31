import React, { useState } from 'react'
import './Game.css'
const SelectNumber = () => {

    const array = [1, 2, 3, 4, 5, 6];
    const [selectedNo, setSelectedNo] = useState()

    return (
        <div className='select-number' >
            {
                array.map((value, i) => (
                    <div 
                    className='box' 
                    key={i} 
                    onClick={() => setSelectedNo} 
                    isSelected={value === selectedNo}
                    >
                     {value}
                    </div>
                ))
            }

        </div>
    )
}

export default SelectNumber
