import NFTcard from "./NFTCard";

const NFTlist = () => {
    return (
        <>
            <div className=" w- my-10">
                <h1 className="text-3xl text-center">Trending Art</h1>
                <div className="w-[90%] m-auto lg:w-full sm:flex flex-wrap justify-around  ">
                    <NFTcard />
                    <NFTcard />
                    <NFTcard />
                    <NFTcard />
                    <NFTcard />
                    <NFTcard />
                    <NFTcard />
                    <NFTcard />
                    <NFTcard />
                    <NFTcard />
                    <NFTcard />
                    <NFTcard />
                </div>
            </div>
        </>
    )
}

export default NFTlist;