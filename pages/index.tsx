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



      <div className="flex md:flex-row flex-col md:w-10/12 justify-center  mx-auto m-4">


        <div className="md:w-1/4  md:sticky top-14 mx-4 h-max ">

          <div className="border shadow-sm shadow-gray-50 border-gray-50 m-2 p-2 font-semibold rounded-lg text-md bg-white">✨ Latest</div>
          <div className="border border-gray-50 m-2 p-2 font-semibold rounded-lg text-md bg-white">🙋 Somebody make this</div>
          <div className="border border-gray-50 m-2 p-2 font-semibold rounded-lg text-md bg-white">💸 Take my money</div>

        </div>

        <div className="flex flex-col overflow-y-auto  md:w-7/12">

          <Post />
          <Post />
          <Post />
          <Post />
                    <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />

        </div>
      </div>





    </div>


  )
}

export default Home
