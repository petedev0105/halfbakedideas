import Head from 'next/head'
import React, { Fragment, useState, useEffect } from 'react'
import Post from '../components/Post'
import Link from "next/link";
import Select from 'react-select'
import { categoryOptions, style, theme } from '../utils/utils'
import { useSession, signIn } from 'next-auth/react'
import { Dialog, Transition } from '@headlessui/react'
import Image from 'next/image'
import ideaLogo from '../assets/images/idea-logo.png'
import useSWR from 'swr'



const Home = () => {

  const { data: session, status } = useSession()
  const [isOpen, setIsOpen] = useState(false)

  const fetcher = (...args) => fetch(...args).then(res =>res.json())

  const { data, error } = useSWR('/api/posts', fetcher)
  if (error) return <div>An error occured.</div>
  if (!data) return <div>Loading ...</div>

  console.log(data)



  return (
    <div className="">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>


      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={() => setIsOpen(false)}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-2 text-left align-middle shadow-xl transition-all">
                  <button
                    onClick={() => setIsOpen(false)}
                    className="flex ml-auto mr-2"
                  >
                    <svg className="w-6 h-6 text-slate-600 hover:text-slate-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                  </button>

                  <div className=" flex flex-col justify-center p-10">
                    <div className="w-20 h-20 mx-auto">
                      <Image src={ideaLogo} />


                    </div>
                    <h2 className="text-2xl font-semibold text-center">Signup to vote</h2>
                    <p className="text-md py-2 font-semibold text-center text-slate-700">It takes less than 10 seconds!</p>
                    <p className="text-sm py-2 text-center text-slate-500">
                      Once logged in, you can submit your ideas as well as react to the other ideas you like.
                    </p>


                    <div className="mt-4 mx-auto">
                      <button
                        onClick={() => signIn('google')}
                        className="flex mx-auto w-max justify-center rounded-md  bg-pink-400 px-4 py-2 text-sm font-medium text-white hover:bg-pink-500 focus:outline-none"
                      >
                        Continue with Google &rarr;
                      </button>
                    </div>
                  </div>


                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>





      <div className="flex md:flex-row flex-col md:w-10/12 justify-center  mx-auto m-4">


        <div className="md:w-1/4  md:sticky top-14 mx-4 h-max ">

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

        </div>



        <div className="flex flex-col overflow-y-auto  md:w-7/12">
          {data && data.map(post => {
            return <Post setIsOpen={setIsOpen} key={post.id} postId={post.id} post={post} />

          })}


        </div>
      </div>


    </div>

  )
}


// export const getStaticProps = async () => {
//   const posts = await prisma.post.findMany({
//     include: {
//       author: {
//         select: { name: true }
//       }
//     }
//   });


//   return {
//     props: { posts},
//   };
// };



export default Home

