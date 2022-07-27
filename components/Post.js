import React from 'react';
import { useSession } from 'next-auth/react'

const Post = ({ setIsOpen }) => {
    const { data: session, status } = useSession()

    const handlePostReactions = (reactionType) => {
        if (!session) {
            setIsOpen(true)
        }

        console.log(reactionType)

    }


    return (
        <div>

            <div className="bg-white flex items-center shadow-sm m-2 rounded-lg shadow-gray-100  p-4">
                <div className="flex flex-col mx-2 md:w-8/12" >
                    <h2 className=" md:text-lg text-md font-medium text-slate-800">A website that shows list of beginner friendly open source projects</h2>
                    <div className="flex flex-wrap md:text-sm text-xs mt-2 text-gray-500 ">
                        <span className="">By Rutik w</span>
                        <span className="md:ml-10 mx-2">2 hours ago</span>
                        <span className="md:ml-10 mx-2">Productivity</span>

                    </div>
                </div>

                <div className=" flex md:flex-row flex-col">

                    <div
                        onClick={() => handlePostReactions('use')}
                    >
                        <div className="group">

                            <div className="relative group-hover:flex hidden">
                                <div className="bg-slate-700 absolute w-max text-white text-xs rounded py-1 px-4 right-0 bottom-full">
                                    I would use it
                                    <svg className="absolute text-slate-700 h-2 w-full left-0 top-full" viewBox="0 0 255 255" ><polygon className="fill-current" points="0,0 127.5,127.5 255,0" /></svg>
                                </div>
                            </div>
                            <div className="flex cursor-pointer m-2 transform duration-200 w-20  shadow-sm shadow-gray-50 border border-gray-50 p-2 rounded-lg hover:-rotate-6 hover:scale-105 flex-col text-center">
                                <button className=" md:text-3xl text-2xl">🙋</button>
                                <span className="font-semibold">23</span>
                            </div>
                        </div>

                    </div>

                    <div
                        onClick={() => handlePostReactions('pay')}
                    >
                        <div className="group">


                            <div className="relative group-hover:flex hidden">
                                <div className="bg-slate-700 absolute w-max text-white text-xs rounded py-1 px-4 right-0 bottom-full">
                                    Take my money
                                    <svg className="absolute text-slate-700 h-2 w-full left-0 top-full" viewBox="0 0 255 255" ><polygon className="fill-current" points="0,0 127.5,127.5 255,0" /></svg>
                                </div>
                            </div>
                            <div className="flex cursor-pointer m-2 transform duration-200 w-20  shadow-sm shadow-gray-50 border border-gray-50 p-2 rounded-lg hover:-rotate-6 hover:scale-105 flex-col text-center">
                                <button className=" md:text-3xl text-2xl">💸</button>
                                <span className="font-semibold">17</span>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}



export default Post;