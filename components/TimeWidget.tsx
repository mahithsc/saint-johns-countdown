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
        <div className='text-white '>{days}</div>
        <div className='text-white'>days</div>
      </div>
      <div className='flex flex-col items-center'>
        <div className='text-white'>{hours}</div>
        <div className='text-white'>hours</div>
      </div>
      <div className='flex flex-col items-center'>
        <div className='text-white'>{minutes}</div>
        <div className='text-white'>minutes</div>
      </div>
      <div className='flex flex-col items-center'>
        <div className='text-white'>{seconds}</div>
        <div className='text-white'>seconds</div>
      </div>
    </div>
  )
}

export default TimeWidget