import React from 'react';
const Post = () => {
    return (
        <div>

            <div className="bg-white flex items-center shadow-sm m-2 rounded-lg shadow-gray-100  p-4">
                <div className="flex flex-col mx-2 md:w-8/12" >
                    <h2 className=" md:text-lg text-md font-medium text-slate-800">A website that shows list of beginner friendly open source projects</h2>
                    <div className="flex flex-wrap md:text-sm text-xs mt-2 text-gray-500 ">
                        <span className="">By Rutik w</span>
                        <span className="md:ml-10 mx-2">2 hours ago</span>
                        <span className="md:ml-10 mx-2">Productivity</span>

                    </div>
                </div>

                <div className=" flex md:flex-row flex-col">
                    <div className="flex group cursor-pointer m-2 transform duration-200 w-20  shadow-sm shadow-gray-50 border border-gray-50 p-2 rounded-lg hover:-rotate-6 hover:scale-105 flex-col text-center">
                        <button className=" md:text-3xl text-2xl">🙋</button>
                        <span className="font-semibold">23</span>
                    </div>

                    <div className="flex cursor-pointer  m-2 transform duration-200 w-20 border shadow-sm shadow-gray-50 border-gray-50 p-2 rounded-lg hover:-rotate-6 hover:scale-105 flex-col text-center">
                        <button className=" md:text-3xl text-2xl ">💸</button>
                        <span className="font-semibold">8</span>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Post;