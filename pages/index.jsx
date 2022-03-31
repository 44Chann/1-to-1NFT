import Head from 'next/head'
import Hero from './componets/Hero'
import Navbar from './componets/Navbar'
import Trending from './componets/NFTlist'
import { ethers } from 'ethers'
import React, { useState, useEffect } from 'react'

const Homepage = () => {
  const [account, setAccount] = useState('')
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  const checkIfWalletIsConnected = async () => {
    try {
      const { ethereum } = window
      if (!ethereum) {
        setIsAuthenticated(false)
        console.log('Make sure you have metamask!')
      } else {
        console.log('We have the ethereum object', ethereum)
        const accounts = await ethereum.request({ method: 'eth_accounts' })

        if (accounts.length !== 0) {
          const account = accounts[0]
          console.log('Found an authorized account', account)
          setIsAuthenticated(true)
          setAccount(account)
        }
      }
    } catch (e) {
      console.log(e)
    }
  }
  const connectWalletAction = async () => {
    try {
      const { ethereum } = window

      if (!ethereum) {
        alert('Get Metamask!')
        return
      }

      const accounts = await ethereum.request({
        method: 'eth_requestAccounts',
      })

      console.log('Connected', accounts[0])
      setAccount(accounts[0])
      setIsAuthenticated(true)
    } catch (e) {
      console.log(e)
    }
  }
  useEffect(() => {
    checkIfWalletIsConnected()
  }, [])
  return (
    <>
      <Head>
        <title>Blitz</title>
      </Head>
      <div className="m-auto h-full w-full lg:w-[80%]">
        <Navbar
          account={account}
          isAuthenticated={isAuthenticated}
          connectWalletAction={connectWalletAction}
        />
        <Hero />
        <Trending />
      </div>
    </>
  )
}

export default Homepage
