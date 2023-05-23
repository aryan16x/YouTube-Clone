import React from 'react'
import "./videorow.css"

function Videorow({ views,subs,description,timestamp,channel,title,image }) {
  return (
    <div className='videoRow'>
        <img src={image} alt="Image" />
        <div className="video_text_x">
            <h3>{title}</h3>
            <p className='videorow_headline'>
                {channel} • <span className='videorow_subs'><span className='subs_count_videorow'>{subs}</span> Subscribers</span> {views} views • {timestamp}
            </p>
            <p className='videorow_description'>
                {description}
            </p>
        </div>
    </div>
  )
}

export default Videorow