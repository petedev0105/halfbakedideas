import Head from 'next/head'
import React, { Fragment, useState, useEffect } from 'react'
import { useSession, signIn } from 'next-auth/react'
import Conversation from '../components/Conversation'
import hero from '../assets/images/hero.webp'
import Image from 'next/image'
import { useRouter } from 'next/router'
import Footer from '../components/Footer'

const Home = () => {

  const router = useRouter()
  const { data: session, status } = useSession()


  useEffect(() => {
    if (session) {
      router.push('/feed')
    }
  }, [session])

  return (
    <div className="bg-slate-50">

      <Head>
        <title>Half baked ideas</title>
        <link rel="icon" href="/favicon.webp" />
        <meta name="description" content="Internet's best half baked app ideas at one place" />
        <meta property="og:image" content="https://user-images.githubusercontent.com/47467468/182023140-4eb3ddf2-11d6-4ccb-9cdb-ca05fd32af64.png" />

        <script defer type="text/javascript" src="https://api.pirsch.io/pirsch.js"
          id="pirschjs"
          data-code="ctWYY9beTG1rw55YS1GG27gjLgy8pdfO"></script>
      </Head>

      <div className="  mx-auto ">
        <div className=" flex flex-col justify-center mx-auto my-10 md:my-20">
          <h1 className="md:w-1/3 mx-auto md:text-4xl text-2xl px-8 md:px-0 text-center font-Notosans font-bold text-slate-700">
            Internet's best half-baked app ideas at one place
          </h1>



          <div className="mx-auto ">
            <Image src={hero} />

          </div>

        </div>


        <div className="md:w-9/12 mx-auto md:my-10 p-4">
          <Conversation />

          <p className="md:text-3xl text-2xl font-bold text-center">Vote for your favorite ideas</p>
          <p className="text-xl text-center">This helps the makers to validate these ideas before building.</p>
          <div className="flex md:flex-row  py-10 justify-center flex-col ">

            <div className="flex m-4 hover:scale-105 bg-white duration-300 hover:rotate-3 cursor-pointer md:w-4/12 p-2 border border-slate-100 rounded-lg items-center md:my-2 ">
              <div className="bg-white flex flex-col justify-center text-center w-24 h-24 p-4 rounded-lg  ">
                <span className=" md:text-5xl text-2xl">🙋</span>
                <span className=" text-lg text-slate-700 font-semibold">74</span>
              </div>
              <h1 className="text-xl font-semibold w-1/2 ml-4">I would use this Product </h1>
            </div>

            <div className="flex p-2 border hover:scale-105 duration-300 hover:rotate-3 cursor-pointer bg-white border-slate-100 rounded-lg m-4 items-center md:my-2 md:w-4/12">
              <div className="bg-white flex flex-col justify-center  text-center w-24 h-24 p-4 rounded-lg  ">
                <span className=" md:text-5xl text-2xl">💸</span>
                <span className=" text-lg text-slate-700 font-semibold">86</span>
              </div>
              <h1 className="text-xl font-semibold ml-4 w-1/2">I would pay for this Product</h1>
            </div>



          </div>

        </div>

        <div className="md:w-8/12 p-10 flex items-center mx-auto border-t-2 border-slate-100">

          <Footer style={"flex md:flex-row flex-col justify-center items-center mx-auto"} />



        </div>


      </div>
    </div>
  )


}

export default Home

