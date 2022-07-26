import Link from "next/link";

Link
const Header = () => {
    return ( 

        <div className="md:px-52 p-2 flex items-center bg-white top-0 sticky z-10">
   <h1 className="text-xl font-semibold">💡 half baked ideas</h1>

            <div className="ml-auto mr-2">

                <Link href="/signup">
                   <button className="text-md text-white bg-pink-300 hover:bg-pink-400 px-4 font-semibold p-2 rounded-lg">Share your idea</button> 
                </Link>

            </div>
            </div>
     );
}
 
export default Header;