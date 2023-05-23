import React from 'react'
import "./searchpage.css"
import { TuneOutlined } from '@mui/icons-material'
import ChannelRow from './ChannelRow'
import Videorow from './Videorow'

function SearchPage() {
  return (
    <div className='searchPage'>
        <div className="searchpage_filter">
          <TuneOutlined />
          <h2>Filters</h2>
        </div>
        <hr />

        <ChannelRow 
          image="https://cdn.gro.care/8449233fcde8_1679559395383.webp"
          channel="anki_9686"
          verified
          subs="23"
          noOfVideos={3}
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet enim nec libero faucibus imperdiet. Nam auctor commodo nulla nec finibus."
        />
        <hr />
        <Videorow 
          views="3"
          subs="23"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet enim nec libero faucibus imperdiet. Nam auctor commodo nulla nec finibus."
          timestamp="59 second ago"
          channel="anki_9686"
          title="Random Title"
          image="https://cdn.gro.care/c1ac1e5482d8_1683525057025.jpeg"
          />
    </div>
  )
}

export default SearchPage