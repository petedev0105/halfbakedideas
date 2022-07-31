import React from 'react';
import joeImage from '../assets/images/joe.png'
import rutikImage from '../assets/images/rutik.png'
import { signIn, useSession } from "next-auth/react";
import Chat from './Chat'

const Conversation = () => {
    return (
        <div className="font-Notosans md:w-8/12 py-10 mx-auto">
            {/* <p className="text-lg text-slate-600">Half baked ideas is an open platform to share your half baked app ideas.</p> */}


            <div className="my-10">

                <Chat
                    message="But hey, what do you mean by half baked idea?"
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
        </div>
    );
}

export default Conversation;