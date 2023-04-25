import Image from 'next/image'
import { Inter } from 'next/font/google'
import Navigation from '@/components/Navigation'
import Details from '@/components/details'

const inter = Inter({ subsets: ['latin'] })

function Home () {
  return (
      <div className=" pt-4 pr-6 bg-gray-150">
          
          <Navigation />
          <div>
             <Details />
          </div>
          
      </div>
  )
}

export default Home;