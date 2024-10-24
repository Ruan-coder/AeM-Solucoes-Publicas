import React from "react";
import Image from "next/image";

export default function Zap() {
    return (
        <div className="bottom-10 right-10 fixed md:block hidden shadow-xl z-50 hover:scale-110 transition duration-300">
            <a href="">
                <Image
                    src={'/whatsapp.png'}
                    width={50} height={30}
                    alt="whatsapp"
                    unoptimized = {true}
                    />
            </a>
        </div>
    )
}
