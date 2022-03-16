import { url } from 'inspector'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { EffectCallback, useEffect, useState } from 'react'

const Home: NextPage = () => {

  const [timeLeft, setTimeLeft] = useState()

  useEffect(() => {
    
  })

  return (
    <>
      <Head>
        <title>Saing Johns Class of 22 Countdown</title>
      </Head>
      <div className='flex h-screen'>
        {/* <div className='flex'></div> */}
        {/* <div className='text-white spacing tracking-[1em] text-3xl font-bold flex'>COUNTDOWN</div> */}
        <div className='flex-1 bg-slate-500 flex justify-center items-center'>
          <div className='text-white spacing tracking-[0.75em] text-3xl font-bold flex'>COUNTDOWN</div>
        </div>
        <div className='flex-1 bg-red-500'>

        </div>
      </div>
    </>
  )
}

export default Home

