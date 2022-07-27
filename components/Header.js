import Link from "next/link";
import {
    useSession,
    signIn,
} from "next-auth/react";

const Header = () => {
    const { data: session, status } = useSession();

    return (

        <div className="md:px-52 p-2 flex items-center bg-white top-0 sticky z-10">
            <h1 className="md:text-xl text-md font-semibold">💡 half baked ideas</h1>





            <div className="ml-auto mr-2">
                {session && session.user ? (
                    <div className="flex  flex-row items-center">
                        <span className="mx-2 text-sm text-gray-500">
                            {session.user.name}
                        </span>



                       
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