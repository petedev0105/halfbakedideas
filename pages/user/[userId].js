import React from 'react';
import useSWR from 'swr'
import { useRouter } from 'next/router'
import Image from 'next/image'
import Post from '../../components/Post'
import Link from 'next/link';
const UserProfile = () => {

    const router = useRouter()
    const { userId } = router.query
    const fetcher = (...args) => fetch(...args).then(res => res.json())

    const { data, error } = useSWR(`/api/user/${userId}`, fetcher)
    if (error) return <div>An error occured.</div>
    if (!data) return <div>Loading ...</div>

    console.log(data)

    return (
        <div>

            <div>
                <div className="w-8/12 mx-auto">
                    <Link href="/" >
                        <span className="cursor-pointer"><svg className="w-6 h-6 mt-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg></span>
                    </Link>
                </div>

                <div className="flex flex-col justify-center md:w-6/12 mx-auto py-10 pb-20">
                    <div className="rounded-full mx-auto w-20 h-20 border-2 border-white  text-center">
                        <Image src={data && data.image}
                            width="80" height="80"
                            className="rounded-full mx-auto text-center "
                        />
                    </div>

                    <h2 className="text-lg  font-semibold text-center text-slate-600">{data && data.name}'s </h2>
                    <h1 className="italic text-2xl font-bold text-center text-slate-700">half baked ideas</h1>
                    <div className="mt-6">
                        {
                            data && data.posts.map(post => {
                                return (
                                    <Post
                                        key={post.id}
                                        postId={post.id}
                                        post={post} />
                                )
                            })
                        }
                    </div>

                </div>



            </div>

        </div>
    );
}

export default UserProfile;