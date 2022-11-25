import React, { useContext } from 'react'
import { CalContext } from '../Context/CalContext'



const Screen = () => {
    const {calc} = useContext  (CalContext)
  return (

    // dont forget to install Taxtfit
    <div className='screen' max={70} mode="single" >{calc.num ?  calc.mum : calc.res}</div>
  )
}

export default Screen