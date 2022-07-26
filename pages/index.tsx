import Head from 'next/head'
import Image from 'next/image'
import React from 'react'
import Header from '../components/Header'
import Post from '../components/Post'

const Home = () => {
  return (
    <div className="bg-gray-50">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <div className="py-40 flex flex-col  mx-auto md:w-6/12">
        
        
     
        <Post />
        <Post />
<Post />
<Post />




      </div>



    </div>


  )
}

export default Home
