import Link from "next/link";
import { useState } from "react";
const Navbar = () => {

    return (
        <nav className="z-50 border px-16 left-0 right-0 top-0  w-full  flex  justify-between  py-4 items-center font-inter">
            <div>
                <h1 className="font-bold lg:text-2xl">Blisz NFT</h1>
            </div>

            <ul className="lg:flex  lg:flex-row justify-center item-center">
                {[
                    {
                        name: "Explore",
                        link: "/",
                    },
                    {
                        name: "Signup",
                        link: "/useCases",
                    },
                ].map((item) => (
                    <Link href={item.link}>
                        <a className="hover:border-b-[1px] border-black text-sm px-3 py-1 cursor-pointer">{item.name}</a>
                    </Link>
                ))}
            </ul>
        </nav >

    );
};

export default Navbar; 