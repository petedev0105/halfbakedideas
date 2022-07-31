import React from 'react';
import joeImage from '../assets/images/joe.png'
import rutikImage from '../assets/images/rutik.png'
import { signIn, useSession } from "next-auth/react";
import Chat from '../components/Chat'
import Link from "next/link";
import Head from 'next/head'


const About = () => {
    const { data: session } = useSession()

    return (
        <div className="pb-20">

            <Head>
                <title>Half baked ideas</title>
                <link rel="icon" href="/favicon.webp" />
            </Head>
            <div className="font-Notosans md:w-6/12 mx-auto p-2  md:p-10">

                <div className="flex items-center">
                    <h1 className="text-2xl my-4 font-semibold text-slate-700">About </h1>

                    {
                        session ? <div className="ml-auto mr-2">
                            <Link href="/submit">
                                <button className="text-sm font-semibold ml-auto mr-2 bg-slate-600 hover:bg-slate-700 text-white p-2 px-6 rounded-lg">
                                    Submit my idea &rarr;

                                </button>
                            </Link>
                        </div> : <div></div>
                    }

                </div>

                <p className="text-lg text-slate-600">Half baked ideas is an open platform to share your half baked app ideas.</p>


                <div className="my-10">

                    <Chat
                        message="But hey, what do you mean by half baked?"
                        avatar={joeImage}
                        align="left"
                    />

                    <Chat
                        message="Think of it as an idea which is not completely thought out. Imagine cookies but half baked."
                        avatar={rutikImage}
                        align="right"
                    />

                    <Chat
                        message="Oh, I love cookies! but not half baked."
                        avatar={joeImage}
                        align="left"
                    />


                    <Chat
                        message="me too! But don't you think every half baked cookie has a potential to become a sweet, crispy and a delicious cookie."
                        avatar={rutikImage}
                        align="right"
                    />

                    <Chat
                        message="I guess so."
                        avatar={joeImage}
                        align="left"
                    />

                    <Chat
                        message="Well, half baked ideas are the same. Every half baked idea has a potential to become a great product. "
                        avatar={rutikImage}
                        align="right"
                    />

                    <Chat
                        message="I see. I want to share my half baked ideas too!"
                        avatar={joeImage}
                        align="left"
                    />

                    <Chat
                        message="Great! Let's go and do it."
                        avatar={rutikImage}
                        align="right"
                    />


                </div>

                <p className="text-xl py-10 mb-10 text-center">You can vote for your favorite ideas in two ways</p>

                <div className="flex md:flex-row flex-col p-4">

                    <div className="flex items-center my-10 md:my-2 justify-center md:w-1/2">
                        <div className="w-1/2">
                            <div className="relative ">
                                <div className="bg-slate-700 absolute w-max text-white text-xs rounded mb-2 py-1 px-4 right-0 bottom-full">
                                    I would use this
                                    <svg className="absolute text-slate-700 h-2 w-full left-0 top-full" viewBox="0 0 255 255" ><polygon className="fill-current" points="0,0 127.5,127.5 255,0" /></svg>
                                </div>
                            </div>
                            <div className="bg-white flex flex-col justify-center hover:scale-105 duration-300 hover:rotate-6 cursor-pointer text-center w-24 h-24 p-4 rounded-lg shadow ">
                                <span className=" md:text-5xl text-2xl">🙋</span>
                                <span className=" text-lg text-slate-700 font-semibold">74</span>

                            </div>
                        </div>
                        <h1 className="text-2xl ml-4">Saying I wish this product existed </h1>
                    </div>

                    <div className="flex items-center my-10 md:my-2 md:w-1/2">
                        <div className="w-1/2">
                            <div className="relative ">
                                <div className="bg-slate-700 absolute w-max text-white text-xs rounded mb-2 py-1 px-4 right-0 bottom-full">
                                    Take my money                                    <svg className="absolute text-slate-700 h-2 w-full left-0 top-full" viewBox="0 0 255 255" ><polygon className="fill-current" points="0,0 127.5,127.5 255,0" /></svg>
                                </div>
                            </div>
                            <div className="bg-white flex flex-col justify-center hover:scale-105 duration-300 hover:rotate-6 cursor-pointer text-center w-24 h-24 p-4 rounded-lg shadow ">
                                <span className=" md:text-5xl text-2xl">💸</span>
                                <span className=" text-lg text-slate-700 font-semibold">86</span>

                            </div>
                        </div>
                        <h1 className="text-2xl ml-4">Saying I would pay to use this product</h1>
                    </div>



                </div>

                {!session ?
                    <div className="bg-slate-700 text-white flex flex-col shadow-xl shadow-slate-100 justify-center p-10 mt-10 rounded-xl">
                        <p className="text-xl">Joe is sharing his half baked ideas to the world. Are you?</p>
                        <button
                            onClick={() => signIn('google')}
                            className="w-max m-4 mx-auto text-white  bg-pink-400 hover:bg-pink-500 px-6 p-2 text-xl rounded-lg">
                            <span className="font-Inter">Submit your idea now</span>
                        </button>
                    </div>
                    :
                    <div>

                    </div>

                }


            </div>

        </div>
    );
}

export default About;