import React from 'react';
import Image from 'next/image'
import hashnodeLogo from "../assets/images/hashnode.webp"
import planetScaleLogo from "../assets/images/planetscale.webp"
import Link from "next/link";

const Footer = ({style}) => {
    return (
        <div className={`${style}`}>


            {/* <Link href="/about" >
                <span className="mx-2 font-semibold text-slate-700 hover:text-pink-400 cursor-pointer">🤔 How it works?</span>
            </Link> */}
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

            <a href="https://www.producthunt.com/posts/half-baked-ideas?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-half&#0045;baked&#0045;ideas" target="_blank">
                <img src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=354262&theme=neutral"
                    className="w-48 m-2"
                    alt="Half&#0032;baked&#0032;ideas - Internet&#0039;s&#0032;best&#0032;half&#0045;baked&#0032;app&#0032;ideas&#0032;at&#0032;one&#0032;place | Product Hunt" /></a>
        </div>
    );
}

export default Footer;