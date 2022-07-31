import Head from 'next/head'
import React, { Fragment, useState, useEffect } from 'react'
import Post from '../components/Post'
import Link from "next/link";
import Select from 'react-select'
import { categoryOptions, style, theme } from '../utils/utils'
import { useSession, signIn } from 'next-auth/react'
import LoginPopup from '../components/LoginPopup'
import useSWR from 'swr'
import Footer from '../components/Footer'

import { Tab } from '@headlessui/react'


const Home = () => {

  const { data: session, status } = useSession()
  const [showLoginPopup, setShowLoginPopup] = useState(false)
  const [category, setCategory] = useState({ label: "all", value: "all" })


  const fetcher = (...args) => fetch(...args).then(res => res.json())

  const { data, error } = useSWR('/api/posts', fetcher)
  if (error) return <div>An error occured.</div>
  if (!data) return <div>Loading ...</div>

  console.log(data)



  return (
    <div className="">
      <Head>
        <title>Half baked ideas</title>
        <link rel="icon" href="/favicon.webp" />
        <title>half baked ideas</title>
        <meta name="description" content="The kitchen of your half baked ideas" />

      </Head>


      <LoginPopup
        showLoginPopup={showLoginPopup}
        setShowLoginPopup={setShowLoginPopup}
      />

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
            <span className="text-sm w-40  mx-3 font-semibold text-slate-600">Sort by</span>

            <Tab.List as="div" className="flex my-1 flex-col w-60 mx-auto">


              <Tab as="button" key="latest" className="font-semibold text-slate-700 focus:text-pink-400 focus:outline-none text-left border shadow-sm shadow-gray-100 border-gray-50 m-1 p-2 rounded-lg  bg-white">
                ✨ Latest
              </Tab>

              <Tab key="mostLiked" className="focus:text-pink-400 font-semibold text-slate-700 focus:outline-none text-left border shadow-sm shadow-gray-100 border-gray-50 m-1 p-2  rounded-lg text-md bg-white">
                🙋 I would use this
              </Tab>

              <Tab as="button" key="mostSupported" className="text-slate-600 font-semibold font-Inter focus:text-pink-400 focus:outline-none text-left border shadow-sm shadow-gray-100 border-gray-50 m-1 p-2 rounded-lg text-md bg-white">
                💸 Take my money
              </Tab>

            </Tab.List>

            <div className="my-4 w-60 mx-auto">
              <span className="text-sm mx-3 font-semibold text-slate-600">Filter by Category</span>
              <Select

                value={category}
                onChange={selectedOption => setCategory(selectedOption)}
                options={categoryOptions}
                styles={style}
                theme={theme}
                instanceId='filter'
                className=" font-semibold capitalize outline-none rounded-lg text-md mx-1 border-none my-2"
              />
            </div>

            <Footer />

          </div>


          <Tab.Panels as="div" className="border-l border-slate-100 rounded-xl ">

            <Tab.Panel key="latest">
              <div className=" flex flex-col overflow-y-auto ">
                {
                  data && data.filter(item => {
                    if (category.value === "all") {
                      return item
                    } else if (item.category === category.value) {
                      return item
                    }
                  }).sort((a, b) => a.created - b.created)
                    .map(post => {
                      return <Post
                        setShowLoginPopup={setShowLoginPopup}
                        key={post.id}
                        postId={post.id}
                        post={post}
                      />

                    })
                }

              </div>
            </Tab.Panel>


            <Tab.Panel key="mostLiked">
              <div className=" flex flex-col overflow-y-auto ">
                {
                  data && data.filter(item => {
                    if (category.value === "all") {
                      return item
                    } else if (item.category === category.value) {
                      return item
                    }
                  }).sort((x, y) => x.likedByUsers.length - y.likedByUsers.length).reverse().map(post => {
                    return <Post
                      setShowLoginPopup={setShowLoginPopup}
                      key={post.id}
                      postId={post.id}
                      post={post}
                    />

                  })
                }

              </div>
            </Tab.Panel>


            <Tab.Panel key="mostSupported">
              <div className=" flex flex-col overflow-y-auto ">
                {
                  data && data.filter(item => {
                    if (category.value === "all") {
                      return item
                    } else if (item.category === category.value) {
                      return item
                    }
                  }).sort((x, y) => x.supportedByUsers.length - y.supportedByUsers.length).reverse().map(post => {
                    return <Post
                      setShowLoginPopup={setShowLoginPopup}
                      key={post.id}
                      postId={post.id}
                      post={post}
                    />

                  })
                }

              </div>
            </Tab.Panel>


          </Tab.Panels>

        </Tab.Group>


      </div>

    </div>

  )
}

export default Home

