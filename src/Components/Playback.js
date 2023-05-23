import React from 'react'
import "./playback.css"
import { ThumbUpSharp,ThumbDownOffAltOutlined,ReplyOutlined,MoreHorizOutlined } from '@mui/icons-material'
import { useStateValue } from './StateProvider'

function Playback() {

    const [ state,dispatch ] = useStateValue();
  
    
  return (
    <div className='Playback'>
        <div className="playback_left_whole_part">
        <div className="playback_left">
            {/* <img 
            src="https://www.youtube.com/watch?v=wObV_hwu2QM" 
            alt="img"
            className='videox' /> */}
            <video src={state.mediaUrl} className='videox' autoPlay controls></video>
            <div className="video_title_playback">{state.title}</div>
            <div className="video_info_playback">
                <div className="video_info_left">
                    <img 
                    src={state.pic}
                    alt="img"
                    className='creator_image_small' />
                    <div className="creator_info">
                        <p className='creator_name'>{state.channel}</p>
                        <p className='subscriber_count'>23 subscribers</p>
                    </div>
                    <button className='subscribe_button'>Subscribe</button>
                </div>
                <div className="video_info_right">
                    <div className="likedislike">
                        <ThumbUpSharp className='like_button' />
                        <p className='like_number'>7</p>
                        <ThumbDownOffAltOutlined className='dislike_button' />
                    </div>
                    <div className="share">
                        <ReplyOutlined className='share_button' />
                        <p className='share_name'>Share</p>
                    </div>
                    <div className="three_dot_x">
                        <MoreHorizOutlined className='three_dot' />
                    </div>
                </div>

            </div>
                <div className="playback_description">
                    <p className='views_ts_playback'>{state.views} views {state.timestamps}</p>
                    <p>{state.discription}</p>
                </div>
                <div className="comment_section_playback">
                    <p>{state.commentCount} Comments</p>
                </div>
            </div>
        </div>
        <div className="playback_right"></div>
    </div>
  )
}

export default Playback