import React from 'react'
import { NFT_CONTRACT_ADDRESS, MARKETPLACE_ADDRESS } from '../../config'
import { useState, useEffect, useRef } from 'react'
import { create } from 'ipfs-http-client'
import { ethers } from 'ethers';
import MarketABI from '../../utils/marketplace.json'
import NFTABI from '../../utils/nft.json'
// interface Props {
//     showModal: any
//     setShowModal: Function
// }

export default function Modal({ showModal, setShowModal }) {
  const [nftContract, setNFTContract] = useState('')
  const [marketPlaceContract, setMarketContract] = useState('')
  const [imageURL, setImageURL] = useState('')
  const provider = useRef()

  const client = create('https://ipfs.infura.io:5001/api/v0')

  const handleImageUpload = async (event) => {
    event.preventDefault()
    const reader = new FileReader()
    const file = event.target.files[0]

    const addFile = await client.add(file, {
      progress: (prog) => console.log(`received: ${prog}`),
    })
    const url = `https://ipfs.infura.io/ipfs/${addFile.path}`
    setImageURL(url)
  }

  useEffect(() => {
    try {
      const { ethereum } = window

      if (ethereum) {
        provider.current = new ethers.providers.Web3Provider(ethereum)
        const signer = provider.current.getSigner()
        const nftContract = new ethers.Contract(
          NFT_CONTRACT_ADDRESS,
          NFTABI.abi,
          signer
        )

        const marketPlaceContract = new ethers.Contract(
          MARKETPLACE_ADDRESS,
          MarketABI.abi,
          signer
        )

        setNFTContract(nftContract)
        setMarketContract(marketPlaceContract)
      }
    } catch (err) {
      console.log('In error: ' + err)
    }
  }, [])

  return (
    <>
      {showModal ? (
        <>
          <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto overflow-x-hidden outline-none focus:outline-none">
            <div className="relative my-6 mx-auto max-w-3xl lg:w-[800px]">
              {/*content*/}
              <div className="relative flex w-full flex-col rounded-lg border-0 bg-white shadow-lg outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between rounded-t  p-5">
                  <h3 className="text-3xl font-semibold">Create New Art</h3>
                  <button
                    className="float-right ml-auto border-0 bg-transparent p-1 text-3xl font-semibold leading-none text-black opacity-5 outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="block h-6 w-6 bg-transparent text-2xl text-black opacity-5 outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <form className=" m-auto w-[90%] ">
                  <input
                    id="Artist Name"
                    name="name"
                    type="text"
                    required={true}
                    placeholder="Enter your Name"
                    className="my-4 w-[90%] max-w-lg border  px-3 py-2"
                  />
                  <input
                    id="NFT Name"
                    name="nft name"
                    type="text"
                    required={true}
                    placeholder="Enter NFT Name"
                    className="my-4 w-[90%] max-w-lg border  px-3 py-2"
                  />
                  <input
                    id="NFT price"
                    name="nft price"
                    type="number"
                    required={true}
                    placeholder="Ente NFT price"
                    className="my-4 w-[90%] max-w-lg border   px-3 py-2"
                  />
                  <textarea
                    id="description"
                    name="desccription"
                    required={true}
                    placeholder="Add  description"
                    className="my-4 w-[90%] max-w-lg border px-3  py-2"
                  />

                  {imageURL ? (
                    <img
                      src={imageURL }
                      alt="uploadedImage"
                      onError={(e) => (e.target.src = defaultImage)}
                      className="object-cover object-center lg:h-full lg:w-full"
                    />
                  ) : (
                    <div className="m-4">
                      <label className="mb-2 inline-block text-gray-500">
                        upload NFT (jpg,png,svg,jpeg)
                      </label>
                      <div className="flex w-full items-center justify-center">
                        <label className="flex h-32 w-full flex-col border-4 border-dashed hover:border-gray-300 hover:bg-gray-100">
                          <div className="flex flex-col items-center justify-center pt-7">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-12 w-12 text-gray-400 group-hover:text-gray-600"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                            >
                              <path
                                fill-rule="evenodd"
                                d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                                clip-rule="evenodd"
                              />
                            </svg>
                            <p className="pt-1 text-sm tracking-wider text-gray-400 group-hover:text-gray-600">
                              Select a photo
                            </p>
                          </div>
                          <input
                            type="file"
                            onChange={handleImageUpload}
                            className="opacity-0"
                          />
                        </label>
                      </div>
                    </div>
                  )}
                </form>
                {/*footer*/}
                <div className="flex items-center justify-end rounded-b border-t border-solid border-slate-200 p-6">
                  <button
                    className="background-transparent mr-1 mb-1 px-6 py-2 text-sm font-bold uppercase text-red-500 outline-none transition-all duration-150 ease-linear focus:outline-none"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                  <button
                    className="mr-1 mb-1 rounded bg-emerald-500 px-6 py-3 text-sm font-bold uppercase text-white shadow outline-none transition-all duration-150 ease-linear hover:shadow-lg focus:outline-none active:bg-emerald-600"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    submit
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="fixed inset-0 z-40 bg-black opacity-25"></div>
        </>
      ) : null}
    </>
  )
}
