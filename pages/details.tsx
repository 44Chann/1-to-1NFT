import Link from 'next/link'
import Head from 'next/head'
import Navbar from '.'


const Homepage: React.FC = () => {
    return (
        <>
            <Head>
                <title>Blisz NFT</title>
            </Head>
            <div className='w-full lg:w-[80%] h-full'>
                <Navbar />

            </div>
        </>
    )
}

export default Homepage