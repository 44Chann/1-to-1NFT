import Navbar from "./componets/Navbar";
import NFTlist from "./componets/NFTlist";

const Explore = () => {
    return (
        <>
            <div className="w-full lg:w-[80%] m-auto">
                <Navbar />
                <div className="lg:my-14 my-8 items-center  lg:flex m-auto justify-between w-full ">
                    <div className="text-center text-xl grow">
                        <h1>Explore 1/1 Art</h1>
                    </div>
                    <div className="mb-10 bg-white text-center drop-shadow-xl w-[90%] lg:w-auto m-auto my-4 lg:m-0 rounded-full">
                        <select className="px-4 py-1 outline-none rounded-full bg-white" name="Date" id="date" onChange={
                            (e) => {
                                console.log("set value here ")
                            }
                        } >
                            <option label="sort by Newest" value="newest">sort by Newest</option>
                            <option label="sort by oldest" value="oldest">sort by oldest</option>
                            <option label="sort by lowest price" value="lowest">sort by lowest price</option>
                            <option label="sort by highest price" value="highest">sort by highest price</option>
                        </select>
                    </div>
                </div>
                <div>
                    <NFTlist />
                </div>
            </div>


        </>
    )
}


export default Explore;