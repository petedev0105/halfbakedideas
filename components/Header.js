import Link from "next/link";
import {
    useSession,
    signIn,
    signOut
} from "next-auth/react";

const Header = () => {
    const { data: session, status } = useSession();

    return (

        <div className="md:px-52 p-2 flex items-center bg-white top-0 sticky z-10">
            <Link href="/" >
                            <h1 className="hover:text-pink-300 cursor-pointer md:text-xl text-md font-semibold">💡 half baked ideas</h1>

            </Link>


            <div className="ml-auto mr-2">
                {session && session.user ? (
                    <div className="flex  flex-row items-center">
                        <span className="mx-2 text-md font-medium text-gray-500">
                            {session.user.name}
                        </span>

                        <button
                            type="button"
                            className=" mx-2    cursor-pointer "
                            onClick={() => signOut()}
                        >
                           <svg className="w-6 h-6 text-slate-700 hover:text-slate-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"></path></svg>
                        </button>
                    </div>
                ) : (
                    <button
                        onClick={() => signIn('google')}
                        className="text-md text-white bg-pink-300 hover:bg-pink-400 px-4 font-semibold p-2 rounded-lg">
                        Share your idea
                    </button>
                )}

            </div>
        </div>
    );
}

export default Header;