import React, { Component } from 'react'
import "./video.css"
import { useStateValue } from './StateProvider';

function Video({key,image,title,channel,views,timestamps,discription,mediaUrl,hyperLink,commentCount,pic}) {

    const [ state,dispatch ] = useStateValue();

    const play_video = () => {
      dispatch({
        type: 'PLAY_VIDEO',
        item: {
          key: key,
          title: title,
          channel: channel,
          views: views,
          timestamps: timestamps,
          discription: discription,
          mediaUrl: mediaUrl,
          hyperLink: hyperLink,
          commentCount: commentCount,
          pic: pic
        }
      })
    }

  return(
    <div className='Video' onClick={play_video}>
        <img src={image} alt="Image" className='video_thumbnail' />
        <div className="video_info">
            {/* <Circle className='video_avatar' /> */}
            <img src={pic} alt="image" className='video_avatar' />
            <div className="video_text">
                <h4>{title}</h4>
                <p>{channel}</p>
                <p>{views} views • {timestamps}</p>
            </div>
        </div>

    </div>
  )
}

export default Video