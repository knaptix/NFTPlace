import React from 'react'

import NewYorkWorldSection from './NewYork'
import Swip from './Swip'

import NFTMarketplace from './NFtMarketPlace'
import StatsPanel from './StatsPanel'
import ExploreMusic from './ExploreMusic'
import ExploreArt from './ExploreArt'
import ExploreGaming from './ExploreGaming'
import ExplorePhotograph from './ExplorePhotograph'

const Home = () => {
  return (
    <div>

      <NewYorkWorldSection />
      <Swip />

      <NFTMarketplace />
      <ExploreMusic />
      <ExploreArt />
      <ExploreGaming />
      <ExplorePhotograph />
      <StatsPanel />
    </div>
  )
}

export default Home
