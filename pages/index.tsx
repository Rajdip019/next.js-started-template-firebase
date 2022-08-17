import type { NextPage } from 'next'
import Head from 'next/head'
import React from 'react'

const Home: NextPage = () => {
  return (
    <React.Fragment>
      <Head>
        <title> ❤️ Next Template by Rajdeep</title>
      </Head>
      <div className='text-white bg-black text-center flex h-[95vh] justify-center items-center'>
        <div>
          <div className='text-6xl text-blue-500 font-semibold'>Hey, Its's a Next.js template. 🚀</div>
          <p className='mt-10 mb-5 text-3xl text-left'>What are pre installed?</p>
          <div className=' text-left text-xl'>
            <p className='my-2'>1. Next.js with TypeScript. (Strict mode enabled)</p>
            <p className='my-2'>2. Tailwind CSS</p>
            <p className='my-2'>3. Material UI</p>
            <p className='my-2'>4. Material Icons</p>
            <p className='my-2'>5. Firebase - firestore, storage, auth with google</p>
            <p className='my-2'>6. Babel configured</p>
          </div>
        </div>
      </div>
        <footer className=' text-center py-2 font-semibold'>Build by Rajdeep Sengupta with ❤️ </footer>
    </React.Fragment>
  )
}

export default Home
