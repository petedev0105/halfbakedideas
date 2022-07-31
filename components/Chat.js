import React from 'react';
import Image from 'next/image'

const Chat = ({message, avatar, align}) => {
    return ( 
        <div className={`${align==='right'?'flex-row-reverse':'flex-row'} flex items-center  m-2  `}>
             <div className="flex items-center w-12  h-12 rounded-full m-2">
            <Image src={avatar} className="rounded-full " height="50" width="50" />

            </div>
            <p className={`bg-white md:text-lg text-sm p-2 h-max shadow shadow-slate-100 ${align==='right'?'rounded-l-lg rounded-br-lg':'rounded-r-lg rounded-bl-lg'} `}>{message}</p>
        </div>
     );
}
 
export default Chat;