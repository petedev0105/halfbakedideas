import React from 'react';
import joeImage from '../assets/images/joe.png'
import rutikImage from '../assets/images/rutik.png'
import { signIn, useSession } from "next-auth/react";
import Chat from '../components/Chat'
import Link from "next/link";

const About = () => {
    const { data: session } = useSession()

    return (
        <div>
            <div className="font-Notosans md:w-6/12 mx-auto p-2  md:p-10">

                <div className="flex items-center">
                    <h1 className="text-2xl my-2 font-semibold text-slate-700">About </h1>

                    {
                        session ? <div className="ml-auto mr-2">
                            <Link href="/submit">
                                <button className="text-md font-semibold ml-auto mr-2 bg-slate-600 hover:bg-slate-700 text-white p-2 px-6 rounded-lg">
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

                {!session ?
                    <div className="bg-slate-700 text-white flex flex-col shadow-xl shadow-slate-100 justify-center p-10 rounded-xl">
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