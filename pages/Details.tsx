import Navbar from "./componets/Navbar";

const Details = () => {
    return (
        <>
            <div className="w-full lg:w-[80%] m-auto ">
                <Navbar />
                <div className="w-[90%] lg:w-full m-auto lg:flex my-12 ">
                    <div className=" w-full  sm:max-w-xl sm:m-auto lg:w-[40%] py-8  ">
                        <img src="/nft.avif" className="object-cover" alt="" />
                    </div>
                    <div className="lg:w-[60%]  -black p-3">
                        <h1 className="text-3xl font-bold mb-4">NFT Title</h1>
                        <div>

                            <div className="px-2">
                                <p className="opacity-60 text-lg">CREATOR</p>
                                <div className="bg-white p-2 drop-shadow-xl w-max my-6">
                                    <p>NFT creator</p>
                                </div>

                            </div>
                            <div className="px-2 text-lg">
                                <p className="opacity-60">Owner</p>
                                <div className="bg-white p-2 drop-shadow-xl w-max my-6">
                                    <p>NFT Owner</p>
                                </div>

                            </div>

                            <div className="py-6 px-2  text-lg">
                                <p className="opacity-60">DESCRIPTION</p>
                                <p>Have you ever imagined the new era of the world or another side of the world a dimantion </p>

                            </div>
                            <div className="px-2 ">
                                <p className="opacity-60">LAST SOLD FOR</p>
                                <p className="p-4">1@</p>
                            </div>
                            <div>
                                <button className="bg-green-500 py-3 px-6 text-xl rounded-full my-10">Sign In</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div>
                    </div>
                    <div>

                    </div>
                </div>
            </div>

        </>
    )
}


export default Details;