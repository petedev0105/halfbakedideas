import React, { Fragment } from 'react';
import Image from 'next/image'
import { Dialog, Transition } from '@headlessui/react'

import ideaLogo from '../assets/images/idea-logo.webp'

const LoginPopup = ({ showLoginPopup, setShowLoginPopup }) => {


    return (
        <div>
            <Transition appear show={showLoginPopup} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={() => setShowLoginPopup(false)}>
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
                                        onClick={() => setShowLoginPopup(false)}
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
        </div>
    );
}

export default LoginPopup;