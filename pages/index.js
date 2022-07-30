import Head from 'next/head'
import React, { Fragment, useState, useEffect } from 'react'
import Post from '../components/Post'
import Link from "next/link";
import Select from 'react-select'
import { categoryOptions, style, theme } from '../utils/utils'
import { useSession, signIn } from 'next-auth/react'
import LoginPopup from '../components/LoginPopup'
import useSWR from 'swr'

import { Tab } from '@headlessui/react'



const Home = () => {

  const { data: session, status } = useSession()
  const [showLoginPopup, setShowLoginPopup] = useState(false)

  const fetcher = (...args) => fetch(...args).then(res => res.json())

  const { data, error } = useSWR('/api/posts', fetcher)
  if (error) return <div>An error occured.</div>
  if (!data) return <div>Loading ...</div>

  console.log(data)



  return (
    <div className="">
      <Head>
        <title>Half baked ideas</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>





      <LoginPopup
        showLoginPopup={showLoginPopup}
        setShowLoginPopup={setShowLoginPopup}
      />




      {/* <div className="md:w-1/4  md:sticky top-14 mx-4 h-max ">

          {session ?
            <div>
              <Link href="/submit">
                <button className="text-md px-12 flex my-4 items-center mx-auto shadow-sm shadow-green-100  font-semibold  text-white  p-2 rounded-lg bg-pink-300 hover:bg-pink-400 hover:scale-105 duration-300">
                  <svg className="w-6 h-6 mx-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path></svg> Sumbit your Idea
                </button>
              </Link>
            </div>
            :
            <div></div>
          }

          <div className="border shadow-sm shadow-gray-100 border-gray-50 m-2 p-2 font-semibold rounded-lg text-md bg-white">✨ Latest</div>
          <div className="border shadow-sm shadow-gray-100 border-gray-50 m-2 p-2 font-semibold rounded-lg text-md bg-white">🙋 I would use this</div>
          <div className="border shadow-sm shadow-gray-100 border-gray-50 m-2 p-2 font-semibold rounded-lg text-md bg-white">💸 Take my money</div>

          <div className="mt-4">
            <span className="text-sm mx-3 font-semibold text-slate-600">Filter by Category</span>
            <Select
              options={categoryOptions}
              styles={style}
              theme={theme}
              instanceId='filter'
              className=" font-semibold capitalize outline-none rounded-lg text-md mx-2 border-none my-2"
            />
          </div>

        </div> */}



      {/* <div className="flex flex-col overflow-y-auto  md:w-7/12">
          {data && data.sort((x, y) => x.likedByUsers.length - y.likedByUsers.length).reverse().map(post => {
            return <Post
              setShowLoginPopup={setShowLoginPopup}
              key={post.id}
              postId={post.id}
              post={post}
            />

          })}


        </div> */}

      <div className="m-4 flex md:flex-row flex-col mx-auto md:w-9/12 ">


        <Tab.Group >

          <div className="md:1/4  flex flex-col md:sticky top-14 mx-4 h-max">


            {session ?
              <div>
                <Link href="/submit">
                  <button className="text-md px-8 flex my-4 items-center mx-auto shadow-sm shadow-green-100  font-semibold  text-white  p-2 rounded-lg bg-pink-300 hover:bg-pink-400 hover:scale-105 duration-300">
                    <svg className="w-6 h-6 mx-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path></svg> Sumbit your Idea
                  </button>
                </Link>
              </div>
              :
              <div></div>
            }

            <Tab.List as="div" className="flex flex-col w-60 mx-auto">


              <Tab as="button" key="latest" className="text-left border shadow-sm shadow-gray-100 border-gray-50 m-1 p-2 font-semibold rounded-lg text-md bg-white">
                ✨ Latest
              </Tab>

              <Tab key="mostLiked"  className=" text-left border shadow-sm shadow-gray-100 border-gray-50 m-1 p-2 font-semibold rounded-lg text-md bg-white">
               🙋 I would use this
              </Tab>

              <Tab as="button"  key="mostSupported" className="text-left border shadow-sm shadow-gray-100 border-gray-50 m-1 p-2 font-semibold rounded-lg text-md bg-white">
                  💸 Take my money
              </Tab>

            </Tab.List>

            <div className="mt-4">
              <span className="text-sm mx-3 font-semibold text-slate-600">Filter by Category</span>
              <Select
                options={categoryOptions}
                styles={style}
                theme={theme}
                instanceId='filter'
                className=" font-semibold capitalize outline-none rounded-lg text-md mx-2 border-none my-2"
              />
            </div>

          </div>


          <Tab.Panels as="div" className="border ">
            <Tab.Panel
              key="latest"
              className=""
            >
              <div className=" flex flex-col overflow-y-auto ">
                {data && data.sort((x, y) => x.created - y.created).reverse().map(post => {
                  return <Post
                    setShowLoginPopup={setShowLoginPopup}
                    key={post.id}
                    postId={post.id}
                    post={post}
                  />

                })}

              </div>
            </Tab.Panel>

            <Tab.Panel
              key="mostLiked"
              className=""
            >
              <div className=" flex flex-col overflow-y-auto ">
                {data && data.sort((x, y) => x.likedByUsers.length - y.likedByUsers.length).reverse().map(post => {
                  return <Post
                    setShowLoginPopup={setShowLoginPopup}
                    key={post.id}
                    postId={post.id}
                    post={post}
                  />

                })}

              </div>
            </Tab.Panel>
            <Tab.Panel
              key="mostSupported"
              className=""
            >
              <div className=" flex flex-col overflow-y-auto ">
                {data && data.sort((x, y) => x.supportedByUsers.length - y.supportedByUsers.length).reverse().map(post => {
                  return <Post
                    setShowLoginPopup={setShowLoginPopup}
                    key={post.id}
                    postId={post.id}
                    post={post}
                  />

                })}

              </div>
            </Tab.Panel>



          </Tab.Panels>



        </Tab.Group>












      </div>


    </div>

  )
}





export default Home

