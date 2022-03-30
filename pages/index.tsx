import Head from 'next/head'
import Hero from './componets/Hero'
import Navbar from './componets/Navbar'
import NFTcard from './componets/NFTCard'
import Trending from './componets/Trending'





const Homepage: React.FC = () => {
  return (
    <>
      <Head>
        <title>Blitz</title>
      </Head>
      <div className='w-full lg:w-[80%] m-auto h-full'>
        <Navbar />
        <Hero />
        <Trending />

      </div>
    </>
  )
}

export default Homepage