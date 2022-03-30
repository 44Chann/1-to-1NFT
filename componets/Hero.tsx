import Link from "next/link"


export const Hero = () => {
    return (
        <>
            <div className="flex">
                <div className="flex-col text-center items-center">
                    <h1 className="text-2xl lg:text-4xl my-4 ">
                        The 1/1 NFT marketplace for polygon
                    </h1>
                    <p className="text-lg text-center lg:text-left">Create and collect amazing digital art, without the negative environmental impact.</p>
                    <Link href="/explore">
                        <a className="p-4 text-lg bg-green-400 text-white">Explore amazing art</a>
                    </Link>

                </div>
                <div>
                    <img src="" alt="" />
                </div>

            </div>
        </>
    )
}