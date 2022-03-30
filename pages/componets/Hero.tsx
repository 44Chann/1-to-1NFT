import Link from "next/link"
const Hero = () => {
    return (
        <>
            <div className="flex relative flex-col lg:flex-row p-6">
                <div className="flex-col  items-center justify-center py-11 w-full lg:w-[50%] text-center lg:text-left border">
                    <h1 className="text-2xl lg:text-6xl my-4 font-bold ">
                        The 1/1 NFT marketplace for polygon
                    </h1>
                    <p className="text-lg mb-10 lg:text-left lg:text-2xl">Create and collect amazing digital art, without the negative environmental impact.</p>
                    <Link href="/explore" >
                        <a className="px-6 py-3  rounded-xl  text-lg bg-green-400 text-white">Explore amazing art</a>
                    </Link>
                </div>
                <div className="lg:w-[40%] relative w-full h-300px rounded-3xl lg:h-[500px] flex justify-start items-end">
                    <div className="h-22 absolute -bottom-8 drop-shadow-xl w-22 bg-white p-2 rounded-2xl mb-2">
                        <p>Name of artist</p>
                    </div>
                    <img src="/nft.avif" className="object-cover w-full rounded-3xl  h-full " alt="/nft.avif" />
                </div>

            </div>
        </>
    )
}

export default Hero;