import Link from "next/link";
import { useState } from "react";
import Modal from "./Modal";
const Navbar = () => {
    const [showModal, setShowModal] = useState(false);

    return (
        <nav className="z-50 border px-16 left-0 right-0 top-0  w-full  flex  justify-between  py-4 items-center font-inter">
            <div>
                <Link href="/">
                    <a className="font-bold lg:text-2xl">Blisz NFT</a>
                </Link>
            </div>
            <div className="flex items-center">
                <ul className="lg:flex  lg:flex-row justify-center item-center">
                    {[
                        {
                            name: "Explore",
                            link: "/Explore",
                        },

                    ].map((item) => (
                        <Link href={item.link}>
                            <a className="hover:border-b-[1px] border-black text-sm px-3 py-1 cursor-pointer">{item.name}</a>
                        </Link>
                    ))}
                </ul>
                <button className="bg-green-500 py-2 px-6  rounded-full" onClick={() => setShowModal(!showModal)}>Sign In</button>
            </div>

            <Modal showModal={showModal} setShowModal={setShowModal} />

        </nav >
    );
};

export default Navbar; 