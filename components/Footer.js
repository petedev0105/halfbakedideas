import React from 'react';
import Image from 'next/image'
import hashnodeLogo from "../assets/images/hashnode.webp"
import planetScaleLogo from "../assets/images/planetscale.webp"
import Link from "next/link";

const Footer = () => {
    return (
        <div>


            <Link href="/about" >
                <span className="mx-2 font-semibold text-slate-700 hover:text-pink-400 cursor-pointer">🤔 How it works?</span>
            </Link>
            <div className="flex items-center mt-4 ">


                <div className="w-1/3 m-2 opacity-80 hover:opacity-100">
                    <a href="https://hashnode.com" target="_blank" rel="noreferrer">
                        <Image src={hashnodeLogo} />
                    </a>
                </div>
                x
                <div className="w-1/3 m-2 opacity-80 mt-3 hover:opacity-100">
                    <a href="https://planetscale.com" target="_blank" rel="noreferrer">

                        <Image src={planetScaleLogo} />
                    </a>
                </div>



            </div>
            <a href="https://twitter.com/WankhadeRutik" target="_blank" rel="noreferrer" className="flex mx-2 text-xs text-gray-400 hover:text-pink-400  ">
                By Rutik Wankhade
            </a>
        </div>
    );
}

export default Footer;