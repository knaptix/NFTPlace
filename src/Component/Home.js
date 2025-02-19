import React from 'react'

import NewYorkWorldSection from './NewYork'
import Swip from './Swip'

import NFTMarketplace from './NFtMarketPlace'
import StatsPanel from './StatsPanel'

const Home = () => {
  return (
    <div>
      
      <NewYorkWorldSection />
      <Swip />
     
      <NFTMarketplace />
      <StatsPanel />
    </div>
  )
}

export default Home
