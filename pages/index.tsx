import Head from 'next/head'
import { Navbar } from '../componets/navbar.t'



const Homepage: React.FC = () => {
  return (
    <>
      <Head>
        <title>Blitz</title>
      </Head>
      <div className='w-full h-full'>
        <Navbar />
      </div>
    </>
  )
}

export default Homepage