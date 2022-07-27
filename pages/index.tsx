import Head from 'next/head'
import React from 'react'
import Post from '../components/Post'
import Link from "next/link";
import Select from 'react-select'
import { categoryOptions, style, theme } from '../utils/utils'

const Home = () => {
  return (
    <div className="">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>




      <div className="flex md:flex-row flex-col md:w-10/12 justify-center  mx-auto m-4">


        <div className="md:w-1/4  md:sticky top-14 mx-4 h-max ">

          <Link href="/submit">
            <button className="text-md px-12 flex my-4 items-center mx-auto shadow-sm shadow-green-100  font-semibold  text-white  p-2 rounded-lg bg-pink-300 hover:bg-pink-400 hover:scale-105 duration-300">
              <svg className="w-6 h-6 mx-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path></svg> Sumbit your Idea
            </button>
          </Link>



          <div className="border shadow-sm shadow-gray-100 border-gray-50 m-2 p-2 font-semibold rounded-lg text-md bg-white">✨ Latest</div>
          <div className="border shadow-sm shadow-gray-100 border-gray-50 m-2 p-2 font-semibold rounded-lg text-md bg-white">🙋 I would use this</div>
          <div className="border shadow-sm shadow-gray-100 border-gray-50 m-2 p-2 font-semibold rounded-lg text-md bg-white">💸 Take my money</div>

          <div className="mt-4">


            <span className="text-sm mx-3 font-semibold text-slate-600">Filter by Category</span>
            <Select
              options={categoryOptions}
              styles={style}
              theme={theme}

              className=" font-semibold capitalize outline-none rounded-lg text-md mx-2 border-none my-2"
            />
          </div>
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
