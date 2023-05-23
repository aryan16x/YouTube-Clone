import React from 'react'
import "./ChannelRow.css"
import { VerifiedOutlined } from '@mui/icons-material'

function ChannelRow({image, channel, subs, noOfVideos, description, verified}) {
  return (
    <div className='channelRow'>
        <img 
            src={image}  
            alt="img"
            className='channelrow_photo' 
        />
        <div className="channelrow_text">
            <h4>{channel} {verified && <VerifiedOutlined />} </h4>
            <p>{subs} subscribers • {noOfVideos} videos</p>
            <p>{description}</p>
        </div>
    </div>
  )
}

export default ChannelRow