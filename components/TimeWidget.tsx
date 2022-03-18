import { NextPage } from 'next'
import React from 'react'

interface Props {
  days:string
  hours:string
  minutes:string
  seconds:string
}

const TimeWidget:NextPage<Props> = ({days, hours, minutes, seconds}) => {
  return (
    <div className='flex space-x-8'>
      <div className='flex flex-col items-center'>
        <div>{days}</div>
        <div>days</div>
      </div>
      <div className='flex flex-col items-center'>
        <div>{hours}</div>
        <div>hours</div>
      </div>
      <div className='flex flex-col items-center'>
        <div>{minutes}</div>
        <div>minutes</div>
      </div>
      <div className='flex flex-col items-center'>
        <div>{seconds}</div>
        <div>seconds</div>
      </div>
    </div>
  )
}

export default TimeWidget