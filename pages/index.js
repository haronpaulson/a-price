import Image from 'next/image'
import { Inter } from 'next/font/google'
import Navigation from '@/components/Navigation'
import Details from '@/components/details'

const inter = Inter({ subsets: ['latin'] })

function Home () {
  return (
      <div className=" pt-4 pr-6 bg-gray-150">
          
          <Navigation />
          <h1>dsdn</h1>
          <div>
             <Details />
             <h1>j</h1>
          </div>
          
      </div>
  )
}

export default Home;