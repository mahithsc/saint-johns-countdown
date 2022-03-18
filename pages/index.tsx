import { url } from 'inspector'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import TimeWidget from '../components/TimeWidget'
import Title from '../components/Title'

const Home: NextPage = () => {

  //useState Hook
  const [days, setDays]: any = useState("00")
  const [hours, setHours]: any = useState("00")
  const [minutes, setMinutes]: any = useState("00")
  const [seconds, setSeconds]: any = useState("00")

  const endDate = new Date()

  const finalDayOfSchool = new Date('May 6, 2022 014:18:00').getTime()

  const addAZeroWhenNeeded = (number: number) => {
    if (number.toString().length === 1) {
      return '0' + number
    }
    return number
  }

  const setDate = () => {
    let milliseconds: Date | string | number = new Date()
    milliseconds = finalDayOfSchool - milliseconds.getTime()
    let days = Math.trunc((milliseconds / (1000 * 60 * 60 * 24)))
    let hours = Math.trunc(((milliseconds / (1000 * 60 * 60)) % 24))
    let minutes = Math.trunc(((milliseconds / (1000 * 60)) % 60))
    let seconds = Math.trunc((milliseconds / 1000) % 60);
    setDays(addAZeroWhenNeeded(days))
    setHours(addAZeroWhenNeeded(hours))
    setMinutes(addAZeroWhenNeeded(minutes))
    setSeconds(addAZeroWhenNeeded(seconds))
  }

  useEffect(() => {
    setInterval(() => {
      setDate()
    }, 1000)
  }, [])

  //functions


  return (
    <>
      <Head>
        <title>Saing Johns Class of 22 Countdown</title>
      </Head>


      {/* Parent Widget */}
      <div className='flex bg-black bg-auto'>
        {/* container for the grey box */}
        <div className='flex-1 flex justify-center items-center flex-col'>
          {/* The two title */}
          <div className='fixed top-1/2 flex flex-col items-center'>
            <Title />
            {/*this is the component which displays all the times*/}
            <div className='h-10'></div>
            <TimeWidget days={days} hours={hours} minutes={minutes} seconds={seconds} />
          </div>
        </div>

        <div className='flex-1 invisible xl:visible'>
          <div>
            {/* video with the basketball team */}
            <video autoPlay loop muted width={'320'} className='w-full'>
              <source src='/7pq2rT-LHmt-OQzi.mp4' type='video/mp4' />
            </video>

            {/* sully sensei */}
            <div className='flex'>
              <video autoPlay loop muted width={'320'} className='flex-1' >
                <source src='/3Pcu2tR-aoTJalmY.mp4' type='video/mp4' />
              </video>
              <video autoPlay loop muted width={'320'} className='flex-1' >
                <source src='/A2c6qaxjL7hQchzo.mp4' type='video/mp4' />
              </video>
            </div>

            <video autoPlay loop muted width={'320'} className='w-full'>
              <source src='/asbjRrS4i3lhgUoT.mp4' type='video/mp4' />
            </video>

            <img src="/FCp6buAXIAA9JtA.jpeg" />

            <div className='flex'>
              <video autoPlay loop muted width={'320'} className='flex-1'>
                <source src='/JaIqAAHhgl9gkP3K.mp4' type='video/mp4' />
              </video>
            </div>


            {/* <video autoPlay loop muted width={'320'} className = 'col-span-2'>
              <source src='/7pq2rT-LHmt-OQzi.mp4' type='video/mp4' />
            </video>
            <video autoPlay loop muted width={'320'}>
              <source src='/3Pcu2tR-aoTJalmY.mp4' type='video/mp4' />
            </video>
            <video autoPlay loop muted width={'320'}>
              <source src='/JaIqAAHhgl9gkP3K.mp4' type='video/mp4' />
            </video> */}
          </div>
        </div>
        <div className='bg-black h-screen'></div>
      </div>
    </>
  )
}



export default Home

