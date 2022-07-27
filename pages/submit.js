import React from 'react';

import Image from 'next/image'
import ideaLogo from '../assets/images/idea-logo.png'
import Select from 'react-select'
import { categoryOptions, style, theme } from '../utils/utils'
import { useRouter } from 'next/router'
import { useSession } from 'next-auth/react'


const Submit = () => {
    
    const { data: session, status } = useSession()

    const router = useRouter()
    useEffect(() => {
        if (!session) {
            router.push('/')
        }
    }, [session])



    return (
        <div className="p-4">

            <div className="md:pb-20 pb-10 md:w-5/12 mx-auto">

                <div className="w-24 h-24 transform  translate-y-10 mx-auto rounded-full shadow-sm border-white border-4 shadow-slate-50">
                    <Image src={ideaLogo} />
                </div>

                <div className="mx-auto flex flex-col justify-center p-4 shadow-xl shadow-slate-100 rounded-lg bg-white pt-12">

                    <h1 className="md:text-2xl my-2 text-xl font-semibold text-center">Share your half baked idea</h1>
                    <textarea
                        placeholder="an app that can..."
                        className="h-28 outline-none p-2 rounded-lg mx-auto text-lg border my-2 md:w-10/12 w-full"
                    />

                    <Select
                        options={categoryOptions}
                        styles={style}
                        theme={theme}
                        instanceId='submit'

                        className=" font-semibold border capitalize outline-none rounded-lg text-lg md:w-10/12 mx-auto my-2" />

                    <button className="text-lg flex bg-slate-700 hover:scale-105 duration-300 hover:bg-slate-800 mx-auto w-max p-2 px-6 rounded-lg text-white font-semibold">Submit</button>

                </div>

            </div>
        </div>
    );
}

export default Submit;