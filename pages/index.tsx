import { url } from 'inspector'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState } from 'react'

const Home: NextPage = () => {
  const [days, setDays]: any = useState("00")
  const [hours, setHours]: any = useState("00")
  const [minutes, setMinutes]: any = useState("00")
  const [seconds, setSeconds]: any = useState("00")

  const endDate = new Date()

  const finalDayOfSchool = new Date('May 6, 2022 020:18:00').getTime()

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
      <div className='flex h-screen'>
        {/* <div className='flex'></div> */}
        {/* <div className='text-white spacing tracking-[1em] text-3xl font-bold flex'>COUNTDOWN</div> */}
        <div className='flex-1 bg-slate-500 flex justify-center items-center flex-col'>
          <div className='text-white spacing tracking-[0.75em] text-3xl font-bold flex'>COUNTDOWN</div>
          <div>
            {`${days} days : ${hours} hours : ${minutes} minutes : ${seconds} seconds`}
          </div>
        </div>
        <div className='flex-1 bg-red-500'>
        </div>

      </div>
    </>
  )
}

export default Home

