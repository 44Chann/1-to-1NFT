import Link from 'next/link'
import { useState } from 'react'
import { ethers } from 'ethers'
import Modal from './Modal'
const Navbar = ({ account, isAuthenticated, connectWalletAction }) => {
  const [showModal, setShowModal] = useState(false)

  if (account) {
    console.log('Navbar', account)
  } else {
    console.log('No account')
  }

  return (
    <nav className="font-inter left-0 right-0 top-0 z-50 flex  w-full  items-center  justify-between  border px-16 py-4">
      <div>
        <Link href="/">
          <a className="font-bold lg:text-2xl">Blisz NFT</a>
        </Link>
      </div>
      <div className="flex items-center">
        <ul className="item-center  justify-center lg:flex lg:flex-row">
          {[
            {
              name: 'Explore',
              link: '/Explore',
            },
          ].map((item) => (
            <Link href={item.link}>
              <a className="cursor-pointer border-black px-3 py-1 text-sm hover:border-b-[1px]">
                {item.name}
              </a>
            </Link>
          ))}
        </ul>

        {!account ? (
          <button
            className="rounded-full bg-green-500 py-2  px-6"
            onClick={() => connectWalletAction()}
          >
            Sign In
          </button>
        ) : (
          <button
            className="rounded-full bg-green-500 py-2  px-6"
            onClick={() => setShowModal(true)}
          >
            Create
          </button>
        )}
      </div>

      <Modal showModal={showModal} setShowModal={setShowModal} />
    </nav>
  )
}

export default Navbar
