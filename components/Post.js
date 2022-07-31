import React, { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react'
import { formatDistanceToNow } from 'date-fns'
import Link from 'next/link';

const Post = ({ setShowLoginPopup, post, postId }) => {
    const [data, setData] = useState(post)
    const { data: session, status } = useSession()
    const { authorId, title, category, userName, created, likedByUsers, supportedByUsers } = data

    const isLiked = likedByUsers.some(el => el.id == session?.userId);
    const isSupported = supportedByUsers.some(el => el.id == session?.userId);



    const handlePostReactions = async (reaction) => {
        if (!session) {
            setShowLoginPopup(true)
            return;
        }

        try {
            const bodyData = { postId };

            const updatedPost = await fetch(`/api/${reaction}`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(bodyData),
            });
            const newData = await updatedPost.json()

            console.log(newData, 'post updated success')
            setData(newData)


        } catch (error) {
            console.error(error);
        }
    }


    return (
        <div>

            <div className={`font-Notosans bg-white flex items-center shadow-sm m-2 rounded-lg shadow-gray-100  p-4`}>
                <div className="flex flex-col mx-2 md:w-8/12" >
                    <h2 className=" md:text-lg text-md font-medium text-slate-800">{title}</h2>
                    <div className="flex flex-wrap md:text-sm text-xs mt-2 text-gray-500 ">
                        <span className="">By 
                            
                            <Link href={`/user/${authorId}`} >
                                <span className="mx-1 cursor-pointer hover:text-pink-400">{userName}</span>
                            </Link>
                        </span>
                        <span className="md:ml-8 mx-2  ">{category}</span>

                        <span className="md:ml-8 mx-2">{(formatDistanceToNow(new Date(created))).replace('about', '')} ago</span>

                    </div>
                </div>

                <div className=" flex md:flex-row flex-col">

                    <button
                        onClick={() => handlePostReactions('like')}
                    >
                        <div className="group">

                            <div className="relative group-hover:flex hidden">
                                <div className="bg-slate-700 absolute w-max text-white text-xs rounded py-1 px-4 right-0 bottom-full">
                                    I would use this
                                    <svg className="absolute text-slate-700 h-2 w-full left-0 top-full" viewBox="0 0 255 255" ><polygon className="fill-current" points="0,0 127.5,127.5 255,0" /></svg>
                                </div>
                            </div>
                            <div className={`${isLiked ? 'border-pink-200 text-pink-400 border' : 'bg-white'} flex cursor-pointer m-2 transform duration-200 w-20 h-20 items-center shadow-sm shadow-gray-50 border border-gray-50 p-2 rounded-lg hover:-rotate-6 hover:scale-105 flex-col text-center`}>
                                <span className=" md:text-3xl text-2xl">🙋</span>
                                <span className=" text-lg text-slate-700 font-semibold">{likedByUsers.length}</span>

                            </div>
                        </div>

                    </button>

                    <button
                        onClick={() => handlePostReactions('support')}
                    >
                        <div className="group">


                            <div className="relative group-hover:flex hidden">
                                <div className="bg-slate-700 absolute w-max text-white text-xs rounded py-1 px-4 right-0 bottom-full">
                                    Take my money
                                    <svg className="absolute text-slate-700 h-2 w-full left-0 top-full" viewBox="0 0 255 255" ><polygon className="fill-current" points="0,0 127.5,127.5 255,0" /></svg>
                                </div>
                            </div>
                            <div className={`${isSupported ? 'border-pink-200 text-pink-400 border' : 'bg-white'} flex cursor-pointer m-2 transform duration-200 w-20  shadow-sm shadow-gray-50 border border-gray-50 p-2 rounded-lg hover:-rotate-6 hover:scale-105 flex-col text-center`}>
                                <span className=" md:text-3xl text-2xl">💸</span>
                                <span className="font-semibold  text-lg text-slate-700 ">{supportedByUsers.length}</span>
                            </div>

                        </div>
                    </button>

                </div>
            </div>
        </div>
    );
}



export default Post;