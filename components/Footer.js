import React from 'react';
import Image from 'next/image'
import hashnodeLogo from "../assets/images/hashnode.webp"
import planetScaleLogo from "../assets/images/planetscale.webp"

const Footer = () => {
    return (
        <div>
            <div className="flex items-center justify-center ">
                <div className="w-1/3 m-2 opacity-80 hover:opacity-100">
                    <a href="https://hashnode.com" target="_blank" rel="noreferrer">
                        <Image src={hashnodeLogo} />
                    </a>
                </div> x
                <div className="w-1/3 m-2 opacity-80 mt-3 hover:opacity-100">
                    <a href="https://planetscale.com" target="_blank" rel="noreferrer">

                        <Image src={planetScaleLogo} />
                    </a>
                </div>

            </div>

        </div>
    );
}

export default Footer;