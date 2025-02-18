import React from 'react'
import Navbar from './Navbar'
import NewYorkWorldSection from './NewYork'
import Swip from './Swip'
import TabSwitcher from './TabSwitcher'
import NFTMarketplace from './NFtMarketPlace'
import StatsPanel from './StatsPanel'

const Home = () => {
  return (
    <div>
      
      <NewYorkWorldSection />
      <Swip />
      <TabSwitcher/>
      <NFTMarketplace />
      <StatsPanel />
    </div>
  )
}

export default Home
