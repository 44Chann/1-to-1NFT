import React from "react";

interface Props {
    showModal: any
    setShowModal: Function
}

export default function Modal({ showModal, setShowModal }: Props) {

    return (
        <>

            {showModal ? (
                <>
                    <div
                        className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                    >
                        <div className="relative my-6 mx-auto lg:w-[800px] max-w-3xl">
                            {/*content*/}
                            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                {/*header*/}
                                <div className="flex items-start justify-between p-5  rounded-t">
                                    <h3 className="text-3xl font-semibold">
                                        Create New Art
                                    </h3>
                                    <button
                                        className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                        onClick={() => setShowModal(false)}
                                    >
                                        <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                                            ×
                                        </span>
                                    </button>
                                </div>
                                {/*body*/}
                                <form className=' w-[90%] m-auto '>

                                    <input
                                        id="Artist Name"
                                        name="name"
                                        type="text"
                                        required={true}
                                        placeholder="Enter your Name"
                                        className="w-[90%] max-w-lg px-3 py-2  border my-4"
                                    />
                                    <input
                                        id="NFT Name"
                                        name="nft name"
                                        type="text"
                                        required={true}
                                        placeholder="Enter NFT Name"
                                        className="w-[90%] max-w-lg px-3 py-2  my-4 border"
                                    />
                                    <input
                                        id="NFT price"
                                        name="nft price"
                                        type="number"
                                        required={true}
                                        placeholder="Ente NFT price"
                                        className="w-[90%] max-w-lg px-3 py-2   my-4 border"
                                    />
                                    <textarea
                                        id="description"
                                        name="desccription"

                                        required={true}
                                        placeholder="Add  description"
                                        className="w-[90%] max-w-lg px-3 py-2 border  my-4"
                                    />

                                    <div className="m-4">
                                        <label className="inline-block mb-2 text-gray-500">
                                            upload NFT (jpg,png,svg,jpeg)</label>
                                        <div className="flex items-center justify-center w-full">
                                            <label className="flex flex-col w-full h-32 border-4 border-dashed hover:bg-gray-100 hover:border-gray-300">
                                                <div className="flex flex-col items-center justify-center pt-7">
                                                    <svg xmlns="http://www.w3.org/2000/svg"
                                                        className="w-12 h-12 text-gray-400 group-hover:text-gray-600" viewBox="0 0 20 20"
                                                        fill="currentColor">
                                                        <path fill-rule="evenodd"
                                                            d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                                                            clip-rule="evenodd" />
                                                    </svg>
                                                    <p className="pt-1 text-sm tracking-wider text-gray-400 group-hover:text-gray-600">
                                                        Select a photo</p>
                                                </div>
                                                <input type="file" className="opacity-0" />
                                            </label>
                                        </div>
                                    </div>


                                </form>
                                {/*footer*/}
                                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                                    <button
                                        className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                        type="button"
                                        onClick={() => setShowModal(false)}
                                    >
                                        Close
                                    </button>
                                    <button
                                        className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                        type="button"
                                        onClick={() => setShowModal(false)}
                                    >
                                        submit
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                </>
            ) : null
            }
        </>
    );
}